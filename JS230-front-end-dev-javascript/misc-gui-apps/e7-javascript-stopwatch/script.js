document.addEventListener("DOMContentLoaded", event => {
  let centiseconds = document.getElementById("centiseconds");
  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("hours");
  let startStopBtn = document.getElementById("startStopBtn");
  let resetBtn = document.getElementById("reset");

  startStopBtn.addEventListener("click", event => {
    let status = startStopBtn.textContent;
    
    if (status === 'Start') {
      let centiSecs = 0;

      while (centiSecs < 100) {
        setInterval(() => {
          centiSecs++;
          centiseconds.textContent = String(centiSecs);
        }, 100);
      }

    }
  });

});