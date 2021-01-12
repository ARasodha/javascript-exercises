//E11 INTERNALIZATION 2:
function localGreet(locale){
  let lang = locale.slice(0, 2);
  let english = ['Hey', 'Hi', 'Howdy']
  let randomNumber = Math.floor(Math.random() * 2);
  if (lang === 'en'){
    console.log(english[randomNumber]);
  } else if (lang === 'fr'){
    console.log('Salut!');
  } else {
    console.log('Enter en or fr only.');
  }
  }

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
// switch (lang){
//   case ('en'):
//   let count = 0;
//   count++;
//   console.log(en[count]);
//   break;
//   case ('fr'):
//   console.log('Salut!');
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
