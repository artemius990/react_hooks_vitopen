import React from 'react';
import ReactDOM from 'react-dom';

import './adap/grid.min.css'
import App from './App';
import store from './store/store';

ReactDOM.render(<App db={store}/>, document.getElementById('root'));


