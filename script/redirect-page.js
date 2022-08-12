var buttonB = document.getElementById("button-basic");
var buttonS = document.getElementById("button-social");
var buttonC = document.getElementById("button-certificates");

var page1 = document.getElementById("first-page");
var page2 = document.getElementById("second-page");
var page3 = document.getElementById("third-page");
var page4 = document.getElementById("fourth-page");

var containerNav = document.querySelector('.container__navigation');

function resetPages() {
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'none';
  page4.style.display = 'none';
  var buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    var el = buttons[i];
    if (el.classList.contains("bto-active")) {
      el.classList.remove("bto-active");
    }
  }
}

function showFirstPage() {
  resetPages();
  containerNav.style.display = 'block';
  buttonB.classList.add('bto-active');
  page1.style.display = 'block';
  // page1.classList.add('active');
}

function showSecondPage() {
  resetPages();
  buttonS.classList.add('bto-active');
  page2.style.display = 'block';
  // page2.classList.add('active');
}

function showThirdPage() {
  resetPages();
  buttonC.classList.add('bto-active');
  page3.style.display = 'block';
  // page3.classList.add('active');
}

function showFourthPage(){
  resetPages();
  containerNav.style.display = 'none';
  page4.style.display = 'block';
}