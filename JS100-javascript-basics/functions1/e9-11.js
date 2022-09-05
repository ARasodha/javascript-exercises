// E9 LOCALE PART 1:
// MY SOLUTION: (SUCCESSFUL)
function extractLanguage(local){
  let language = local.slice(0, 2);
  return language;
}

// BOOK SOLUTION:
function extractLanguage(locale){
  return locale.split('_')[0];
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16'));  // 'ko'

// E10 LOCALE PART 2:
// MY SOLUTION (SUCCESSFUL)
function extractRegion(locale){
  return locale.slice(3, 5);
}

// BOOOK SOLUTION:
function extractRegion(locale){
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8')); // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// E11 INTERNALIZATION 2:
// MY SOLUTION: (SUCCESSFUL BUT RANDOMIZES RESPONSES TO EN COUNTRIES)
function localGreet(locale){
  let lang = extractLanguage(locale);
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

  // BOOK SOLUTION: (GIVES A DEFINITE/CERTAIN ANSWER TO EACH COUNTRY)
  // NEEDED TO IMPORT THIS FROM e6-8.js question 8:
  function greet(lang){
   switch (lang){
     case 'en' : return 'Hi!';
     case 'fr' : return 'Salut!';
     case 'pt' : return 'Olå!';
     case 'de' : return 'Hallo!';
     case 'sv' : return 'Hej!';
     case 'af' : return 'Haai!';
   }
 }



  function localGreet(locale){
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
    switch (region){
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
      default: return greet(language);
    }
  }
  console.log(localGreet('en_US.UTF-8')); // 'Hey!'
  console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
  console.log(localGreet('en_AU.UTF-8'));// 'Howdy!'
  console.log(localGreet('fr_FR.UTF-8'));// 'Salut!'
  console.log(localGreet('fr_CA.UTF-8'));// 'Salut!'
  console.log(localGreet('fr_MA.UTF-8'));// 'Salut!'
