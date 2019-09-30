import React from 'react';
import { render } from 'react-dom';
import Typography from '@material-ui/core/Typography';

const App = () => {
  return (
    <div className="App">
      <Typography variant="h1">Keep</Typography>
    </div>
  );
};

render(<App />, document.querySelector('#root'));
