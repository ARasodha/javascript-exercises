// E3 Testing Object Equality:
// My Solution:
function objectsEqual(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj1Values = Object.values(object1);
  let obj2Keys = Object.keys(object2);
  let obj2Values = Object.values(object2);

  return obj1Keys.every((key, idx) => key === obj2Keys[idx]) && 
          obj1Values.every((val, idx) => val === obj2Values[idx]);
}

// Book Solution:
function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false