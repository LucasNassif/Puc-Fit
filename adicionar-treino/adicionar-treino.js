// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    const pageMap = {
        'meu-painel': '../rotina-treino/RotinaDeTreino.html',
        'turmas': '../Minhas Turmas/minhas-turmas.html',
        'anotacoes': '../anotacoes/anotacoes.html',
        'gerenciamento': '/gerenciamento.html',
        'sair': '../tela-login/Tela-de-login.html'
    };

    if (pageName === 'sair') {
        logout();
    } else if (pageMap[pageName]) {
        window.location.href = pageMap[pageName];
    }
}

// Função para realizar o logout do usuário
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = '../tela-login/Tela-de-login.html';
    console.log('Usuário deslogado com sucesso');
}

// Função para lidar com a submissão do formulário de adicionar treino
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    // Obtendo os valores dos campos do formulário
    const nomeDoTreino = document.getElementById('nome-do-treino').value;
    const diaSemana = document.getElementById('dia-semana').value;
    const repeticoes = document.getElementById('repeticoes').value;
    const series = document.getElementById('series').value;
    const tempoDescanso = document.getElementById('tempo-descanso').value;
    const tempoDeTreino = document.getElementById('tempo-de-treino').value;
    const especificacoes = document.getElementById('especificacoes').value;

    // Criando um objeto de treino
    const treino = {
        nomeDoTreino,
        diaSemana,
        repeticoes,
        series,
        tempoDescanso,
        tempoDeTreino,
        especificacoes
    };

    // Armazenando o treino no local storage
    let treinos = JSON.parse(localStorage.getItem('treinos')) || [];
    treinos.push(treino);
    localStorage.setItem('treinos', JSON.stringify(treinos));

    // Redirecionando para a página de rotina de treino
    window.location.href = '../rotina-treino/RotinaDeTreino.html';
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Adicionando evento de submissão ao formulário de adicionar treino
    const form = document.getElementById('adicionar-treino-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Carregar treinos na página de rotina de treino
    const exerciseList = document.querySelector('.exercise-list');
    if (exerciseList) {
        carregarTreinos();
    }
});

// Função para carregar treinos na página de rotina de treino
function carregarTreinos() {
    const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
    const exerciseList = document.querySelector('.exercise-list');

    treinos.forEach(treino => {
        const li = document.createElement('li');
        li.className = 'exercise-item';
        li.innerHTML = `
            <div>
                <h5 class="exercise-name">${treino.nomeDoTreino}</h5>
                <div class="exercise-details">
                    <span class="exercise-series">${treino.series || 'N/A'} x ${treino.repeticoes}</span>
                    <span class="exercise-time">${treino.tempoDeTreino}</span>
                    <button class="seta" aria-label="Mais detalhes">
                        <span>&#x2191;</span>
                    </button>
                    <button class="seta" aria-label="Mais detalhes">
                        <span>&#x2193;</span>
                    </button>
                </div>
            </div>
            <div class="form-check">
                <input class="exercise-checkbox" type="checkbox" id="exercise1">
            </div>
        `;
        exerciseList.appendChild(li);
    });
}

// Evento para lidar com o fechamento do menu se clicar fora dele
window.onclick = function(event) {
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
