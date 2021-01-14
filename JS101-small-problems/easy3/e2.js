// E2 Bannerizer:
// My Solution:
function logInBox(text) {
  let topAndBottom = '+' + '-'.repeat(text.length + 2) + '+';
  let topBottomSide = '|' + ' '.repeat(topAndBottom.length - 2) + '|';
  let middleSide = '|' + ' '.repeat((topAndBottom.length)) + '|';
  console.log(topAndBottom);
  console.log(topBottomSide);
  console.log(`| ${text} |`);
  console.log(topBottomSide);
  console.log(topAndBottom);
}
logInBox('To boldly go where no one has gone before.');

// Book Solutions:
// function logInBox(message) {
//   let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
//   let emptyLine = `|${" ".repeat(message.length + 2)}|`;
//
//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${message} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }
// logInBox('To boldly go where no one has gone before.');

// Further Exploration:
// function logInBox(text, maxWidth){
//   if(text.length > 10){
//     text = text.substring(0, 10);
// }
//   let topAndBottom = '+' + '-'.repeat(text.length + 2) + '+';
//   let topBottomSide = '|' + ' '.repeat(topAndBottom.length - 2) + '|';
//   let middleSide = '|' + ' '.repeat((topAndBottom.length)) + '|';
//   console.log(topAndBottom);
//   console.log(topBottomSide);
//   console.log(`| ${text} |`);
//   console.log(topBottomSide);
//   console.log(topAndBottom);
// }
// logInBox('To boldly go where no one has gone before.');
