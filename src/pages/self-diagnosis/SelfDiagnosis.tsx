import React, { useState } from 'react';
import styled from 'styled-components';

import FagerstromTest from './components/Ftnd';

import Root from '@components/ui/Root';
import Main from '@components/ui/Main';
import Title from '@components/ui/Title';

import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

import { MdKeyboardArrowDown } from "react-icons/md";

export default function SelfDiagnosis() {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <Root>
      <Header />
      <Main>
        <Title titleProps="금연 자가진단" marginTop="64px" />
      </Main>
      <Main>
        <AccordionContainer>
          <AccordionBox>
            <AccordionItem>
              <AccordionHeader>
                <AccordionButton type="button" onClick={() => setIsVisible(!isVisible)}>
                  <span>
                    니코틴 의존도 진단 FTND－K(Fagerstrom Test for Nicotine
                    Dependence)
                  </span>
                  <span className='icon'>
                    <MdKeyboardArrowDown size='24'/>
                  </span>
                </AccordionButton>
              </AccordionHeader>
              <FagerstromTest isVisible={isVisible}/>
            </AccordionItem>
          </AccordionBox>
        </AccordionContainer>
      </Main>
      <Footer />
    </Root>
  );
}

const AccordionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const AccordionBox = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  padding-inline: 8px;
  text-align: start;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 66.6666666667%;
    min-width: 66.6666666667%;
    padding-inline: 16px;
  }
`;

const AccordionItem = styled.div`
  padding: 24px 0 8px;
  border-bottom: 1px solid #9b9b9b;

  @media only screen and (min-width: 1200px) {
    padding: 40px 0 24px;
  }
`;

const AccordionHeader = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  text-decoration: none;

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const AccordionButton = styled.button`
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  text-align: start;

  .icon {
    margin-inline-start: 24px;
    display: flex;
    align-items: center;    
  }
`;
