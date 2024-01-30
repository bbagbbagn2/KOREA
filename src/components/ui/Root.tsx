import React, { ReactNode } from 'react';
import styled from 'styled-components';

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps) {
  return <RootContainer>{children}</RootContainer>;
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
