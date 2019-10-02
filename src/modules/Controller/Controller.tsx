import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

const StyledController = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  padding: 4px 8px;

  .item {
    margin-right: 8px;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 8px;
`;

type Props = {
  className?: string;
  mode: 'preview' | 'edit';
  onDelete: () => void;
  onPreview: () => void;
  onEdit: () => void;
};

const Controller = ({ className, mode, onDelete, onPreview, onEdit }: Props) => {
  return (
    <StyledController className={className}>
      {mode === 'preview' ? (
        <StyledIconButton className="item" onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </StyledIconButton>
      ) : (
        <StyledIconButton className="item" onClick={onPreview}>
          <FontAwesomeIcon icon={faEye} />
        </StyledIconButton>
      )}
      <StyledIconButton className="item" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </StyledIconButton>
    </StyledController>
  );
};

export default Controller;
