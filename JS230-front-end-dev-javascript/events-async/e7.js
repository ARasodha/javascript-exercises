// E7 Article Highlighter:
// My Solution:
let anchors = document.getElementsByTagName('a');
let articles = document.getElementsByTagName('article');
let a1Anchor = anchors[0];
let a2Anchor = anchors[1];
let a3Anchor = anchors[2];
let a4Anchor = anchors[3];
let article1 = document.getElementById('article-1');
let article2 = document.getElementById('article-2')
let article3 = document.getElementById('article-3')
let article4 = document.getElementById('article-4')
let main = document.querySelector('main');

function removeHighLightFomAll() {
  Array.from(articles).forEach(article => article.classList.remove('highlight'));
  main.classList.remove('highlight');
}

a1Anchor.addEventListener('click', event => {
  removeHighLightFomAll()
  article1.classList.add('highlight');
  event.stopPropagation();
});

a2Anchor.addEventListener('click', event => {
  removeHighLightFomAll()
  article2.classList.add('highlight');
  event.stopPropagation();
});

a3Anchor.addEventListener('click', event => {
  removeHighLightFomAll()
  article3.classList.add('highlight');
  event.stopPropagation();
});

a4Anchor.addEventListener('click', event => {
  removeHighLightFomAll()
  article4.classList.add('highlight');
  event.stopPropagation();
});

article1.addEventListener('click', event => {
  removeHighLightFomAll()
  article1.classList.add('highlight');
  event.stopPropagation();
})

article2.addEventListener('click', event => {
  removeHighLightFomAll()
  article2.classList.add('highlight');
  event.stopPropagation();
})

article3.addEventListener('click', event => {
  removeHighLightFomAll()
  article3.classList.add('highlight');
  event.stopPropagation();
})

article4.addEventListener('click', event => {
  removeHighLightFomAll()
  article4.classList.add('highlight');
  event.stopPropagation();
});

main.addEventListener('click', event => {
  removeHighLightFomAll()
  main.classList.add('highlight');
  event.stopPropagation();
});

document.addEventListener('click', event => {
  main.classList.remove('highlight');
  event.stopPropagation();
})

// Lesson Solution:
function highlight({target}) {
  let element;
  let id;

  removeHighlight();

  if (target.tagName === 'A') {
    id = target.href.match('#article-[0-9]+')[0]
    element = document.querySelector(id);
  } else {
    element = document.querySelector('main');
  }

  element.classList.add('highlight');
}

function removeHighlight() {
  const highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

const nav = document.querySelector('header ul');
const main = document.querySelector('main');

nav.addEventListener('click', highlight);
document.addEventListener('click', highlight);
main.addEventListener("click", e => {
  e.preventDefault();
  let article = e.target;
  if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

  if (article.tagName === "ARTICLE") {
    e.stopPropagation();
    removeHighlight();
    article.classList.add("highlight");
  }
});