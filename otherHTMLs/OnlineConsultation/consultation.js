document.addEventListener('DOMContentLoaded', app);

// Form data
let profileData;
let diseaseData;
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const phone = document.getElementById('phone');
const birthday = document.getElementById('birthday');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const genderOther = document.getElementById('other');
let genderSelected;
const fever = document.getElementById('feverID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
const cough = document.getElementById('coughID');
let symptomsInputs = [coughSym, feverSym, headacheSym, backPainSym, otherSym];
const diseaseCategory = document.getElementById('disease-category');
const diseaseDescription = document.getElementById('disease-description')
const imageArea = document.querySelector('.image-upload');

let sendConsultBtn;