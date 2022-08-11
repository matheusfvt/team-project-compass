var button1 = document.getElementById("button-basic");
var button2 = document.getElementById("button-social");
var button3 = document.getElementById("button-certificates");

var page1 = document.getElementById("first-page");
var page2 = document.getElementById("second-page");
var page3 = document.getElementById("third-page");

// button1.addEventListener("click", redirectPage1);
// button2.addEventListener("click", redirectPage2);
// button3.addEventListener("click", redirectPage3);
var pages = document.querySelectorAll(".page");
console.log(pages);

console.log(page1);
console.log(page2);
console.log(page3);
if(page1.classList.contains('active')){
  console.log('tenho');
}


function resetPages() {
  var pages = document.querySelectorAll(".page");
  for (let i = 0; i < pages.length; i++) {
    var el = pages[i];
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  }
}

function showFirstPage() {
  resetPages();
  page1.classList.add('active');
}

function showSecondPage() {
  resetPages();
  page2.classList.add('active');
}

function showThirdPage() {
  resetPages();
  page3.classList.add('active');
}





// function redirectPage1() {
//   page1.classList.add("active");
//   page2.classList.remove("active");
//   page3.classList.remove("active");
// }

// function redirectPage2() {
//   page1.classList.remove("active");
//   page2.classList.add("active");
//   page3.classList.remove("active");
// }

// function redirectPage3() {
//   page1.classList.remove("active");
//   page2.classList.remove("active");
//   page3.classList.add("active");
// }
