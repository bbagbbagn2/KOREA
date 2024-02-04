import React from 'react';

import BannerSectionComponent from './component/BannerSection';
import WallpaperSectionComponent from './component/WallpaperSection';
import QuitMethodSection from './component/QuitMethodSection';

import Root from '@components/ui/Root';
import Main from '@components/ui/Main';
import Title from '@components/ui/Title';
import Text from '@components/ui/Text';

import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

export default function Sustainability() {
  return (
    <Root>
      <Header />
      <Main>
        <div className="cmp-container">
          <BannerSectionComponent />
          <Title marginTop="120px" titleProps="지속 가능한 금연을 위한 노력" />
          <Text
            marginTop="24px"
            textProps="금연은 우리의 미래를 위한 지속 가능한 선택입니다. 
              우리는 더 나은 세계를 위해 모두가 함께 노력하는 공동체의 일원이며, 금연은 그 노력의 일환입니다. 
              전 세계의 많은 사람들이 담배에서 벗어나고, 우리의 삶과 지역사회, 
              심지어는 지구 전체에 긍정적인 변화를 이끌어내기 위해 힘쓰고 있습니다."
          />
          <WallpaperSectionComponent />
          <Title marginTop="120px" fontSize='32px' titleProps="금연을 성공하는 방법" />
          <QuitMethodSection />
        </div>
      </Main>
      <Footer />
    </Root>
  );
}
