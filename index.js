

const form = document.getElementById("form");

const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateDefault();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validRegex.test(String(email).toLowerCase());
};

const validateDefault = () => {
  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    setError(email, "Please check your email");
  } else {
    setSuccess(email, "");
  }
};
