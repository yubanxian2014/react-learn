import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import App1 from './App1'
// console.log(a)
// import App2 from './useReducex/App2';
import store from "./useReducex/Store"
import {Provider} from 'react-redux'
import App3 from './useReducex/App3';
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}><App3/></Provider>
    ,

    document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
