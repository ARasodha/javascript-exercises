let string = 'launch school tech & talk';
let words = string.split(' ');
let capitals = [];

for (let i = 0; i < words.length; i++){
  let word = words[i];
   capitals.push(word[0].toUpperCase() + word.slice(1));
}

let capString = capitals.join(' ');
console.log(capString);
