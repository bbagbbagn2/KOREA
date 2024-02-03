import React from 'react';

import Root from '@components/ui/Root';
import Main from '@components/ui/Main';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import BannerSectionComponent from './component/BannerSection';

export default function Sustainability() {
  return (
    <Root>
      <Header />
      <Main>
        <div className="cmp-container">
          <BannerSectionComponent />
        </div>
      </Main>
      <Footer />
    </Root>
  );
}
