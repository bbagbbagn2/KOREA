import React from 'react';
import styled from 'styled-components';

import FormContainer from '../components/form';
import Button from '../../../components/ui/Button';

export default function CampaingnSection() {
  return (
    <FormContainer>
      <div className="cmp-container">
        <CampaignContainer>
          <CampaignBox>
            <ContentBox>
              <h3>제목을 입력해주세요</h3>
              <p>내용 내용 내용</p>
              <ButtonBox>
                <Button />
              </ButtonBox>
            </ContentBox>
            <ImageBox></ImageBox>
          </CampaignBox>
        </CampaignContainer>
      </div>
    </FormContainer>
  );
}

const CampaignContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 0;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const CampaignBox = styled.div`
  margin: 0;
  margin-inline: -8px;
  display: flex;
  flex-direction: column;
  flex-wrap: unset;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
    padding: 0;
    align-items: flex-start;
    flex-direction: row;
  }
`;

const ContentBox = styled.div`
  padding: 32px 24px;
  padding-inline: 8px;
  position: relative;
  min-width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  z-index: 1;

  h3 {
    margin: 0;
  }

  p {
    margin: 16px 0 0;
  }

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 14px 18px rgba(0, 0, 0, 0.06);
    z-index: -1;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
    padding: 64px 80px;
    min-width: 50%;
    min-height: 552px;
    flex: 0 0 50%;

    ::before {
      inset: 0 16px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 36px;

  @media only screen and (min-width: 1200px) {
    margin-top: auto;
  }
`;

const ImageBox = styled.div`
  flex: 0 0 100%;
  flex-grow: 1;
  margin-left: 24px;
  margin-top: 80px;
  min-width: 100%;
  padding-inline: 8px;
  padding: 0;
  position: relative;
  width: calc(100vw - 17px);

  @media only screen and (min-width: 1200px) {
    margin-top: 80px;
    margin-left: unset;
    padding-inline: 16px;
    left: auto;
    right: 8.33333%;
    min-width: 58.33333%;
    flex: 0 0 58.33333%;
  }
`;
