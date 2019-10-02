import React from 'react';
import KeepListItem from './KeepListItem';

export default {
  component: KeepListItem,
  title: 'KeepListItem'
};

export const keepListItem = () => (
  <KeepListItem
    keep={{ id: 'a', value: 'aaa\naaa', isOpen: false, mode: 'preview' }}
    onDelete={() => {}}
    onEdit={() => {}}
    onPreview={() => {}}
  />
);
