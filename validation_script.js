const form = document.getElementsByTagName("form");
const email = document.getElementById("email");
const errorLabel = document.getElementById("errorText");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isEmailValid = false;

email.addEventListener("input", () => {
    isEmailValid = email.value.length !== 0 && emailRegExp.test(email.value);
})

form[0].addEventListener("submit", (event) => {
    event.preventDefault();
    if(!isEmailValid) {
        email.className = "invalid"
        errorLabel.textContent = "Valid email required"
    }
    else {
        email.className = "valid";
        errorLabel.textContent = ""
    }
})