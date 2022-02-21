// E9 Events Tracker:
const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list.map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
})()

function tracker(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
};

let divRed = document.getElementById('red');
let divBlue = document.getElementById('blue');
let divOrange = document.getElementById('orange');
let divGreen = document.getElementById('green');

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));