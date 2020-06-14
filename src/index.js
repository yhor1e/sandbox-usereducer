import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const heading = 'sandbox-usereducer';
ReactDOM.render(<App heading={heading} />, document.getElementById('app'));

const unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
});

console.log('App.js');
module.hot.accept();
