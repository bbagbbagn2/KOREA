import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TeaserContainerProps = {
    children: ReactNode
}

export default function TeaserContainerComponent({ children }: TeaserContainerProps) {

  return (
      <TeaserContainer>
        {children}
      </TeaserContainer>
  );
}

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