import React from 'react';
import styled from 'styled-components';

type TextProps = {
  textProps?: string;
  marginTop?: string;
};

export default function Text({ textProps, marginTop }: TextProps) {
  return (
    <div className="text">
      <Paragraph marginTop={marginTop}>{textProps}</Paragraph>
    </div>
  );
}

const Paragraph = styled.p<{ marginTop?: string }>`
  margin: 16px 0 0;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    margin-top: ${props => props.marginTop && props.marginTop};
  }
`;
