import React from 'react';
import styled from 'styled-components';

import Main from '@components/ui/Main';
import ContainerComponent from '@components/ui/CampaignContainer';

import main1 from '@assets/images/main/Campaign Main1.png';
import main2 from '@assets/images/main/Campaign Main2.png';

export default function CampaingnSection() {
  return (
    <Main>
      <div className="cmp-container">
        <ContainerComponent
          title="지속 가능한 금연을 위한 노력"
          content="금연은 우리의 미래를 위한 지속 가능한 선택입니다. 우리는 더 나은
                세계를 위해 모두가 함께 노력하는 공동체의 일원이며, 금연은 그
                노력의 일환입니다. 전 세계의 많은 사람들이 담배에서 벗어나고,
                우리의 삶과 지역사회, 심지어는 지구 전체에 긍정적인 변화를
                이끌어내기 위해 힘쓰고 있습니다."
          buttonLink="/sustainability"
          buttonText="자세히 보기"
          imageSrc={main1}
          imageAlt="클라우드 보기"
        />
        <ContainerComponent
          title="금연을 위한 건강한 여정"
          content="건강한 새로운 삶의 시작, 금연의 놀라운 여정을 함께 살펴봐요. 건강한 
                미래에 한 걸음 더 나아가세요."
          buttonLink="/"
          buttonText="자세히 보기"
          imageSrc={main2}
          imageAlt="클라우드 보기"
          reverseLayout
          rightLayout
        />
      </div>
    </Main>
  );
}

const CampaignContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 0;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const CampaignBox = styled.div`
  margin: 0;
  margin-inline: -8px;
  display: flex;
  flex-direction: column;
  flex-wrap: unset;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
    padding: 0;
    align-items: flex-start;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-align: start;
  }
`;

const ContentBox = styled.div`
  padding: 32px 24px;
  padding-inline: 8px;
  position: relative;
  min-width: 100%;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 100%;
  flex-direction: column;
  z-index: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: start;
  -webkit-box-flex: 0;

  h3 {
    margin: 0;
  }

  p {
    margin: 16px 0 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 14px 18px rgba(0, 0, 0, 0.06);
    z-index: -1;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
    padding: 64px 80px;
    min-width: 50%;
    min-height: 552px;
    flex: 0 0 50%;
    -webkit-box-flex: 0;

    &::before {
      inset: 0 16px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 36px;

  @media only screen and (min-width: 1200px) {
    margin-top: auto;
  }
`;

const ImageBox = styled.div`
  flex: 0 0 100%;
  flex-grow: 1;
  margin-left: 24px;
  margin-top: 80px;
  min-width: 100%;
  padding-inline: 8px;
  padding: 0;
  position: relative;
  width: calc(100vw - 17px);

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      display: block;
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 80px;
    margin-left: unset;
    padding-inline: 16px;
    left: auto;
    right: 8.33333%;
    min-width: 58.33333%;
    flex: 0 0 58.33333%;

    picture {
      border-radius: 16px;
      overflow: hidden;
    }
  }
`;
