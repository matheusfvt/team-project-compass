const nameError = document.getElementById("name-error");
const nickError = document.getElementById("nickname-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const birthError = document.getElementById("birth-error");
const checkboxError = document.getElementById("checkbox-error");
const formError = document.getElementById("form-error");

function validateName() {
  var name = document.querySelector("#info-name").value;

  let regex = new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");

  if (name.length == 0 || name == null || name == "") {
    nameError.innerHTML = "Name cannot be blank";
    return false;
  }
  if (!name.match(regex)) {
    nameError.innerHTML = "Please write your full name correctly";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validateNick() {
  var nick = document.querySelector("#info-nickname").value;

  if (nick.length == 0 || nick == null || nick == "") {
    nickError.innerHTML = "";
    return true;
  }

  if (nick !== "" && nick.length < 3) {
    nickError.innerHTML = "Your nickname needs to be at least 3 letters";
    return false;
  }

  let regex = new RegExp("^[A-Z][a-z]*(?: [A-Z][a-z]*)*$", "g");

  if (!nick.match(regex)) {
    nickError.innerHTML = "Your nickname needs to be capitalized and can only have letters";
    return false;
  }
  nickError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = document.querySelector("#info-email").value;

  if (email.length == 0 || email == null || email == "") {
    emailError.innerHTML = "Email cannot be blank";
    return false;
  }

  let regex = new RegExp("^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$");

  if (!email.match(regex)) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validatePhone() {
  var phone = document.querySelector("#info-phone").value;

  if (phone.length == 0 || phone == null || phone == "") {
    phoneError.innerHTML = "";
    return true;
  }
  
  let regex = new RegExp("^[0-9]*$");

  if (!phone.match(regex)) {
    phoneError.innerHTML = "Phone can only have numbers";
    return false;
  }

  if (phone !== "" && phone.length !== 11) {
    phoneError.innerHTML = "Phone should be 11 digits";
    return false;
  }

  phoneError.innerHTML = "";
  document.getElementById("info-phone").addEventListener("blur", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{2})(\d{5})(\d{4})/);
    e.target.value = "(" + x[1] + ") " + x[2] + "-" + x[3];
  });
  return true;
}

function validateBirthday() {
  var day = document.querySelector("#day").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var age = document.querySelector("#age").value;

  if (day == "01" && month == "01" && year == "2022") {
    birthError.innerHTML = "Please change your birthday";
    return false;
  }

  if (age == 0 || age == "0" || age < 0) {
    birthError.innerHTML = "Please enter a valid birthday";
    return false;
  }

  birthError.innerHTML = "";
  return true;
}

function validateCheckbox() {
  var checkbox = document.querySelector("#page__checkbox");

  if (checkbox.checked) {
    checkboxError.innerHTML = "";
    return true;
  } else {
    checkboxError.innerHTML = "You need to accept the terms and privacy";
    return false;
  }
}

function validateFirstForm() {
  if (!validateName() || !validateNick() || !validateEmail() || !validatePhone() || !validateBirthday() || !validateCheckbox()) {
    formError.innerHTML = "Please fix your errors before you can submit";
    return false;
  }
  formError.innerHTML = "";
  showSecondPage();
}
