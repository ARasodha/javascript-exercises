// E5 Swap Case:
function swapCase(string) {
  return string.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    }
  }).join('');
}
console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
