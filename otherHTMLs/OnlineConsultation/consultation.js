
let clientData;
let conditionData;
let clientGender;


const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const phone = document.getElementById('phone');
const birthday = document.getElementById('birthday');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const genderOther = document.getElementById('other');


const fever = document.getElementById('feverID');
const cough = document.getElementById('coughID');
const fatigue = document.getElementById('fatigueID');
const headache = document.getElementById('headacheID');
const tasteOrsmell = document.getElementById('tasteID');
const soreThroat = document.getElementById('throatID');
const nausea = document.getElementById('nauseaID');
const chestPain = document.getElementById('chestID');
let symptoms = [fever, cough, fatigue, headache, tasteOrsmell, soreThroat, nausea, chestPain];


const conditions = document.getElementById('condition-category');
const conditionDescription = document.getElementById('symptoms-description');

let sendConsultBtn;


