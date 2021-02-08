import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from './routers/AppRouter';

import './index.css';
import './styles/style.scss';
import { HiFiveApp } from './HiFiveApp';

ReactDOM.render (
    <HiFiveApp />,
    document.getElementById('root')
);