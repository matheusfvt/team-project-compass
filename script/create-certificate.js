var listaCertificados = document.getElementById("certificates-list");
var moreButton = document.querySelector(".more");
var cert = document.querySelector("#info-certificates");
const certificatesError = document.getElementById("certificates-error");
var j = 0;
var heartIndex = [];
var heartfull;

moreButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateCertificate()) {
    heartIndex = [];
    console.log(j);
    j++;
    createCertificate();
  }
  console.log(j);
});

function validateCertificate() {
  if (cert.value.length <= 0) {
    certificatesError.innerHTML = "You cannot create a blank certificate";
    return false;
  }
  if (listaCertificados.childElementCount >= 5) {
    certificatesError.innerHTML = "You cannot create more than 5 certificates";
    return false;
  }
  certificatesError.innerHTML = "";
  return true;
}

function createCertificate(index) {
  var certificateLi = document.createElement("li");
  certificateLi.classList.add("form-input");
  certificateLi.classList.add("certificate-li");

  var span = document.createElement("span");
  span.classList.add("icon");

  var heart = document.createElement("i");
  heart.classList.add("heart");

  span.appendChild(heart);

  var span2 = document.createElement("span");
  span2.classList.add("icon");

  var pencil = document.createElement("i");
  pencil.classList.add("pencil");

  span2.appendChild(pencil);

  var input = document.createElement("input");
  input.classList.add("input-certificate");
  input.classList.add("input");
  input.readOnly = true;

  input.value = cert.value;

  //CLICA NO LAPIS PODE EDITAR O INPUT
  pencil.addEventListener("click", () => {
    console.log("clickado lapis");
    if (input.readOnly == false) {
      input.readOnly = true;
    } else {
      input.readOnly = false;
    }
  });

  //CLICA NO CORACAO VIRA AZUL
  heart.addEventListener("click", () => {
    console.log("clickado coracao");

    if (heart.classList.contains("heart")) {
      heart.classList.remove("heart");
      heart.classList.add("heart-blue");
      heartfull = 1;
    } else {
      heart.classList.remove("heart-blue");
      heart.classList.add("heart");
      heartfull = 0;
    }
    console.log(heartfull);
  });

  certificateLi.appendChild(input);
  certificateLi.appendChild(span2);
  certificateLi.appendChild(span);

  //DOUBLE CLICK EXCLUI A LI
  certificateLi.addEventListener("dblclick", function (el) {
    certificateLi.classList.add("fadeOut");
    setTimeout(function () {
      certificateLi.remove();
    }, 500);
  });

  listaCertificados.appendChild(certificateLi);

  cert.value = "";
}
