//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const age = document.getElementById('age');

const months = ['01', '02', '03', '04', 
'05', '06', '07', '08', '09', '10',
'11', '12'];

//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === '01' || month === '03' || 
    month === '05' || month === '07' || month === '08' 
    || month === '10' || month === '12') {
        dayNum = 31;
    } else if(month === '04' || month === '06' 
    || month === '09' || month === '11') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        if(i < 10 ){
          option.textContent = '0'+i;
        } else{
          option.textContent = i;
        }
        
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

var actualBirthday = [];

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
    getAge();
    age.value = calcAge(actualBirthday[0], actualBirthday[1], actualBirthday[2]);
     
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
    getAge();
    age.value = calcAge(actualBirthday[0], actualBirthday[1], actualBirthday[2]);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
    getAge();
    age.value = calcAge(actualBirthday[0], actualBirthday[1], actualBirthday[2]);
}

function getAge(){
  actualBirthday[0] = yearSelect.value;
  actualBirthday[1] = monthSelect.value;
  actualBirthday[2] = daySelect.value;
}

function calcAge(year, month, day){
  var birthday = year+'-'+month+'-'+day;
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);

}



