import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1', null, ['Hello, React!']);
console.log(element);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
