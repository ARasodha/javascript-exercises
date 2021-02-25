// E4 Leading Substrings:
function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx++) {
    let substring = string.slice(0, [idx]);
    result.push(substring);
  }
  return result;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
