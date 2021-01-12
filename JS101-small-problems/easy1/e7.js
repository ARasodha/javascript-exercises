// E7 Short Long Short:
function shortLongShort(string1, string2) {
  let combo1;
  let combo2;
  if (string1.length > string2.length) {
    combo = string2 + string1 + string2;
    console.log(combo);
  } else if (string1.length < string2.length) {
    combo = string1 + string2 + string1;
    console.log(combo);
  }
  return combo;
}

shortLongShort('abc', 'defgh'); // "abcdefghabc"
shortLongShort('abcde', 'fgh'); // "fghabcdefgh"
shortLongShort('', 'xyz'); // "xyz"
