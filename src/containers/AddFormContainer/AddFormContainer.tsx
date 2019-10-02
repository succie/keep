import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addKeep } from '../../store/keep';
import Editor from '../../modules/Editor/Editor';

const StyledAddFormContainer = styled.div`
  width: 80%;
  font-size: 16px;
  max-height: 20em;
  margin: 0 auto;
  overflow-y: auto;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const AddFormContainer = () => {
  const dispatch = useDispatch();

  const onBlur = useCallback((value: string) => {
    if (value) {
      dispatch(addKeep(value));
    }
  }, [dispatch]);

  return (
    <StyledAddFormContainer>
      <Editor onBlur={onBlur} />
    </StyledAddFormContainer>
  );
};

export default AddFormContainer;
