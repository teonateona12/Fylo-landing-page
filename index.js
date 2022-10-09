"strict mode";

const btnOne = document.querySelector(".btn");
const errorOne = document.querySelector(".error");
const emailOne = document.querySelector(".email");

const btnTwo = document.querySelector(".btnTwo");
const errorTwo = document.querySelector(".errorTwo");
const emailTwo = document.querySelector(".emailTwo");

//btn one
btnOne.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkEmail(emailOne)) {
    errorMessage(errorOne);
    emailOne.classList.add("err");
  } else {
    successMessage(errorOne);
    emailOne.classList.remove("err");
  }
});

//btn two
btnTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkEmail(emailTwo)) {
    errorMessage(errorTwo);
    emailTwo.classList.add("err");
  } else {
    successMessage(errorTwo);
    emailTwo.classList.remove("err");
  }
});

//checking email
const checkEmail = (email) => {
  console.log(email.value === "" || isValidEmail(email));
  return email.value === "" || isValidEmail(email);
};

//error mesaage
const errorMessage = (error) => {
  error.textContent = "Please check your email";
};

//successmessage
const successMessage = (success) => {
  success.textContent = "";
};

const isValidEmail = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
};
