import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Geun from './Geun';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
