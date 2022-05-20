import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const content = [
  {
    header: <span>The Man</span>,
    body: <img src="https://c.tenor.com/6R6Xok1bVKQAAAAd/cat-vibeing.gif" />
  },
  {
    header: <span>The Myth</span>,
    body: <img src="https://c.tenor.com/ruxAFVJ03ogAAAAd/cat-berg-cat.gif" />
  },
  {
    header: <span>The Legend</span>,
    body: <img src="https://c.tenor.com/Z5wTNShAZnsAAAAC/cat-dance.gif" />
  }
];

function App() {
  return (
    <main>
      <Accordion content={content} />
    </main>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
