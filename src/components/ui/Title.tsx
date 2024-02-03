import React from 'react';
import styled from 'styled-components';

type TitleProps = {
  titleProps?: string;
  marginTop?: string;
  fontSize?: string;
};

export default function Title({ titleProps, marginTop, fontSize }: TitleProps) {
  return (
    <div className="title">
      <TitleHeading marginTop={marginTop} fontSize={fontSize}>{titleProps}</TitleHeading>
    </div>
  );
}

const TitleHeading = styled.h1<{ marginTop?: string, fontSize?: string }>`
  margin-top: 56px;
  margin-bottom: 0;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    margin-top: ${props => props.marginTop && props.marginTop};
    font-size: ${props => props.fontSize};
  }
`;
