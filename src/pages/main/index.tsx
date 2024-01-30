import React from 'react';

import FirstSection from './FirstSection';
import CampaingnSection from './CampaignSection';
import LocationSection from './LocationSection';

import Root from '@components/form/RootContainer';
import Header from '@components/ui/Header/Header';
import Footer from '@components/ui/Footer/Footer';

export default function Main() {
  return (
    <Root>
      <Header />
      <FirstSection />
      <CampaingnSection />
      <LocationSection />
      <Footer />
    </Root>
  );
}