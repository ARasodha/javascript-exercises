//E9 SYNTAX ERROR:
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit)) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

//ISSUE WHATS THE IF CONDITIONAL NEEDED BRACKETS AROUND IT
// ERROR WAS ABOUT THE && SIGN BUT DIDNT TURN OUT TO BE TRUE

//E10 TYPE ERROR:
let tweet = 'Woohoo! :-)';
if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
