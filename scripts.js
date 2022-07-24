const firstInput = document.getElementById('first-name');
const lastInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const firstError = document.querySelector('.first');
const lastError = document.querySelector('.last');
const emailError = document.querySelector('.email');
const phoneError = document.querySelector('.phone');
const passwordError = document.querySelector('.password');

const submitBtn = document.querySelector('.submit');

firstInput.addEventListener('focusin', (e) => {
    if (firstInput.value.length <= 1) {
        firstInput.classList.add('name-invalid');
        firstInput.classList.remove('name-valid');
    } else {
        firstInput.classList.remove('name-invalid');
        firstInput.classList.add('name-valid');
    }
})

firstInput.addEventListener('input', (e) => {
    if (firstInput.value.length >= 2) {
        firstInput.classList.remove('name-invalid');
        firstInput.classList.add('name-valid');
        firstError.textContent = '';
    } else {
        firstInput.classList.remove('name-valid');
        firstInput.classList.add('name-invalid');
    }
})

firstInput.addEventListener('focusout', (e) => {
    if (firstInput.value.length <= 1) {
        firstError.textContent = '*Please enter your full name.';
        firstInput.classList.remove('name-invalid');
        firstInput.classList.remove('name-valid');
    } else {
        firstError.textContent = '';
        firstInput.classList.remove('name-invalid');
        firstInput.classList.remove('name-valid');
    }
})

lastInput.addEventListener('focusin', (e) => {
    if (lastInput.value.length <= 1) {
        lastInput.classList.add('name-invalid');
        lastInput.classList.remove('name-valid');
    } else {
        lastInput.classList.remove('name-invalid');
        lastInput.classList.add('name-valid');
    }
})

lastInput.addEventListener('input', (e) => {
    if (lastInput.value.length >= 2) {
        lastInput.classList.remove('name-invalid');
        lastInput.classList.add('name-valid');
        lastError.textContent = '';
    } else {
        lastInput.classList.remove('name-valid');
        lastInput.classList.add('name-invalid');
    }
})

lastInput.addEventListener('focusout', (e) => {
    if (lastInput.value.length <= 1) {
        lastError.textContent = '*Please enter your full name.';
        lastInput.classList.remove('name-invalid');
        lastInput.classList.remove('name-valid');
    } else {
        lastError.textContent = '';
        lastInput.classList.remove('name-invalid');
        lastInput.classList.remove('name-valid');
    }
})

emailInput.addEventListener('input', (e) => {
    if (!emailInput.validity.typeMismatch) {
        emailError.textContent = '';
    }
})

emailInput.addEventListener('focusout', (e) => {
    if (emailInput.validity.typeMismatch) {
        emailError.textContent = '*Please enter a valid email. Ex: jane@doe.com';
    } else {
        emailError.textContent = '';
    }
})

phoneInput.addEventListener('input', (e) => {
    if (!phoneInput.validity.patternMismatch) {
        phoneError.textContent = '';
    }
})

phoneInput.addEventListener('focusout', (e) => {
    if (phoneInput.validity.patternMismatch) {
        phoneError.textContent = '*Please enter a 10-digit phone number.';
    } else {
        phoneError.textContent = '';
    }
})

let message = '';
const first = '*Missing at least 1 capital letter.';
const second = '*Missing at least 1 number.';
const third = '*Password must be at least 8 characters.';
const space = '\n';

passwordInput.addEventListener('focusout', (e) => {
    if (passwordInput.validity.patternMismatch) {
        const regExCap = /[A-Z]/g;
        const regExDig = /[0-9]/g;
        const entry = passwordInput.value;
        if (!regExCap.test(entry)) {
            message += `${first}${space}`;
        } else {
            message += '';
        }
        if (!regExDig.test(entry)) {
            message += `${second}${space}`;
        } else {
            message += '';
        }
        if (entry.length < 9) {
            message += `${third}${space}`;
        } else {
            message += '';
        }
        passwordError.textContent = message;
    } else {
        passwordError.textContent = '';
    }
})