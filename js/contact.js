const submitButton = document.querySelector(".Submitform-btn");
const firstName = document.querySelector("#firstName");
const firstnameError = document.querySelector(".firstnameError");
const lastName = document.querySelector("#lastName");
const lastnameError = document.querySelector(".lastnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const subjectField = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const form = document.querySelector(".contact-form");
const errorMessage = document.querySelector(".Error-Message");
const textArea = document.querySelector("#Product-feedback");
const textareaError = document.querySelector(".textareaError");
const successMessage = document.querySelector(".form-succesful");

form.addEventListener("submit", contactFormCheck);

function contactFormCheck(event) {
  event.preventDefault();

  if (Length(firstName.value, 3) === true) {
    firstnameError.style.display = "none";
  } else {
    firstnameError.style.display = "block";
  }
  if (Length(subjectField.value, 5) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (Length(lastName.value, 3) === true) {
    lastnameError.style.display = "none";
  } else {
    lastnameError.style.display = "block";
  }
  if (emailValue(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (Length(textArea.value, 5) === true) {
    textareaError.style.display = "none";
  } else {
    textareaError.style.display = "block";
  }
  if (form.value === true) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
  form.reset();
}

function Length(value, len) {
  if (value.length >= len) {
    return true;
  } else {
    return false;
  }
}

function emailValue(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const pattern = regEx.test(email);
  return pattern;
}
