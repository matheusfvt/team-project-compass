
// if (localStorage.day) {
//   document.getElementById("day").value = localStorage.day;
// } else {
//   document.getElementById("day").value = "";
// }

// if (localStorage.month) {
//   document.getElementById("month").value = localStorage.month;
// } else {
//   document.getElementById("month").value = "";
// }

// if (localStorage.year) {
//   document.getElementById("year").value = localStorage.year;
// } else {
//   document.getElementById("year").value = "";
// }

// if (localStorage.age) {
//   document.getElementById("age").value = localStorage.age;
// } else {
//   document.getElementById("age").value = "";
// }



var firstPage = document.getElementById("first-page");
var secondPage = document.getElementById("second-page");
var thirdPage = document.getElementById("third-page");

function saveDadosFirst() {
  var name = document.getElementById("info-name").value;
  var nickname = document.getElementById("info-nickname").value;
  var email = document.getElementById("info-email").value;
  var phone = document.getElementById("info-phone").value;

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var age = document.getElementById("age").value;

  var checkSelect = document.getElementById("page__checkbox").value;

  localStorage.setItem("name", name);
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("day", day);
  localStorage.setItem("month", month);
  localStorage.setItem("year", year);
  localStorage.setItem("age", age);
  localStorage.setItem("checkSelect", checkSelect);

  if (localStorage.name) {
    document.getElementById("info-name").value = localStorage.name;
  } else {
    document.getElementById("info-name").value = "";
  }
  
  if (localStorage.nickname) {
    document.getElementById("info-nickname").value = localStorage.nickname;
  } else {
    document.getElementById("info-nickname").value = "";
  }
  
  if (localStorage.email) {
    document.getElementById("info-email").value = localStorage.email;
  } else {
    document.getElementById("info-email").value = "";
  }
  
  if (localStorage.phone) {
    document.getElementById("info-phone").value = localStorage.phone;
  } else {
    document.getElementById("info-phone").value = "";
  }

  if (localStorage.checkSelect) {
    document.getElementById("page__checkbox").value = localStorage.checkSelect;
  } else {
    document.getElementById("page__checkbox").value = "";
  }
}

function saveDadosSecond() {
  var linkedin = document.getElementById("info-linkedin").value;
  var github = document.getElementById("info-github").value;

  localStorage.setItem("linkedin", linkedin);
  localStorage.setItem("github", github);

  if (localStorage.linkedin) {
    document.getElementById("info-linkedin").value = localStorage.linkedin;
  } else {
    document.getElementById("info-linkedin").value = "";
  }
  
  if (localStorage.github) {
    document.getElementById("info-github").value = localStorage.github;
  } else {
    document.getElementById("info-github").value = "";
  }
}

var certificateArray = [];

function saveDadosThird() {
  var teamName = document.getElementById("info-teamName").value;
  var institution = document.getElementById("info-institution").value;
  var graduation = document.getElementById("info-graduation").value;
  var inputCert = document.querySelectorAll(".input-certificate");
  for (let index = 0; index < inputCert.length; index++) {
    certificateArray[index] = inputCert[index].value;
  }
  for(let i=0; i < certificateArray.length; i++){
    var ul = document.querySelector('#resume-certificates');
     ul.innerHTML += '<li><p>'+certificateArray[i] +'</p></li>'; 
  }

  localStorage.setItem("institution", institution);
  localStorage.setItem("graduation", graduation);
  localStorage.setItem("teamName", teamName);

  if (localStorage.institution) {
    document.getElementById("info-institution").value = localStorage.institution;
  } else {
    document.getElementById("info-institution").value = "";
  }
  
  if (localStorage.teamName) {
    document.getElementById("info-teamName").value = localStorage.teamName;
  } else {
    document.getElementById("info-teamName").value = "";
  }
  
  if (localStorage.graduation) {
    document.getElementById("info-graduation").value = localStorage.graduation;
  } else {
    document.getElementById("info-graduation").value = "";
  }
}

function enviaTudo() {
  document.getElementById("resume-name").innerHTML += localStorage.getItem("name");
  document.getElementById("resume-nickname").innerHTML += localStorage.getItem("nickname");
  document.getElementById("resume-email").innerHTML += localStorage.getItem("email");
  document.getElementById("resume-phone").innerHTML += localStorage.getItem("phone");
  document.getElementById("resume-day").innerHTML += localStorage.getItem("day");
  document.getElementById("resume-month").innerHTML += localStorage.getItem("month");
  document.getElementById("resume-year").innerHTML += localStorage.getItem("year");
  document.getElementById("resume-age").innerHTML += localStorage.getItem("age");
  document.getElementById("resume-linkedin").innerHTML += localStorage.getItem("linkedin");
  document.getElementById("resume-github").innerHTML += localStorage.getItem("github");
  document.getElementById("resume-institution").innerHTML += localStorage.getItem("institution");
  document.getElementById("resume-graduation").innerHTML += localStorage.getItem("graduation");
  document.getElementById("resume-teamName").innerHTML += localStorage.getItem("teamName");
  // document.getElementById("resume-certificates").innerHTML += localStorage.getItem("certificate");
}

// firstPage.onsubmit = saveDadosFirst;
// secondPage.onsubmit = saveDadosSecond;
// thirdPage.onsubmit = saveDadosThird;

firstPage.addEventListener("submit", () => {
  saveDadosFirst();
});

secondPage.addEventListener("submit", () => {
  saveDadosSecond();
});

thirdPage.addEventListener("submit", () => {
  saveDadosThird();
  enviaTudo();
});
