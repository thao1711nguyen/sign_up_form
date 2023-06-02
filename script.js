const password = document.getElementById("pw");
const confirm_password = document.getElementById("confirm-pw");
confirm_password.addEventListener('input', (e) => {
    if (confirm_password == password) {
        confirm_password.setCustomValidity("");
    } else {
        confirm_password.setCustomValidity("Password do not match");
    }
});
