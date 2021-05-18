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

form.addEventListener("submit", contactFormCheck);

function contactFormCheck(event) {
  console.log("nnlasdgddfgsdfgs");
  event.preventDefault();

  if (Length(firstName.value, 1) === true) {
    firstnameError.style.display = "none";
    console.log("test");
  } else {
    firstnameError.style.display = "block";
    console.log("test3");
  }
  if (Length(subjectField.value, 5) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (Length(lastName.value, 1) === true) {
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
