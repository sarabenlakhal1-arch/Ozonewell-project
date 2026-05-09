import sqlite3
import os
from fastapi import FastAPI, File, UploadFile, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import Optional

app = FastAPI()

# 1. CONFIGURATION DE SÉCURITÉ (CORS) - CONNEXION AVEC VERCEL
# C'est ici qu'on autorise ton site Vercel à communiquer avec ton API Render
origins = [
    "http://localhost:5173",                   # Pour tes tests locaux
    "https://ozonewell-project.vercel.app",    # TON LIEN VERCEL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,                     # On utilise la liste définie au-dessus
    allow_credentials=True,
    allow_methods=["*"],                       # Autorise GET, POST, PUT, DELETE
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

# Montage du dossier pour rendre les photos accessibles via l'URL
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

# 2. CONFIGURATION DE LA BASE DE DONNÉES
def get_db_connection():
    conn = sqlite3.connect('ozonewell.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.on_event("startup")
def startup():
    conn = get_db_connection()
    conn.execute('''CREATE TABLE IF NOT EXISTS products 
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                  name TEXT, power TEXT, volume TEXT, category TEXT, image_url TEXT)''')
    try:
        conn.execute('SELECT image_url FROM products LIMIT 1')
    except sqlite3.OperationalError:
        conn.execute('ALTER TABLE products ADD COLUMN image_url TEXT')
    conn.commit()
    conn.close()

# 3. MODÈLES
class ChatMessage(BaseModel):
    text: str

class LoginRequest(BaseModel):
    username: str
    password: str

# 4. CONFIGURATION DU CHATBOT (IA)
knowledge_base = [
    {"q": "OZO 1250 10000 caractéristiques puissance volume ozone", "a": "Le OZO 1250 / 10000 consomme entre 2,5W et 19,8W pour un débit d'ozone de 17 à 95 mg/h."},
    {"q": "OZO MINI 500mg détails technique puissance", "a": "Le OZO MINI 500mg a une puissance de 60W et produit 500 mg/h d'ozone."},
    {"q": "OZO Canyon 12g 12000mg puissance industrielle", "a": "Le OZO Canyon consomme 200W et produit 12000 mg/h (12g) d'ozone."},
    {"q": "PUR 160 caractéristiques débit air puissance", "a": "Le purificateur PUR 160 consomme 40W pour un débit d'air de 160 m3/h."},
    {"q": "PUR 320 caractéristiques débit air puissance", "a": "Le PUR 320 offre 80W de puissance et un débit de 320 m3/h."},
    {"q": "PUR 488 caractéristiques débit air puissance", "a": "Le PUR 488 consomme 95W pour un débit de 488 m3/h."},
    {"q": "PUR 750 caractéristiques débit air puissance professionnel", "a": "Le PUR 750 est notre haut de gamme avec 140W et 750 m3/h."},
    {"q": "C'est quoi le CO2 dioxyde de carbone danger", "a": "Le CO2 indique le niveau de confinement de l'air. Un taux élevé cause fatigue et maux de tête."},
    {"q": "Où se trouve Ozonewell Casablanca adresse contact", "a": "Ozonewell est situé au 80, rue Allal Ben Ahmed Amkik, Belvédère 20300 Casablanca."}
]

questions = [item["q"] for item in knowledge_base]
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

# 5. LES ROUTES (ENDPOINTS)

@app.get("/")
def home():
    return {"message": "Serveur Ozonewell API en ligne !"}

@app.post("/api/login")
async def login(data: LoginRequest):
    if data.username == "admin" and data.password == "ozonewell2026":
        return {"status": "success", "token": "fake-jwt-token-for-session"}
    else:
        raise HTTPException(status_code=401, detail="Nom d'utilisateur ou mot de passe incorrect")

@app.post("/chat")
async def chat(msg: ChatMessage):
    user_vec = vectorizer.transform([msg.text])
    similarities = cosine_similarity(user_vec, X)
    best_match_idx = similarities.argmax()
    if similarities[0][best_match_idx] > 0.1:
        return {"reply": knowledge_base[best_match_idx]["a"]}
    return {"reply": "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?"}

@app.get("/api/products")
def get_products():
    conn = get_db_connection()
    products = conn.execute('SELECT * FROM products').fetchall()
    conn.close()
    return [dict(p) for p in products]

@app.post("/api/products")
async def add_product(
    name: str = Form(...), 
    power: str = Form(...), 
    volume: str = Form(...), 
    category: str = Form(...),
    file: Optional[UploadFile] = File(None)
):
    image_url = ""
    if file and file.filename:
        safe_filename = file.filename.replace(" ", "_")
        file_path = os.path.join(UPLOAD_DIR, safe_filename)
        content = await file.read()
        with open(file_path, "wb") as f:
            f.write(content)
        image_url = f"/uploads/{safe_filename}"

    conn = get_db_connection()
    conn.execute('INSERT INTO products (name, power, volume, category, image_url) VALUES (?, ?, ?, ?, ?)',
                 (name, power, volume, category, image_url))
    conn.commit()
    conn.close()
    return {"status": "success"}

@app.put("/api/products/{product_id}")
async def update_product(
    product_id: int,
    name: str = Form(...), 
    power: str = Form(...), 
    volume: str = Form(...), 
    category: str = Form(...),
    file: Optional[UploadFile] = File(None)
):
    image_url = None
    if file and file.filename:
        safe_filename = file.filename.replace(" ", "_")
        file_path = os.path.join(UPLOAD_DIR, safe_filename)
        content = await file.read()
        with open(file_path, "wb") as f:
            f.write(content)
        image_url = f"/uploads/{safe_filename}"

    conn = get_db_connection()
    if image_url:
        conn.execute('UPDATE products SET name=?, power=?, volume=?, category=?, image_url=? WHERE id=?',
                     (name, power, volume, category, image_url, product_id))
    else:
        conn.execute('UPDATE products SET name=?, power=?, volume=?, category=? WHERE id=?',
                     (name, power, volume, category, product_id))
    conn.commit()
    conn.close()
    return {"status": "updated"}

@app.delete("/api/products/{product_id}")
def delete_product(product_id: int):
    conn = get_db_connection()
    conn.execute('DELETE FROM products WHERE id = ?', (product_id,))
    conn.commit()
    conn.close()
    return {"status": "deleted"}