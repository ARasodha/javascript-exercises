function scramble(str1, str2) {
  for (let idx = 0; idx < str2.length; idx++) {
    if (!str1.includes(str2[idx])) return false;
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
