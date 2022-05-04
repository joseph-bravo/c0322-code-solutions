let count = 3;
const timer = setInterval(() => {
  if (count) {
    console.log(count--);
  } else {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
