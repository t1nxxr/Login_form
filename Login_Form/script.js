const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('showPassword');

checkbox.addEventListener('change', () => {
  passwordInput.type = checkbox.checked ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Вхід виконано успішно!');
});
