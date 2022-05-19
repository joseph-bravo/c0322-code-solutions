import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

function App() {
  return (
    <div className="app">
      <ValidatedInput />
    </div>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
