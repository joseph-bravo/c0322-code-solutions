import React from 'react';
import ReactDOM from 'react-dom/client';
import Stopwatch from './stopwatch';

function App() {
  return (
    <div className="app">
      <Stopwatch />
      <Stopwatch />
      <Stopwatch />
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
