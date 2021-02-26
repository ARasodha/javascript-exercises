// E8 How long are you?:
function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) {
    return [];
  }
  return string.split(' ').map(word => `${word} ${word.length}`)
}

// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]
//
// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
//
// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
//
// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]
// //
// // wordLengths('');      // []
// // wordLengths();        // []

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());
