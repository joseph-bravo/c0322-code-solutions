import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  'https://c.tenor.com/itjaaJTQUEYAAAAd/cat-vibing.gif',
  'https://c.tenor.com/Z5wTNShAZnsAAAAC/cat-dance.gif',
  'https://c.tenor.com/6R6Xok1bVKQAAAAd/cat-vibeing.gif',
  'https://c.tenor.com/ruxAFVJ03ogAAAAd/cat-berg-cat.gif'
];

function App() {
  return (
    <main>
      <Carousel imagesSrc={images} />
    </main>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
