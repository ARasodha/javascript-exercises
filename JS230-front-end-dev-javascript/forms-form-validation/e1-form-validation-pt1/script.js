function handleInputListeners() {
  let validations = validateForm();
  if (validations === true) return;

  validations.forEach(validation => {
    let input = document.querySelector(`[name=${validation[0]}]`);
    input.addEventListener("focusout", event => {
      let inputName = input.name;
      let warningMessage = document.getElementById(inputName);

      if (validation[1]() || (input.name === 'phone-number' && input.value.length === 0)) {
        input.style.borderColor = null;
        warningMessage.style.display = 'none';
      } else { 
        input.style.borderColor = 'red';
        warningMessage.style.display = 'inline';
      }
    });

    if (validation[0] === 'first-name' || validation[0] === 'last-name') {
      input.addEventListener("keypress", event => {
        event.preventDefault();
        if (/[a-z]/i.test(event.key)) {
          input.value = input.value + event.key;
        }
      })
    } else if (validation[0] === 'phone-number') {
      input.addEventListener("keypress", event => {
        event.preventDefault();
        if (/[0-9-]/i.test(event.key) && input.value.length < 12) {
          input.value = input.value + event.key;
        }
      });
    }
  });
}


function validateFirstName() {
  let firstName = document.querySelector("[name=first-name]");
  return firstName.value.length > 0;
}

function validateLastName() {
  let lastName = document.querySelector("[name=last-name]");
  return lastName.value.length > 0;
}

function validatePassword() {
  let password = document.querySelector("[name=password]");
  return password.value.length >= 10;
}

function validatePhoneNumber() {
  let phoneNumber = document.querySelector("[name=phone-number]");
  if (phoneNumber.value.length === 0) return true;
  return /\d\d\d-\d\d\d-\d\d\d\d/.test(phoneNumber.value);
}

function validateEmail() {
  let email = document.querySelector("[name=email]");
  return /^.+@.+$/.test(email.value);
}

function validateCC() {
  let ccInputs = Array.from(document.getElementsByClassName('ccn'));
  ccInputs.forEach(ccInput => {
    ccInput.addEventListener("keydown", event => {
      event.preventDefault();
      if (Number(event.key) >= 0 && Number(event.key) <= 9 && ccInput.value.length < 4) {
        console.log(event.key)
        console.log(ccInput.textContent)
        ccInput.value = ccInput.value + event.key;
      } else if (event.key === 'Backspace') {
        ccInput.value = ccInput.value.split('').splice(0, ccInput.value.length - 1).join('');
      }
    });

    ccInput.addEventListener("keyup", event => {
      if (ccInput.id !== 'ccn4' && ccInput.value.length === 4) {
        ccInput.nextElementSibling.focus();
      }
    })
  });
}

function validateForm() {
  let firstName = ['first-name', validateFirstName];
  let lastName = ['last-name', validateLastName];
  let password = ['password', validatePassword];
  let phoneNumber = ['phone-number', validatePhoneNumber];
  let email = ['email', validateEmail];
  let validations = [firstName, lastName, password, phoneNumber, email];

  if (validations.every(validation => validation[1]() === true)) {
    return true;
  } else {
    return validations.filter(validation => validation[1]() === false || validation[0] === 'phone-number');
  }
}

function validateFormOnSubmit() {
  let form = document.querySelector('form');
  let submitWarning = document.getElementById("submit-warning");
  form.addEventListener('submit', event => {
    event.preventDefault();
    let validations = validateForm();
    if (validations === true) {
      console.log('valid');
      submitWarning.style.display = 'none';
      form.reset();
    } else {
      submitWarning.style.display = 'inline';
   
      validations.forEach(validation => {
        let input = document.querySelector(`[name=${validation[0]}]`);
        let warningMessage = document.getElementById(input.name);
        if (validation[1]()) {
          console.log(input)
          input.style.borderColor = null;
          warningMessage.style.display = 'none';
        } else {
          input.style.borderColor = 'red';
          warningMessage.style.display = 'inline';
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", event => {
  handleInputListeners();
  validateFormOnSubmit();
  validateCC();
}); 