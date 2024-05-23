// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const cnic = document.getElementById('cnic');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit' , (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {

//     const usernamevalue = username.value.trim();
//     const cnicvalue = cnic.value.trim();
//   const emailvalue = email.value.trim();
//    const  passwordvalue = password.value.trim(); 
//    const password2value = password2.value.trim();



// if(usernameValue === '') {


//     setErrorFor(username , 'username cannot be blank ');

// } else{
//     setSuccessFor(username);
// }

// }

// function setErrorFor(input , message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');


//     small.innerText = message;

//     formControl.className = 'form-control error';
// }








// Validation functions
function validateUsername(username) {
    var usernamePattern = /^[a-zA-Z0-9]{4,15}$/;
    return usernamePattern.test(username);
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    var passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
}

function validateCnic(cnic) {
    var cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
    return cnicPattern.test(cnic);
}

function validateAge(age) {
    var ageMin = 18;
    var ageMax = 60;
    return age >= ageMin && age <= ageMax;
}

// Event listener for form submission
document.getElementById('validationForm').addEventListener('submit', function(event) {
    // Get form elements
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cnic = document.getElementById('cnic').value;
    var age = document.getElementById('age').value;

    // Error message elements
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var cnicError = document.getElementById('cnicError');
    var ageError = document.getElementById('ageError');

    var isValid = true;

    // Validate username
    if (!validateUsername(username)) {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Validate email
    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate password
    if (!validatePassword(password)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Validate CNIC
    if (!validateCnic(cnic)) {
        cnicError.style.display = 'block';
        isValid = false;
    } else {
        cnicError.style.display = 'none';
    }

    // Validate age
    if (!validateAge(age)) {
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }

    // If any validation failed, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});