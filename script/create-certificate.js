var listaCertificados = document.getElementById("certificates-list");
var moreButton = document.querySelector(".more");
var cert = document.querySelector("#info-certificates");
const certificatesError = document.getElementById("certificates-error");

moreButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateCertificate()) {
    createCertificate();
  } 
});

function validateCertificate() {
  if (cert.value.length <= 0) {
    certificatesError.innerHTML = 'You cannot create a blank certificate';
    return false;
  } else {
    return true;
  }
}

function createCertificate() {
  var certificateLi = document.createElement("li");
  certificateLi.classList.add("input");
  certificateLi.classList.add("form-input");
  certificateLi.classList.add("input-certificate");

  var span = document.createElement("span");
  
  span.classList.add("icon");

  var span2 = document.createElement("span");
  
  span2.classList.add('icon');

  var heart = document.createElement("i");

  heart.classList.add("heart");

  span.appendChild(heart);

  var paragraph = document.createElement("p");
  paragraph.textContent = cert.value;
  certificateLi.appendChild(paragraph);
  certificateLi.appendChild(span);
  listaCertificados.appendChild(certificateLi);
  cert.value = "";
}

// var certificateItem = document.querySelector('.input-certificate');

listaCertificados.addEventListener("dblclick", function (el) {
    el.target.classList.add("fadeOut");
    setTimeout(function () {
        el.target.remove();
    }, 500);
});

listaCertificados.addEventListener("dblclick", function (el) {
  el.target.classList.add("fadeOut");
  setTimeout(function () {
      el.target.remove();
  }, 500);
});


