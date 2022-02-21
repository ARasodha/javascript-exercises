const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };


function renderQuestions() {
  let questionsSection = document.getElementById("questions-section");
  let questionsTemplate = Handlebars.compile(document.getElementById("questions-template").innerHTML);
  questionsSection.innerHTML = questionsTemplate({questions});
}

function wrongAnswerDisplay(radio) {
  let outcomes = Array.from(document.getElementsByClassName("outcome"));
  let outcome = outcomes.filter(outcome => outcome.id === radio.name)[0];
  outcome.textContent = `Wrong answer. The correct answer is "${answerKey[radio.name]}"`;
  outcome.classList.add("wrong-answer");
}

function correctAnswerDisplay(radio) {
  let outcomes = Array.from(document.getElementsByClassName("outcome"));
  let outcome = outcomes.filter(outcome => outcome.id === radio.name)[0];
  outcome.textContent = `Correct Answer`;
  outcome.classList.add("correct-answer");
}

function submitButton() {
  let submitBtn = document.getElementById("submit-btn");
  
  submitBtn.addEventListener("click", event => {
    let radios = Array.from(document.querySelectorAll("[type=radio]"));
    let checkedRadios = radios.filter(radio => radio.checked);
    if (checkedRadios.length !== 4) return;

    checkedRadios.forEach((radio, idx) => {
      if (radio.value === answerKey[radio.name]) {
        correctAnswerDisplay(radio);
      } else {
        wrongAnswerDisplay(radio);
      }
    })
  });
}

function resetButton() {
  let resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", event => {
    let radios = Array.from(document.querySelectorAll("[type=radio]"));
    radios.forEach(radio => radio.checked = false);

    let outcomes = Array.from(document.getElementsByClassName("outcome"));
    outcomes.forEach(outcome => {
      outcome.classList.remove("correct-answer");
      outcome.classList.remove("wrong-answer");
      outcome.textContent = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', event => {
  renderQuestions();
  submitButton();
  resetButton();
});