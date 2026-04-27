function checkField(inputId, errorId, regex, errorMsg) {
    var inputElement = document.getElementById(inputId);
    var errorElement = document.getElementById(errorId);
    var value = inputElement.value;

    var valueWithoutSpaces = value.replace(/ /g, "");

    if (valueWithoutSpaces.length > 0 && regex.test(value)) {
        errorElement.innerHTML = "";
        inputElement.className = "input-success";
        return true;
    } else {
        errorElement.innerHTML = errorMsg;
        inputElement.className = "input-error";
        return false;
    }
}

function validateName() {
    var regex = /^[a-zA-Z ]{2,50}$/;
    var msg = "The name can only contain letters and spaces (2-50 chars).";
    return checkField("name", "nameError", regex, msg);
}

function validateEmail() {
    var regex = /^[^@]+@[^@]+\.(com|cn)$/;
    var msg = "Please enter a valid email address ending with .com or .cn.";
    return checkField("email", "emailError", regex, msg);
}

function validateAddress() {
    var regex = /^[a-zA-Z0-9 ]+$/;
    var msg = "Address can only contain letters, numbers, and spaces.";
    return checkField("address", "addressError", regex, msg);
}

function validatePhone() {
    var regex = /^1[3-9][0-9]{9}$/;
    var msg = "Please enter a valid 11-digit Chinese phone number.";
    return checkField("phone", "phoneError", regex, msg);
}

function validateUsername() {
    var regex = /^.{6,12}$/;
    var msg = "The username must be between 6 and 12 characters.";
    return checkField("username", "usernameError", regex, msg);
}

function validatePassword() {
    var regex = /^.{8,16}$/;
    var msg = "The password must be between 8 and 16 characters long.";
    return checkField("password", "passwordError", regex, msg);
}

function validateForm() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isAddressValid = validateAddress();
    var isPhoneValid = validatePhone();
    var isUserValid = validateUsername();
    var isPassValid = validatePassword();

    if (isNameValid && isEmailValid && isAddressValid && isPhoneValid && isUserValid && isPassValid) {
        alert('Registration successful!');
        window.location.href = 'homepage.html'; 
        return false;
    } else {
        alert('Please check your information and resubmit.');
        return false;
    }
}

function resetForm() {
    var inputs = ["name", "email", "address", "phone", "username", "password"];
    for (var i = 0; i < inputs.length; i++) {
        var inputId = inputs[i];
        document.getElementById(inputId).className = "";
        document.getElementById(inputId + "Error").innerHTML = "";
    }
}
