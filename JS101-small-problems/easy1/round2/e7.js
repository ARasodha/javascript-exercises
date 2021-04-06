// E7 Short, Long, Short:
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else if (string2.length > string1.length) {
    return string1 + string2 + string1;
  } else {
    console.log(`Error. Check input strings.`);
  }
}
console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
shortLongShort('abc', 'defgh'); // "abcdefghabc"
shortLongShort('abcde', 'fgh'); // "fghabcdefgh"
shortLongShort('', 'xyz'); // "xyz"
