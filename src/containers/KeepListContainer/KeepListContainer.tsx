import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { deleteKeep, changeModeKeep } from '../../store/keep';
import KeepListItem from './KeepListItem/KeepListItem';

const StyledKeepListContainer = styled.div`
  width: 256px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: calc(256px * 2);
  }

  @media (min-width: 960px) {
    width: calc(256px * 3);
  }

  @media (min-width: 1280px) {
    width: calc(256px * 5);
  }
`;

const KeepListContainer = () => {
  const keeps = useSelector((state: RootState) => state.keeps.keeps);
  const dispatch = useDispatch();

  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteKeep(id));
    },
    [dispatch]
  );

  const onEdit = useCallback(
    (id: string) => {
      dispatch(changeModeKeep(id, 'edit'));
    },
    [dispatch]
  );

  const onPreview = useCallback(
    (id: string) => {
      dispatch(changeModeKeep(id, 'preview'));
    },
    [dispatch]
  );

  return (
    <StyledKeepListContainer>
      {keeps.map(keep => (
        <KeepListItem
          keep={keep}
          onDelete={onDelete}
          onEdit={onEdit}
          onPreview={onPreview}
          key={keep.id}
        />
      ))}
    </StyledKeepListContainer>
  );
};

export default KeepListContainer;
