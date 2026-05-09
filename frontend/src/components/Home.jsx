import React from 'react';
import HeroCarousel from './HeroCarousel';
import Partners from './Partners';
import InfosOzone from './InfosOzone';
import TrustSection from './TrustSection';
import Activite from './Activite';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustSection />
      <InfosOzone />
      <Activite />
      <Partners />
    </>
  );
}
