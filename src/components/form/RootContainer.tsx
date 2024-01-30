import React, { ReactNode } from 'react';
import styled from 'styled-components';

type RootContainerProps = {
  children: ReactNode;
};

export default function Root({ children }: RootContainerProps) {
  return <RootContainer>{children}</RootContainer>;
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
