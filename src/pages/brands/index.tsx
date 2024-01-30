import React from 'react';
import styled from 'styled-components';

import Root from '@components/form/RootContainer';
import FormContainer from '@components/form/MainForm';
import Header from '@components/ui/Header/Header';
import Footer from '@components/ui/Footer/Footer';
import Title from '@components/ui/Title';

export default function Brands() {
  return (
    <Root>
      <Header />
      <FormContainer>
        <Title titleProps="Brands" marginTop="120px" />
      </FormContainer>
      <Footer />
    </Root>
  );
}
