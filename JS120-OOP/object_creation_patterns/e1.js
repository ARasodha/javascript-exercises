// E1 Ancestors:
// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

// My Solution:
foo.ancestors = function() {
  let ancestors = [];
  let object = this;
  while (true) {
    object = Object.getPrototypeOf(object);
    if (object === null) break;
    if (object.name) {
      ancestors.push(object.name);
    } else {
      ancestors.push('Object.prototype');
    }

  }
    return ancestors;
}

// Book Solution:
// Object.prototype.ancestors = function ancestors() {
//   let ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']