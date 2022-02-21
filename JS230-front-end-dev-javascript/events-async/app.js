let interval;

function startCounting() {
  let number = 1;
  interval = setInterval(() => {
    console.log(number);
    number++;
  }, 1000);
}

function stopCounting() {
  clearInterval(interval);
}

startCounting();
setTimeout(stopCounting, 5000);