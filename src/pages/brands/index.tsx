import React from 'react';
import styled from 'styled-components';

import Root from '@components/form/RootContainer';
import FormContainer from '@components/form/MainForm';
import Header from '@components/ui/Header/Header';
import Footer from '@components/ui/Footer/Footer';
import Title from '@components/ui/Title';

import locationData from '@data/data';

type Location = {
  name: string;
  siteName: string | null;
  image: string | null;
};

export default function Brands() {
  return (
    <Root>
      <Header />
      <FormContainer>
        <Title titleProps="Brands" marginTop="120px" />
        <BrandsListContainer>
          <CmpTabs>
            <BrandsListContainer>
              <BrandsListBox>
                {locationData.map((location: Location, index: number) => (
                  <LocationItem key={index}>
                    <AdapativeImage>
                      <ImageLink href="/">
                        <picture>
                          {location.image && (
                            <img src={location.image} alt={location.name} />
                          )}
                        </picture>
                      </ImageLink>
                    </AdapativeImage>
                  </LocationItem>
                ))}
              </BrandsListBox>
            </BrandsListContainer>
          </CmpTabs>
        </BrandsListContainer>
      </FormContainer>
      <Footer />
    </Root>
  );
}

const BrandsListContainer = styled.div`
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const CmpTabs = styled.div`
  margin-inline: auto;
  padding: 0;
  width: auto;
  min-width: auto;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    padding-inline: 16px;
    width: 75%;
  }
`;

const BrandsListBox = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  margin: 0;
  margin-inline: auto;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
  }
`;

const LocationItem = styled.div`
  margin-top: 32px;
  padding-inline: 8px;
  width: 50%;

  @media only screen and (min-width: 1200px) {
    padding-inline: 16px;
    width: 33.33333333333%;
  }
`;

const AdapativeImage = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  height: 0;

  &::before {
    background-color: #fafafa;
    border-radius: 16px;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
    content: '';
    display: block;
    inset: 0;
    position: absolute;
    transition: all 0.2s ease-out;
  }

  @media only screen and (min-width: 1200px) {
    &:hover::before {
      inset: -8px;
      box-shadow: 0 14px 24px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

const ImageLink = styled.a`
  padding: 24px;
  position: absolute;
  inset: 0;

  @media only screen and (min-width: 1200px) {
    padding: 32px;
  }

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-style: none;
      transition: none;
      opacity: 1;
    }
  }
`;