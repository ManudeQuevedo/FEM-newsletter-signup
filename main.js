// Selecting the input element
const inputEmail = document.getElementById("email");
const btn = document.getElementById("btn");
const error = document.getElementById("email-error");

// Validate it is a valid email address
function validateEmail() {
  if (inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "Please enter a valid email";
    return false;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
