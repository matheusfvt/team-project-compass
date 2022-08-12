const nameError = document.getElementById("name-error");
const nickError = document.getElementById("nickname-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const birthError = document.getElementById("birth-error");
const checkboxError = document.getElementById("checkbox-error");
const FformError = document.getElementById("first-form-error");

//VALIDATION FUNCTIONS FOR FIRST FORM

function validateName() {
  var name = document.querySelector("#info-name").value;

  if (name.length == 0 || name == null || name == "") {
    nameError.innerHTML = "Name cannot be blank";
    return false;
  }
  if (!name.match(/^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]*){0,2}$/)) {
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

  let regex = new RegExp("^[A-Z][a-z]*(?: [A-Z][a-z]*)*$", "i");

  if (!nick.match(regex)) {
    nickError.innerHTML = "Your nickname can only have letters";
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

  let regex = new RegExp("^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$");

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
  if (!validateName() || !validateNick() || !validateEmail() || !validateBirthday() || !validateCheckbox()) {
    FformError.innerHTML = "Please fix your errors before you can submit";
    return false;
  } else {
    FformError.innerHTML = "";
    showSecondPage();
    return true;
  }
}

//SUBMIT FUNCTION OF FIRST FORM

var page1 = document.getElementById("first-page");
page1.addEventListener('submit', (event)=>{
  event.preventDefault();
  validateFirstForm();
});

//VARIABLES FOR SECOND FORM

const linkedinError = document.getElementById("linkedin-error");
const gitError = document.getElementById("git-error");
const SformError = document.getElementById("second-form-error");


//VALIDATION FUNCTIONS FOR SECOND FORM

function validateLinkedin(){
  var linkedin = document.querySelector('#info-linkedin').value;

  if (linkedin.length == 0 || linkedin == null || linkedin == "") {
    linkedinError.innerHTML = "";
    return true;
  }

  if(linkedin.length !== 0 && !linkedin.match(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm)){
    linkedinError.innerHTML = 'Your link is not valid Linkedin url';
    return false;
  }

  linkedinError.innerHTML = '';
  return true;
}

function validateGit(){
  var git = document.querySelector('#info-github').value;

  if (git.length == 0 || git == null || git == "") {
    gitError.innerHTML = "Github cannot be blank";
    return false;
  }

  if(!git.match(/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm)){
    gitError.innerHTML = 'Your link is not a Github url'
    return false;
  }

  gitError.innerHTML = '';
  return true;
}

function validateSecondForm() {
  if (!validateLinkedin() || !validateGit()) {
    SformError.innerHTML = "Please fix your errors before you can submit";
    return false;
  } else {
    SformError.innerHTML = "";
    showThirdPage();
    return true;
  }
}

//SUBMIT FUNCTION OF SECOND FORM

var page2 = document.getElementById("second-page");
page2.addEventListener('submit', (event)=>{
  event.preventDefault();
  validateSecondForm();
});

//VARIABLES FOR THIRD FORM

const TnameError = document.getElementById("checkbox-error");
const institutionError = document.getElementById("checkbox-error");
const graduationError = document.getElementById("checkbox-error");
const TformError = document.getElementById("third-form-error");

//VALIDATION FUNCTIONS FOR THIRD FORM

function validateTeamName(){
  var team = document.querySelector('#info-teamName').value;

  if (team.length == 0 || team == null || team == "") {
    TnameError.innerHTML = "Team name cannot be blank";
    return false;
  }
  TnameError.innerHTML = '';
  return true;
}

function validateInstitution(){
  var institution = document.querySelector('#info-institution').value;

  if (institution.length == 0 || institution == null || institution == "") {
    institutionError.innerHTML = "Institution cannot be blank";
    return false;
  }
  institutionError.innerHTML = '';
  return true;
}

function validateGraduation(){
  var graduation = document.querySelector('#info-graduation').value;

  if (graduation.length == 0 || graduation == null || graduation == "") {
    graduationError.innerHTML = "Graduation cannot be blank";
    return false;
  }
  graduationError.innerHTML = '';
  return true;
}

function validateThirdForm(){
  if(!validateInstitution() || !validateTeamName() || !validateGraduation()){
    TformError.innerHTML = 'Please fix your errors before you can submit';
    return false;
  } else{
    TformError.innerHTML = '';
    showFourthPage();
    return true;
  }
}

//SUBMIT FUNCTION OF THIRD FORM

var page3 = document.getElementById("third-page");
page3.addEventListener('submit', (event)=>{
  event.preventDefault();
  validateThirdForm();
});



