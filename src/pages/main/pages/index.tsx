import React from 'react';
import styled from 'styled-components';

import FirstSection from './FirstSection';
import CampaingnSection from './CampaignSection';
import LocationSection from './LocationSection';
import Header from '@components/ui/Header/Header';
import Footer from '@components/ui/Footer/Footer';

export default function Main() {
  return (
    <RootContainer>
      <Header />
      <FirstSection />
      <CampaingnSection />
      <LocationSection />
      <Footer />
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
