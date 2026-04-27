function checkLoginUsername() {
    var inputElement = document.getElementById("loginUsername");
    var errorElement = document.getElementById("loginUsernameError");
    var value = inputElement.value;

    if (value.length >= 6 && value.length <= 12) {
        errorElement.innerHTML = "";
        inputElement.className = "input-success";
        return true;
    } else {
        errorElement.innerHTML = "Username must be 6-12 characters.";
        inputElement.className = "input-error";
        return false;
    }
}

function checkLoginPassword() {
    var inputElement = document.getElementById("loginPassword");
    var errorElement = document.getElementById("loginPasswordError");
    var value = inputElement.value;

    if (value.length >= 8 && value.length <= 16) {
        errorElement.innerHTML = "";
        inputElement.className = "input-success";
        return true;
    } else {
        errorElement.innerHTML = "Password must be 8-16 characters.";
        inputElement.className = "input-error";
        return false;
    }
}

function validateLogin() {
    var isUserValid = checkLoginUsername();
    var isPassValid = checkLoginPassword();

    if (isUserValid == true && isPassValid == true) {
        alert('Login successful! Redirecting to homepage...');
        window.location.href = 'homepage.html'; 
        return false;
    } else {
        alert('Login failed. Please check your inputs.');
        return false;
    }
}

function resetLogin() {
    document.getElementById("loginUsername").className = ""; 
    document.getElementById("loginUsernameError").innerHTML = ""; 
    
    document.getElementById("loginPassword").className = ""; 
    document.getElementById("loginPasswordError").innerHTML = ""; 
}

