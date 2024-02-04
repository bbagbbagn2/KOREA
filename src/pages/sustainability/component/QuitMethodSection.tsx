import React from 'react';
import styled from 'styled-components';

import useImageFadeIn from '@hooks/useImageFadeIn';

import desktop from '@assets/images/sustainability/sustainability-desktop.png';

export default function QuitMethodSection() {
  const imageOpacity = useImageFadeIn();

  return (
    <div>
      <Container>
        <TeaserContentBox>
          <a href="#">
            <TeaserBox>
              <ContentBox>
                <h3>자가진단 하기</h3>
                <DescriptionBox>
                  <p>
                    금연의 자가진단은 당신의 흡연 습관을 평가하고 개선할 수 있는
                    유용한 도구입니다.
                  </p>
                </DescriptionBox>
              </ContentBox>
              <ImageBox>
                <div>
                  <picture>
                    <img
                      src={desktop}
                      loading="lazy"
                      alt="자가진단 이미지"
                      style={{
                        opacity: imageOpacity,
                        transition: 'opacity .4s ease',
                      }}
                    />
                  </picture>
                </div>
              </ImageBox>
            </TeaserBox>
          </a>
        </TeaserContentBox>
        <TeaserContentBox>
          <a href="#">
            <TeaserBox>
              <ContentBox>
                <h3>제목</h3>
                <DescriptionBox>
                  <p>내용</p>
                </DescriptionBox>
              </ContentBox>
              <ImageBox>
                <div>
                  <picture>
                    <img
                      src={desktop}
                      loading="lazy"
                      alt="자가진단 이미지"
                      style={{
                        opacity: imageOpacity,
                        transition: 'opacity .4s ease',
                      }}
                    />
                  </picture>
                </div>
              </ImageBox>
            </TeaserBox>
          </a>
        </TeaserContentBox>
        <TeaserContentBox>
          <a href="#">
            <TeaserBox>
              <ContentBox>
                <h3>제목</h3>
                <DescriptionBox>
                  <p>내용</p>
                </DescriptionBox>
              </ContentBox>
              <ImageBox>
                <div>
                  <picture>
                    <img
                      src={desktop}
                      loading="lazy"
                      alt="자가진단 이미지"
                      style={{
                        opacity: imageOpacity,
                        transition: 'opacity .4s ease',
                      }}
                    />
                  </picture>
                </div>
              </ImageBox>
            </TeaserBox>
          </a>
        </TeaserContentBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;

  > * {
    flex: 0 0 100%;
    min-width: 100%;
    padding-inline: 8px;
  }
  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;

    > * {
      flex: 0 0 33.3333333333%;
      min-width: 33.3333333333%;
      padding-inline: 16px;
    }
  }
`;

const TeaserContentBox = styled.div`
  margin-top: 32px;

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
  }
`;

const TeaserBox = styled.div`
  margin-top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 16px;
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
`;

const ContentBox = styled.div`
  padding: 32px 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  @media only screen and (min-width: 1200px) {
    padding: 40px;

    h3 {
      margin-bottom: 8px;
    }

    h3 {
      margin-bottom: 16px;
    }
  }
`;

const DescriptionBox = styled.div`
  p {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 1200px) {
    p {
      margin-bottom: 24px;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  background-color: #fff;

  > div picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
