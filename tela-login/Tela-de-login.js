// Função para salvar os dados do login no localStorage
function salvarDadosLogin(email, senha) {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
}

// Função para verificar se os dados de login estão corretos
function verificarLogin(email, senha) {
    // Recupera os dados salvos no localStorage
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    // Verifica se os dados fornecidos correspondem aos salvos no localStorage
    if (email === emailSalvo && senha === senhaSalva) {
        return true; // Login válido
    } else {
        return false; // Login inválido
    }
}

// Event listener para o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se os dados de login estão corretos
    if (verificarLogin(email, senha)) {
        // Se estiverem corretos, redireciona para a página principal
        window.location.href = 'pagina_principal.html';
    } else {
        // Se os dados estiverem incorretos, exibe uma mensagem de erro
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'E-mail ou senha incorretos.';
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});