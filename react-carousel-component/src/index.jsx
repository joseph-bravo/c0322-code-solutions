import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  'https://c.tenor.com/itjaaJTQUEYAAAAd/cat-vibing.gif',
  'https://c.tenor.com/Z5wTNShAZnsAAAAC/cat-dance.gif',
  'https://c.tenor.com/6R6Xok1bVKQAAAAd/cat-vibeing.gif',
  'https://c.tenor.com/ruxAFVJ03ogAAAAd/cat-berg-cat.gif',
  'https://c.tenor.com/J6mnX45WKZIAAAAd/khat-edit.gif',
  'https://c.tenor.com/6VBUi2ZMtdoAAAAd/cat-cat-dance.gif',
  'https://c.tenor.com/5CMCv1-OU4wAAAAd/khat.gif'
];

function App() {
  return (
    <main>
      <Carousel imagesSrc={images} />
    </main>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
