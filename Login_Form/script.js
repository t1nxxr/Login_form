const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");

showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
});
