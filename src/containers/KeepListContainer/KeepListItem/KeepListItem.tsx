import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Keep } from '../../../store/keep';
import Preview from '../../../modules/Preview/Preview';
import Controller from '../../../modules/Controller/Controller';

const StyledKeepListItem = styled.div`
  width: 240px;
  min-height: 140px;
  max-height: 420px;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  overflow: hidden;
`;

const StyledController = styled(Controller)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

type Props = {
  keep: Keep;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onPreview: (id: string) => void;
};

const KeepListItem = ({ keep, onDelete, onEdit, onPreview }: Props) => {
  const onDeleteClick = useCallback(() => {
    onDelete(keep.id);
  }, [keep.id, onDelete]);

  const onEditClick = useCallback(() => {
    onEdit(keep.id);
  }, [keep.id, onEdit]);

  const onPreviewClick = useCallback(() => {
    onPreview(keep.id);
  }, [keep.id, onPreview]);

  return (
    <StyledKeepListItem>
      <Preview value={keep.value} />
      <StyledController
        mode={keep.mode}
        onDelete={onDeleteClick}
        onEdit={onEditClick}
        onPreview={onPreviewClick}
      />
    </StyledKeepListItem>
  );
};

export default KeepListItem;
