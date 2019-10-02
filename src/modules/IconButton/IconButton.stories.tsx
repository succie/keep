import React from 'react';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default {
  component: IconButton,
  title: 'IconButton'
};

export const iconButton = () => (
  <IconButton>
    <FontAwesomeIcon icon={faUser} />
  </IconButton>
);
