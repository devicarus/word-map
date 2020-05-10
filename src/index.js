import React from 'react';
import ReactDOM from 'react-dom';

import { Grommet } from 'grommet';

import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

const theme = {
  global: {
    colors: {
      brand: "#F53",
      "accent-1": "#E42"
    },
    focus: {
      border: {
        color: "none"
      }
    }
  },
  button: {
    border: {
      radius: "5px"
    }
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
