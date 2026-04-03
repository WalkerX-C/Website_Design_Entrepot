document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registrationForm');
    const inputs = {
        name: document.getElementById('name'),
        address: document.getElementById('address'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        username: document.getElementById('username'),
        password: document.getElementById('password')
    };
    const errors = {
        name: document.getElementById('nameError'),
        address: document.getElementById('addressError'),
        phone: document.getElementById('phoneError'),
        email: document.getElementById('emailError'),
        username: document.getElementById('usernameError'),
        password: document.getElementById('passwordError')
    };

    const regexPatterns = {
        name: /^(?!\s*$)[a-zA-Z\s]{2,50}$/,
        address: /^(?!\s*$)[a-zA-Z0-9\s]+$/,
        phone: /^1[3-9]\d{9}$/,
        email: /^[^\s@]+@[^\s@]+\.(com|cn)$/,
        username: /^.{6,12}$/,
        password: /^.{8,16}$/,
    };

    const errorMessages = {
        name: 'The name can only contain letters and spaces, cannot be empty or all spaces, and should be 2-50 characters long.',
        address: 'The address can only contain letters, numbers, and spaces, and cannot be empty or all spaces.',
        phone: 'Please enter a valid 11-digit Chinese phone number (starts with 13-19).',
        email: 'Please enter a valid email address ending with .com or .cn.',
        username: 'The username must be between 6 and 12 characters.',
        password: 'The password must be between 8 and 16 characters long.'
    };

    function redirectToHomepage() {
        window.location.href = 'homepage.html';
    }

    function validateInput(key) {
        const input = inputs[key];
        const error = errors[key];
        const value = input.value.trim();

        const isValid = regexPatterns[key].test(value) && value !== '';

        if (isValid) {
            error.textContent = '';
            input.classList.remove('input-error');
            input.classList.add('input-success');
        } else {
            error.textContent = errorMessages[key];
            input.classList.remove('input-success');
            input.classList.add('input-error');
        }
        return isValid;
    }

    for (const key in inputs) {
        inputs[key].addEventListener('blur', function() {
            validateInput(key);
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isFormValid = true;
        for (const key in inputs) {
            if (!validateInput(key)) {
                isFormValid = false;
            }
        }
        
        if (isFormValid) {
            alert('Registration successful!');
            form.reset();
            for (const key in inputs) {
                inputs[key].classList.remove('input-success', 'input-error');
                errors[key].textContent = '';
            }
            redirectToHomepage();
        } else {
            alert('Please check your information and resubmit.');
        }
    });

});
