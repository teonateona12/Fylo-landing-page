"strict mode";

const btnOne = document.querySelector(".btn");
const errorOne = document.querySelector(".error");
const emailOne = document.querySelector(".email");

const btnTwo = document.querySelector(".btnTwo");
const errorTwo = document.querySelector(".errorTwo");
const emailTwo = document.querySelector(".emailTwo");

//button one
btnOne.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(emailOne, errorOne);
});

//button two
btnTwo.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(emailTwo, errorTwo);
});

//error message
const errorMessage = (error) => {
  error.textContent = "Please check your email";
};

//success message
const successMessage = (success) => {
  success.textContent = "";
};

const validateEmail = (email, error) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    successMessage(error);
    email.classList.remove("err");
    return true;
  } else {
    errorMessage(error);
    email.classList.add("err");
    return false;
  }
};
