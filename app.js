import Immutable from 'immutable';
import React from 'react';  // for JSX
import ReactDOM from 'react-dom';
import Pair from './pair';


const mountpoint = document.getElementById('app');
ReactDOM.render(<Pair />, mountpoint);
