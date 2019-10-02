import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import ButtonBase from '../ButtonBase/ButtonBase';

const StyledIconButton = styled(ButtonBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background-color: #e0e0e0;
  }
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = (props: Props) => {
  return <StyledIconButton {...props} />;
};

export default IconButton;
