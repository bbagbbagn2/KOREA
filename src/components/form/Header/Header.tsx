import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <header>
      <HeaderBox>
        <CmpContainer className="cmp-container">
          <LogoBox></LogoBox>
          <NavBox>
            <CmpContainer className="cmp-container">
              <TextList>
                <li>
                  <b>
                    <Link href="/" role="button">
                      Locations
                    </Link>
                  </b>
                </li>
              </TextList>
            </CmpContainer>
          </NavBox>
        </CmpContainer>
      </HeaderBox>
    </header>
  );
}

const HeaderBox = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #fff;

  @media only screen and (min-width: 1200px) {
    height: 80px;

    > .cmp-container {
      margin-inline: auto;
      max-width: 1280px;
      height: 80px;
    }
  }
`;

const CmpContainer = styled.div`
  margin-inline: 24px;
  width: 100%;
  max-width: none;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  margin: 0;
  margin-top: 24px;

  @media only screen and (min-width: 1200px) {
    margin-top: 0;
  }
`;

const NavBox = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  > .cmp-container {
    width: 100%;
    height: 100%;
    padding-inline: 24px;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    > .cmp-container {
      padding: 0;
      width: calc(100% - 350px);
      min-width: 418px;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-inline-start: 24px;
  }
`;

const TextList = styled.ul`
  @media only screen and (min-width: 1200px) {
    margin: 0;
    padding: 0;
    height: 80px;
    display: flex;
    align-items: center;
    list-style-type: none;

    > li {
      margin: 0 20px;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      color: #000;
      letter-spacing: 0;
      text-decoration: none;
    }
  }
`;

const Link = styled.a`
  @media only screen and (min-width: 1200px) {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    color: #000;
    letter-spacing: 0;
    text-decoration: none;
    cursor: pointer;
  }
`;