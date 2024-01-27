import React from 'react';
import styled from 'styled-components';

import SeperatorProps from '../../ui/Seperator';
export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <div className="cmp-container">
          <CmpContainer>
            <SeperatorProps />
            <SeperatorProps />
            <PrivacyBox>
              <CmpTextBox>
                <p>
                  <b>© 2024 Jihun Park.</b>
                </p>
              </CmpTextBox>
            </PrivacyBox>
          </CmpContainer>
        </div>
      </FooterContainer>
    </footer>
  );
}

const FooterContainer = styled.div`
  margin-top: 56px;
  background-color: #000;
  color: #fff;

  > .cmp-container {
    margin-inline: 24px;
    max-width: none;
  }

  @media only screen and (min-width: 600px) {
    > .cmp-container {
      margin-inline: 64px;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;

    > .cmp-container {
      margin-inline: auto;
      max-width: 1120px;
    }
  }
`;

const CmpContainer = styled.div`
  margin-inline: -8px;
  padding: 56px 0;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 600px) {
    padding: 72px 0 96px;
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const PrivacyBox = styled.div`
  margin-top: 32px;
  padding-inline: 8px;
  min-width: 100%;
  display: flex;
  flex: 0 0 100%;
  align-items: center;

  p {
    margin: 16px 0 0;
  }

  @media only screen and (min-width: 600px) {
    padding-inline: 12px;
    min-width: 100%;
    flex: 0 0 100%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    padding-inline: 16px;
    min-width: 50%;
    flex: 0 0 50%;
    align-items: flex-start;
    justify-content: flex-end;
    flex-grow: 1;

    p {
      margin-top: 24px;
    }
  }
`;

const CmpTextBox = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    display: inline-block;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: 0;
    text-decoration: none;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;
