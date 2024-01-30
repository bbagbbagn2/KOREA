import React from 'react';
import styled from 'styled-components';

import Main from '@components/ui/Main';
import BrandsItemComponents from '@components/ui/BrandsItemComponent';
import Button from '@components/ui/Button';
import Title from '@components/ui/Title';

import brandData from '@data/data';

type Brand = {
  name: string;
  siteName: string | null;
  image: string | null;
};

export default function LocationSection() {
  return (
    <Main>
      <div>
        <Title titleProps="브랜드 살펴보기" marginTop='64px' />
        <LocationContainer>
          <LocationBox>
            {brandData.slice(0, 6).map((brand: Brand, index: number) => (
              <BrandsItemComponents key={index} brand={brand} />
            ))}
          </LocationBox>
        </LocationContainer>
        <ButtonContainer>
          <Button href="/brands" buttonText="모두 보기" />
        </ButtonContainer>
      </div>
    </Main>
  );
}

const LocationContainer = styled.div`
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const LocationBox = styled.div`
  margin-inline: auto;
  padding: 0;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    width: 75%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
