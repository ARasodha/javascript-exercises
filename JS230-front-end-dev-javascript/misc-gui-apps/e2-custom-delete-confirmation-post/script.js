const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },
  

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

document.addEventListener("DOMContentLoaded", event => {
  let section = document.getElementById("languages");
  let languageScript = document.getElementById("languageTemplate");
  let languageTemplate = Handlebars.compile(languageScript.innerHTML);
  section.innerHTML = languageTemplate({languages});

  let paragraphs = Array.from(document.querySelectorAll('p'));
  paragraphs.forEach(para => {
    para.textContent = para.textContent.trim().substr(0, 120) + '...';
  });

  let buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(button => {
    let type = button.getAttribute('data-language');
    button.addEventListener("click", event => {
      event.preventDefault();

      let paragraph = document.querySelector(`p[data-language=${type}]`);
      let buttonText = button.textContent;
      let languageVals = languages.map(lang => Object.values(lang));
      let description = languageVals.filter(lang => lang[0] === type)[0][1];

      if (buttonText === 'Show More') {  
        paragraph.textContent = description;
        button.textContent = 'Show Less'
      } else {
        paragraph.textContent = description.substr(0, 120) + '...';
        button.textContent = 'Show More'
      }
    });
  });
})