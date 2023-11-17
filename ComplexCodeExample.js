/*
Filename: ComplexCodeExample.js

This code example demonstrates a complex implementation of a web application using JavaScript. The application creates a dynamic form to capture user information and perform various calculations based on the entered data. It includes event handling, DOM manipulation, and validation.

Author: AI Assistant

Date: August 1, 2021

*/

// User data object constructor
function UserData() {
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.age = '';
}

// Global variables
var userData = new UserData();
var form = document.getElementById('userForm');
var outputContainer = document.getElementById('outputContainer');

// Event listeners
form.addEventListener('submit', handleSubmit);

// Event handlers
function handleSubmit(event) {
  event.preventDefault();

  // Update user data object
  userData.firstName = document.getElementById('firstNameInput').value;
  userData.lastName = document.getElementById('lastNameInput').value;
  userData.email = document.getElementById('emailInput').value;
  userData.age = document.getElementById('ageInput').value;

  // Perform calculations
  var fullName = `${userData.firstName} ${userData.lastName}`;
  var emailParts = userData.email.split('@');
  var domain = emailParts[1];
  var birthYear = new Date().getFullYear() - userData.age;

  // Validate inputs
  var isValid = true;

  if (!validateName(userData.firstName)) {
    isValid = false;
    document.getElementById('firstNameInput').classList.add('input-error');
  } else {
    document.getElementById('firstNameInput').classList.remove('input-error');
  }

  if (!validateName(userData.lastName)) {
    isValid = false;
    document.getElementById('lastNameInput').classList.add('input-error');
  } else {
    document.getElementById('lastNameInput').classList.remove('input-error');
  }

  if (!validateEmail(userData.email)) {
    isValid = false;
    document.getElementById('emailInput').classList.add('input-error');
  } else {
    document.getElementById('emailInput').classList.remove('input-error');
  }

  if (!validateAge(userData.age)) {
    isValid = false;
    document.getElementById('ageInput').classList.add('input-error');
  } else {
    document.getElementById('ageInput').classList.remove('input-error');
  }

  // Display output
  if (isValid) {
    var outputText = `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email Domain:</strong> ${domain}</p>
      <p><strong>Birth Year:</strong> ${birthYear}</p>
    `;

    outputContainer.innerHTML = outputText;
  } else {
    outputContainer.innerHTML = '<p>Please enter valid information.</p>';
  }
}

// Validation functions
function validateName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validateAge(age) {
  return /^[1-9][0-9]?$|^100$/.test(age);
}

// Additional functions...
// ...
// ...

// Initialize the form
function initializeForm() {
  document.getElementById('firstNameInput').value = '';
  document.getElementById('lastNameInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('ageInput').value = '';
  outputContainer.innerHTML = '';
}

// Page load
window.addEventListener('load', initializeForm);
