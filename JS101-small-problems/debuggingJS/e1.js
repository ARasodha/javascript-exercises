// Debugging JavaScript
// Ex 1 Word Ladder:
let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

/* Explanation: This behavior is because JavaScript performs Automatic Semicolon
 Insertion, which results in the first three lines being parsed as:

let ladder = ''['head', ... ].forEach()

Therefore after decklaring ladder on line 3, a semi colon is needed.
 */
