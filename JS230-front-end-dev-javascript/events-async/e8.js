// E8 Delegate Event Function:
function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      const validTargets = Array.from(parentElement.querySelectorAll(selector));
      if (validTargets.includes(event.target)) {
        callback(event);
      }
    });
  }
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

console.log(delegateEvent(element1, 'p', 'click', callback)); 
console.log(delegateEvent(element2, 'p', 'click', callback)); 
console.log(delegateEvent(element2, 'h1', 'click', callback));
console.log(delegateEvent(element3, 'h1', 'click', callback));
console.log(delegateEvent(element3, 'aside p', 'click', callback)); 
console.log(delegateEvent(element2, 'p', 'click', callback)); 