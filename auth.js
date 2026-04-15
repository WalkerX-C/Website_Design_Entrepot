
function getUsers() {
    return JSON.parse(localStorage.getItem('myStore_users')) || [];
}


function registerUser(username, email, password, confirmPassword) {
    let users = getUsers();
    if (users.find(u => u.username === username)) return alert("User exists!");
    if (users.find(u => u.email === email)) return alert("Email already registered!");
    if (password !== confirmPassword) return alert("Passwords do not match!");
    
    users.push({ username, email, password });
    localStorage.setItem('myStore_users', JSON.stringify(users));
    
    alert("Registration Success!");
    window.location.href = "login.html"; 
}


function loginUser(username, password) {
    let users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.href = "homepage.html";
    } else {
        alert("Wrong credentials!");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            loginUser(document.getElementById('loginUser').value, document.getElementById('loginPass').value);
        };
    }


    const regForm = document.getElementById('registerForm');
    if (regForm) {
        regForm.onsubmit = (e) => {
            e.preventDefault();
            registerUser(
                document.getElementById('regUser').value.trim(),
                document.getElementById('regEmail').value.trim(),
                document.getElementById('regPass').value,
                document.getElementById('regConfirm').value
            );
        };
    }
});