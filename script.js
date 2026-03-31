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
        name: /^[a-zA-Z\s]+$/,
        address: /^[a-zA-Z0-9\s]+$/,
        phone: /^1[3-9]\d{9}$/,
        email: /^[^\s@]+@[^\s@]+\.(com|cn)$/,
        username: /^.{6,12}$/,
        password: /^.{8,16}$/,
    };
    
    // 错误提示信息
    const errorMessages = {
        name: 'The name can only contain letters and spaces and cannot be empty.',
        address: 'The address can only contain letters, numbers, and spaces, and cannot be empty.',
        phone: 'Enter a valid phone number',
        email: 'Enter a valid email address',
        username: 'The username must be between 6 and 12 characters.',
        password: 'The password must be between 8 and 16 characters long.'
    };

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
            alert('successfully registered');
            form.reset();
            for (const key in inputs) {
                inputs[key].classList.remove('input-success', 'input-error');
            }
        } else {
            alert('Please check your information and resubmit');
        }
    });

});
