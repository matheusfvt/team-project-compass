if (localStorage.name) {
  document.getElementById('info-name').value = localStorage.name;
}else {
  document.getElementById('info-name').value = '';
}

if (localStorage.nickname) {
  document.getElementById('info-nickname').value = localStorage.nickname;
}else {
  document.getElementById('info-nickname').value = '';
}

if (localStorage.email) {
  document.getElementById('info-email').value = localStorage.email;
}else {
  document.getElementById('info-email').value = '';
}

if (localStorage.phone) {
  document.getElementById('info-phone').value = localStorage.phone;
}else {
  document.getElementById('info-phone').value = '';
}

if (localStorage.day) {
  document.getElementById('day').value = localStorage.day;
}else {
  document.getElementById('day').value = '';
}

if (localStorage.month) {
  document.getElementById('month').value = localStorage.month;
}else {
  document.getElementById('month').value = '';
}

if (localStorage.year) {
  document.getElementById('year').value = localStorage.year;
}else {
  document.getElementById('year').value = '';
}

if (localStorage.checkSelect) {
  document.getElementById('page__checkbox').value = localStorage.checkSelect;
}else {
  document.getElementById('page__checkbox').value = '';
}

var saveDados = function() {
  var name = document.getElementById('info-name').value;
  var nickname = document.getElementById('info-nickname').value;
  var email = document.getElementById('info-email').value;
  var phone = document.getElementById('info-phone').value;

  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  
  var checkSelect = document.getElementById('page__checkbox').value;
  

  localStorage.setItem('name', name);
  localStorage.setItem('nickname', nickname);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('day', day);
  localStorage.setItem('month', month);
  localStorage.setItem('year', year);
  localStorage.setItem('checkSelect', checkSelect);

}

document.onchange = saveDados;