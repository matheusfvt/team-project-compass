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

if (localStorage.day) {
  document.getElementById("day").value = localStorage.day;
} else {
  document.getElementById("day").value = "";
}

if (localStorage.month) {
  document.getElementById("month").value = localStorage.month;
} else {
  document.getElementById("month").value = "";
}

if (localStorage.year) {
  document.getElementById("year").value = localStorage.year;
} else {
  document.getElementById("year").value = "";
}

if (localStorage.checkSelect) {
  document.getElementById("page__checkbox").value = localStorage.checkSelect;
} else {
  document.getElementById("page__checkbox").value = "";
}

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

var saveDados = function () {
  var name = document.getElementById("info-name").value;
  var nickname = document.getElementById("info-nickname").value;
  var email = document.getElementById("info-email").value;
  var phone = document.getElementById("info-phone").value;

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  var checkSelect = document.getElementById("page__checkbox").value;

  var linkedin = document.getElementById("info-linkedin").value;
  var github = document.getElementById("info-github").value;

  var year = document.getElementById("year").value;

  var teamName = document.getElementById("info-teamName").value;
  var institution = document.getElementById("info-institution").value;
  var graduation = document.getElementById("info-graduation").value;

  localStorage.setItem("name", name);
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("day", day);
  localStorage.setItem("month", month);
  localStorage.setItem("year", year);
  localStorage.setItem("checkSelect", checkSelect);
  localStorage.setItem("linkedin", linkedin);
  localStorage.setItem("github", github);
  localStorage.setItem("institution", institution);
  localStorage.setItem("graduation", graduation);
  localStorage.setItem("teamName", teamName);
  
};

document.onchange = saveDados;

document.getElementById("resume-name").innerHTML += localStorage.getItem("name");
document.getElementById("resume-nickname").innerHTML += localStorage.getItem("nickname");
document.getElementById("resume-email").innerHTML += localStorage.getItem("email");
document.getElementById("resume-phone").innerHTML += localStorage.getItem("phone");

document.getElementById("resume-day").innerHTML += localStorage.getItem("day");
document.getElementById("resume-month").innerHTML += localStorage.getItem("month");
document.getElementById("resume-year").innerHTML += localStorage.getItem("year");

document.getElementById("resume-linkedin").innerHTML += localStorage.getItem("linkedin");
document.getElementById("resume-github").innerHTML += localStorage.getItem("github");

document.getElementById("resume-institution").innerHTML += localStorage.getItem("institution");
document.getElementById("resume-graduation").innerHTML += localStorage.getItem("graduation");
document.getElementById("resume-teamName").innerHTML += localStorage.getItem("teamName");

