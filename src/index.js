import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './routers/AppRouter';

import './index.css';
import './normalize.css';

ReactDOM.render (
    <AppRouter />,
  document.getElementById('root')
);