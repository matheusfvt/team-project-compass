var buttonB = document.getElementById("button-basic");
var buttonS = document.getElementById("button-social");
var buttonC = document.getElementById("button-certificates");

var page1 = document.getElementById("first-page");
var page2 = document.getElementById("second-page");
var page3 = document.getElementById("third-page");
var page4 = document.getElementById("fourth-page");

var buttons = document.querySelectorAll(".button");

var containerNav = document.querySelector('.container__navigation');
var pageTitle = document.querySelector('#page-title');

function resetPages() {
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'none';
  page4.style.display = 'none';
  if(containerNav.style.display == 'none'){
    containerNav.style.display = 'flex';
  }
  for (let i = 0; i < buttons.length; i++) {
    var el = buttons[i];
    if (el.classList.contains("bto-active")) {
      el.classList.remove("bto-active");
    }
  }
}

function showFirstPage() {
  resetPages();
  pageTitle.style.display = 'block';
  buttonB.classList.add('bto-active');
  page1.style.display = 'block';
}

// var flagSecond = false;
function showSecondPage() {
  resetPages();
  buttonS.classList.add('bto-active');
  page2.style.display = 'block';
  flagSecond = true;
}

// var flagThird = false;
function showThirdPage() {
  resetPages();
  buttonC.classList.add('bto-active');
  page3.style.display = 'block';
  flagThird = true;
}


function showFourthPage(){
  Swal.fire(
    'success!',
    'Your form has been sent successfully.',
    'success'
  )
  resetPages();
  containerNav.style.display = 'none';
  pageTitle.style.display = 'none';
  page4.style.display = 'block';
}

// function scButton(){
//   if(flagSecond == true){
//     showSecondPage();
//   } else{
//     return validateFirstForm();
//   }
// }


// function ctButton(){
//   if(flagThird == true){
//     showThirdPage();
//   } else{
//     return validateSecondForm();
//   }
// }

function resetButton(){
  window.localStorage.clear();
  page1.reset();
  page2.reset();
  page3.reset();
  flagThird = false;
  flagSecond = false;
  showFirstPage();
}

