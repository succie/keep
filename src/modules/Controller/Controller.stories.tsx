import React from 'react';
import Controller from './Controller';

export default {
  component: Controller,
  title: 'Controller'
};

export const controller = () => (
  <Controller mode='preview' onDelete={() => {}} onEdit={() => {}} onPreview={() => {}} />
);
