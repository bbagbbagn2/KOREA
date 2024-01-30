import React from 'react';
import styled from 'styled-components';

import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Root from '@components/ui/Root';
import Main from '@components/ui/Main';
import LocationItemComponent from '@components/ui/BrandsItemComponent';
import Title from '@components/ui/Title';

import brandData from '@data/data';

type Brand = {
  name: string;
  siteName: string | null;
  image: string | null;
};

export default function Brands() {
  return (
    <Root>
      <Header />
      <Main>
        <Title titleProps="Brands" marginTop="120px" />
        <BrandsListContainer>
          <CmpTabs>
            <BrandsListContainer>
              <BrandsListBox>
                {brandData.map((brand: Brand, index: number) => (
                  <LocationItemComponent key={index} brand={brand} />
                ))}
              </BrandsListBox>
            </BrandsListContainer>
          </CmpTabs>
        </BrandsListContainer>
      </Main>
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