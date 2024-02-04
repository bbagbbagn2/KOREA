import React from 'react';
import styled from 'styled-components';

import useImageFadeIn from '@hooks/useImageFadeIn';

import desktop from '@assets/images/sustainability/teaser-desktop.png';

export default function WallpaperSectionComponent() {
  const imageOpacity = useImageFadeIn();

  return (
    <Wrapper>
      <TeaserBox>
        <ContentContainer>
          <ContentBox>
            <b>
              <p>
                꾸준한 노력은 지속적인 변화를 가져옵니다. 자신을 향한 믿음과
                자부심, 그것이 가장 큰 원동력입니다.
              </p>
            </b>
          </ContentBox>
        </ContentContainer>
        <ImageContainer>
          <div>
            <picture>
              <img
                loading="lazy"
                src={desktop}
                alt=""
                style={{
                  opacity: imageOpacity,
                  transition: 'opacity .4s ease',
                }}
              />
            </picture>
          </div>
        </ImageContainer>
      </TeaserBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  padding: 0 24px;
  width: min(100vw - 16px, 1440px);

  @media only screen and (min-width: 1200px) {
    background: none;
    margin-top: 32px;
    margin-left: calc((1120px - min(100vw - 16px, 1440px)) / 2);
  }
`;

const TeaserBox = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 551px;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 1280px;
  }
`;

const ContentContainer = styled.div`
  padding: 24px 0 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  z-index: 1;

  @media only screen and (min-width: 1200px) {
    padding: 0;
    margin: 0 auto;
    width: 1120px;
    padding-top: 24px;
    align-items: flex-start;
    -webkit-box-pack: center;
    -webkit-box-align: start;

    * {
      width: 50%;
    }
  }
`;

const ContentBox = styled.div`
  margin-bottom: 12px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 16px;
    text-align: start;
  }
`;

const ImageContainer = styled.div`
  margin-left: 24px;
  position: relative;
  top: 0;
  bottom: 0;
  width: min(100vw - var(16px), 1440px);
  max-width: calc(100% + 48px);
  aspect-ratio: 0.7496871089;

  > div {
    height: 100%;
  }

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      transition: opacity 0.4s ease;
      height: 100%;
      object-fit: cover;
      width: 100%;
      display: block;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
    max-width: unset;
    aspect-ratio: 2.3225806452;
  }

  &::after {
    position: absolute;
    inset: 0;
    content: '';
  }
`;
