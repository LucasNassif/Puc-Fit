// Função para carregar os dados do usuário do Local Storage
function carregarDadosUsuario() {
    const usuarioAtualJSON = localStorage.getItem('usuarioLogado');
    if (usuarioAtualJSON) {
        const usuarioAtual = JSON.parse(usuarioAtualJSON);

        // Preenche os campos no HTML com os dados do usuário
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(1)').textContent = 'Nome: ' + usuarioAtual.nome;
        document.querySelector('.Informacao-Usuario .coluna-Informacao p:nth-of-type(2)').textContent = 'Email: ' + usuarioAtual.email;

        const matricula = Math.floor(10000 + Math.random() * 90000);
        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(1)').textContent = 'Matrícula: ' + matricula;

        document.querySelector('.Informacao-Usuario .coluna-Informacao2 p:nth-of-type(2)').textContent = 'Telefone: ' + usuarioAtual.telefone;
    } else {
        console.log('Usuário não está logado.');
    }
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    carregarDadosUsuario();
    carregarTreinos(); // Carregar treinos ao carregar a página
});

// Evento para lidar com o fechamento do menu se clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.img-menu')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Função para realizar o login do usuário com email e senha
function realizarLogin(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        carregarDadosUsuario();
        alert('Login realizado com sucesso!');
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}

// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    if (pageName === 'meu-painel') {
        window.location.href = 'RotinaDeTreino.html';
    } else if (pageName === 'turmas') {
        window.location.href = '../Minhas Turmas/minhas-turmas.html';
    } else if (pageName === 'anotacoes') {
        window.location.href = '../anotacoes/anotacoes.html';
    } else if (pageName === 'gerenciamento') {
        window.location.href = '/gerenciamento.html';
    } else if (pageName === 'sair') {
        logout();
    }
}

// Função para realizar o logout do usuário
function logout() {
    // Limpa o token de autenticação do localStorage
    localStorage.removeItem('authToken');

    // Redireciona para a página de login
    window.location.href = '../tela-login/Tela-de-login.html';

    // Se você estiver usando cookies para armazenar tokens de sessão, você pode limpar os cookies assim:
    // document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Adicione qualquer outra lógica de limpeza necessária
    console.log('Usuário deslogado com sucesso');
}

// Evento de clique para o botão de edição
document.getElementById('edit-button').addEventListener('click', function (event) {
    window.location.href = '../Telas de Usuário/editar-usuario/editarUsuario.html';
});

// Adicionar evento de click ao botão de redirecionamento
document.getElementById('botaoRedirecionar').addEventListener('click', function() {
    // Redirecionar para outra página
    window.location.href = '../adicionar-treino/adicionar-treino.html';
});

// Função para carregar treinos da localStorage
function carregarTreinos() {
    const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
    const exerciseGrid = document.querySelector('.exercise-grid');

    if (exerciseGrid) {
        exerciseGrid.innerHTML = ''; // Limpa o conteúdo antes de adicionar os treinos
        treinos.forEach(treino => {
            const div = document.createElement('div');
            div.className = 'exercise-item';
            div.innerHTML = `
                <div class="exercise-details">
                    <h5 class="exercise-name">${treino.nomeDoTreino}</h5>
                    <div class="exercise-series">
                        <span>Séries:</span>
                        <span>${treino.series || 'N/A'} x ${treino.repeticoes}</span>
                    </div>
                    <div class="exercise-time">
                        <span>Descanso:</span>
                        <span>${treino.tempoDeTreino}</span>
                    </div>
                </div>
                <div class="form-check">
                    <input class="exercise-checkbox" type="checkbox" id="exercise1">
                </div>
            `;
            exerciseGrid.appendChild(div);
        });
    }
}

// Chame a função para carregar os treinos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarTreinos();
});