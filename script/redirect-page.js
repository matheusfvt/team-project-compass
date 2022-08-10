var button1 = document.getElementById("button-basic");
var button2 = document.getElementById("button-social");
var button3 = document.getElementById("button-certificates");

var page1 = document.getElementsByClassName(".page1");
var page2 = document.getElementsByClassName(".page2");
var page3 = document.getElementsByClassName(".page3");

button1.addEventListener("click", redirectPage1);
button2.addEventListener("click", redirectPage2);
button3.addEventListener("click", redirectPage3);

function redirectPage1() {

  if(){
    
  }

  page1.classList.add("active");
  page2.classList.remove("active");
  page3.classList.remove("active");
}

function redirectPage2() {
  page1.classList.remove("active");
  page2.classList.add("active");
  page3.classList.remove("active");
}

function redirectPage3() {
  page1.classList.remove("active");
  page2.classList.remove("active");
  page3.classList.add("active");
}
