// Função para carregar os dados do usuário do Local Storage
function carregarDadosUsuario() {
    // Verifica se existem dados de usuário salvos no Local Storage
    if (localStorage.getItem('usuarioLogado')) {
        // Recupera os dados do usuário logado do Local Storage
        const usuarioAtual = JSON.parse(localStorage.getItem('usuarioLogado'));

        // Preenche os campos no HTML com os dados do usuário
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(1)').textContent = 'Nome: ' + usuarioAtual.nome;
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(2)').textContent = 'Email: ' + usuarioAtual.email;

        // Gera um número aleatório de 5 dígitos para a matrícula (simulado)
        const matricula = Math.floor(10000 + Math.random() * 90000);
        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(1)').textContent = 'Matrícula: ' + matricula;

        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(2)').textContent = 'Telefone: ' + usuarioAtual.telefone;
    } else {
        console.log('Usuário não está logado.'); // Pode ser útil para depuração
    }
}

// Função para simular o login do usuário
function simularLogin() {
    // Verifica se já existe um usuário logado para evitar sobrescrever
    if (!localStorage.getItem('usuarioLogado')) {
        // Simulando um usuário autenticado
        const usuarioLogado = {
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            telefone: '(99) 99999-9999'
        };

        // Armazenando os dados do usuário no Local Storage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    }

    // Chamando a função para carregar os dados do usuário
    carregarDadosUsuario();
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    simularLogin();
});

// Evento para lidar com o fechamento do menu se clicar fora dele (mantido conforme o seu código original)
window.onclick = function(event) {
    if (!event.target.matches('.img-menu')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
