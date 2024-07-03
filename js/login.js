document.getElementById('loginForm').addEventListener ('submit'), function(event){
    event.preventDefault(); // Impede o envio do formulário
}

 // Usuário e senha de exemplo (substitua por validação real)
 const validUsername = 'usuario';
 const validPassword = 'senha123';

  // Obtendo valores dos campos de entrada
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validação simples

  if (username === validUsername && password === validPassword){
    window.location.href = 'curso.html'; // Redireciona para a página de cursos
  } else {
    document.getElementById ('errorMsg') .innerText = 'Usuário ou senha incorretos';
  }