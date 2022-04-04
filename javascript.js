// HandelClick Function
const handelClick = (evt) => {
  //The preventDefault () method cancels the event if it is cancelable.
  const usernameValue = username.value.trim();
  evt.preventDefault();
  checkInputs();
  checkSuccess(usernameValue);
};

const clearInputs = () => {
  const myForm = document.querySelectorAll(".form-control");
  Array.from(myForm).forEach((element) => {
    element.querySelectorAll("input")[0].value = "";
    element.classList.remove("success");
  });
};
// sendData Function
const sendData = (usernameValue, sRate, count) => {
  if (sRate === count) {
    alert("Vollstäntig Angemeldet");
    swal(
      "Gut gemacht!" + usernameValue,
      "Vielen Dank für Ihre Anmeldung: " + usernameValue,
      "success"
    );
    clearInputs();
  }
};
// CheckSuccess Function
const checkSuccess = (usernameValue) => {
  const myForm = document.querySelectorAll(".form-control");
  for (let i = 0; i < myForm.length; i++) {
    if (myForm[i].className === "form-control success") {
      let sRate = 0 + i;
      let count = myForm.length - 1;
      sendData(usernameValue, sRate, count);
    } else {
      return false;
    }
  }
};

// CheckIputs Function
const checkInputs = () => {
  checkUsername();
  checkEmail();
  checkHandy();
  checkGender();
  checkPass();
  checkPass2();
};

// CheckUsername Function
const checkUsername = () => {
  // trim() To remove the whitespaces
  const usernameValue = username.value.trim();
  if (usernameValue === "" || usernameValue.length < 3) {
    onError(username, "Mindestens 3 Zeichen erhalten");
  } else {
    onSuccess(username);
  }
};

// CheckEmail Function
const checkEmail = () => {
  // trim() To remove the whitespaces
  const emailValue = email.value.trim();
  if (emailValue === "") {
    onError(email, "E-Mail kann nicht leer sein");
  } else if (!isEmail(emailValue)) {
    onError(email, "E-Mail ist ungültig");
  } else {
    onSuccess(email);
  }
};

//CheckHandy Function
const checkHandy = () => {
  // trim() To remove the whitespaces
  const handyValue = handy.value.trim();
  if (handyValue === "") {
    onError(handy, "Geben Sie bitte Ihre Telefonnummer");
  } else if (handyValue.length < 10) {
    onError(handy, "Ungultig Telefonnummer");
  } else if (handyValue.length > 14) {
    onError(handy, "Ungultig Telefonnummer");
  } else {
    onSuccess(handy);
  }
};

const checkGender = () => {
  const genderValue1 = document.querySelector("#rd1");
  const genderValue2 = document.querySelector("#rd2");
  if (genderValue1.checked === true || genderValue2.checked === true) {
    onSuccess(gender);
  } else {
    onError(gender, "Bitte wählen Sie Ihre Geschlecht");
  }
};

//CheckPass Function
const checkPass = () => {
  // trim() To remove the whitespaces
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    onError(password, "Password kann nicht leer sein");
  } else if (passwordValue.length < 4) {
    onError(password, " Mindestens 4 Zeichen sein");
  } else {
    onSuccess(password);
  }
};

//CheckPass2 Function
const checkPass2 = () => {
  // trim() To remove the whitespaces
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (password2Value === "") {
    onError(password2, "Password kann nicht leer sein");
  } else if (passwordValue !== password2Value) {
    onError(password2, "Password stimmt nicht überein");
  } else {
    onSuccess(password2);
  }
};

// onError Function
const onError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
};

// onSuccess Function
const onSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// isEmail Function E-Mail Validation Rege-Ex
const isEmail = (email) => {
  return /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/.test(
    email
  );
};

//Callback Function for Show and Hide Password
const showpass = document.querySelectorAll("#eye");
showpass.forEach((item) => {
  let show = false;
  item.addEventListener("click", () => {
    show = !show;
    item.parentElement.children[1].setAttribute(
      "type",
      show ? "text" : "password"
    );
    item.parentElement.children[2].setAttribute(
      "class",
      show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
    );
  });
});

//Inputfields Declaration
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const handy = document.querySelector("#number");
const genderValue1 = document.querySelector("#rd1");
const genderValue2 = document.querySelector("#rd2");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//Form and Button  Declaration
const form = document.querySelector("#form");
const addMe = document.querySelector("#btnAdd");
//Add Eventlistener
addMe.addEventListener("click", handelClick);
