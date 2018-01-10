import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AppWithRedux from './AppWithRedux';

const applications = {
  '1.0.0': App,
  '2.0.0': AppWithRedux
};
const APP_VERSION = '2.0.0';
const Main = applications[APP_VERSION];

ReactDOM.render(<Main />, document.getElementById('root'));
