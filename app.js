const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#number");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm");
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#numError");
const passwordError = document.querySelector("#passError");
const confirmPassError = document.querySelector("#confirmError");

const submitBtn = document.querySelector(".submitBtn");

firstName.addEventListener("input", () => {
  if (firstName.value === "") {
    firstNameError.textContent = "Please enter your first name";
    console.log("first name");
  } else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("input", () => {
  if (lastName.value === "") {
    lastNameError.textContent = "Please enter your last name";
  } else {
    lastNameError.textContent = "";
  }
});

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please type valid email, eg: abcde@gmail.com";
  } else {
    emailError.textContent = "";
  }
});

phone.addEventListener("input", () => {
  if (phone.validity.patternMismatch) {
    phoneError.textContent = "Please type in valid phone number with 10 digits";
  } else {
    phoneError.textContent = "";
  }
});

password.addEventListener("input", () => {
  if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Password should contain 1 capital letter, 1 number and minimum length 8";
  } else {
    passwordError.textContent = "";
  }
});

confirmPass.addEventListener("input", () => {
  if (password.value !== confirmPass.value) {
    confirmPassError.textContent = "Password do not match";
  } else {
    confirmPassError.textContent = "";
  }
});
