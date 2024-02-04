import React from 'react';
import styled from 'styled-components';

import useImageFadeIn from '@hooks/useImageFadeIn';

import desktop from '@assets/images/sustainability/sustainability-desktop.png';

export default function BannerSectionComponent() {
  const imageOpacity = useImageFadeIn();

  return (
    <TeaserHeroBox>
      <TeaserContainer>
        <ContentBox>
          <h1>SUSTAINABILITY</h1>
        </ContentBox>
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
      </TeaserContainer>
    </TeaserHeroBox>
  );
}

const TeaserHeroBox = styled.div`
  position: relative;
`;


const TeaserContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100%;

  @media only screen and (min-width: 1200px) and (min-width: 1200px) {
    margin-left: calc((1120px - min(100vw - 16px, 1440px)) / 2);
    width: min(100vw - 16px, 1440px);
    max-width: unset;
  }
`;

const ContentBox = styled.div`
  padding: 24px 0 0;
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  z-index: 1;

  h1 {
    margin-bottom: 12px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0 calc(50% - 560px);
    width: 1120px;
    align-items: center;
    -webkit-box-align: center;

    > * {
      width: 50%;
    }

    h1 {
      margin-bottom: 16px;
    }
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
