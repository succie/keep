import React from 'react';
import AddFormContainer from '../AddFormContainer/AddFormContainer';
import KeepListContainer from '../KeepListContainer/KeepListContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  }
`;

const AppContainer = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <AddFormContainer />
        <KeepListContainer />
      </div>
    </>
  );
};

export default AppContainer;
