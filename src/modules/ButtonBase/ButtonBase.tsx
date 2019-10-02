import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: block;
  margin: 0;
  border: none;
  padding: 0;
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase = (props: Props) => {
  return <StyledButton {...props} />
}

export default ButtonBase;
