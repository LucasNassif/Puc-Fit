// Função para carregar os dados do usuário do Local Storage
function carregarDadosUsuario() {
    // Verifica se existem dados de usuário salvos no Local Storage
    if (localStorage.getItem('usuarios')) {
        // Recupera os dados de usuário salvos
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        // Pega o último usuário cadastrado (supondo que seja o usuário atual)
        const usuarioAtual = usuarios[usuarios.length - 1];

        // Preenche os campos no HTML com os dados do usuário
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(1)').textContent = 'Nome: ' + usuarioAtual.nome;
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(2)').textContent = 'Email: ' + usuarioAtual.email;

        // Gera um número aleatório de 5 dígitos para a matrícula
        const matricula = Math.floor(10000 + Math.random() * 90000);
        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(1)').textContent = 'Matrícula: ' + matricula;

        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(2)').textContent = 'Telefone: ' + usuarioAtual.telefone;
    }
}

// Chama a função para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarDadosUsuario();
});
