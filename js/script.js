// script.js

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar se o login é válido (substituir com sua lógica de autenticação)
    if (email === 'eu_email@example.com' && password === 'ua_senha') {
        // Redirecionar para a sessão de cursos
        window.location.href = 'cursos.html';
    } else {
        errorMessage.textContent = 'E-mail ou senha inválidos.';
    }
});