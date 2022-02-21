// E2 Child Nodes:
/*
id1
direct: 9
indirect:

id2
direct: 2
indirect:

id3
direct: 1
indirect:

id4
direct: 3
indirect:

id5
direct: 1
indirect:

id6
direct: 1
indirect:

id7
direct: 1
indirect:

id8
direct: 1
indirect:

id9
direct: 1
indirect:

id10
direct: 1
indirect:

*/

// Further Exploration Attempt (unsuccessful)
function childNodes(id) {
  let node = document.getElementById(String(id));
  let direct = node.childNodes.length;
  // let indirect = getIndirect(node);
  return [direct];
}

// function getIndirect(node) {
//   let count = 0;

//   (function getChild() {
//     if (node.childNodes) {
//       count += node.childNodes.length 
//     for (let idx = 0; idx < node.childNodes.length; idx++) {
//       getChild(node.childNodes[idx]);
//     }
//     }
//   })();

//   return count;
// }

function walk(node, callback) {
  callback(callback(node));

  for (let idx = 0; idx < node.childNodes.length; idx++) {
    walk(node.childNodes[idx][0], callback);
  }
}

let count = 0;
let node = document.getElementById("1");

walk(node, (node) => {
  if (node && node.childNodes.length) {
    count += node.childNodes.length;
  }
});