// Função para verificar se os dados de login estão corretos
function verificarLogin(email, senha) {
    // Recupera os usuários salvos no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    console.log('Tentando login com:', email, senha); // Log login attempt
    console.log('Usuários cadastrados:', usuarios); // Log all registered users

    // Procura um usuário com o email e senha fornecidos
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    console.log('Usuário encontrado:', usuario); // Log the found user

    // Retorna true se um usuário correspondente for encontrado, caso contrário false
    return usuario !== undefined;
}

// Event listener para o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se os dados de login estão corretos
    if (verificarLogin(email, senha)) {
        // Se estiverem corretos, redireciona para a página principal
        window.location.href = '../rotina-treino/RotinaDeTreino.html';
    } else {
        // Se os dados estiverem incorretos, exibe uma mensagem de erro
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'E-mail ou senha incorretos.';
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});
