// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}   

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    if (pageName === 'meu-painel') {
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';
    } else if (pageName === 'turmas') {
        window.location.href = '../../Minhas Turmas/minhas-turmas.html';
    } else if (pageName === 'anotacoes') {
        window.location.href = '/anotacoes.html';
    } else if (pageName === 'gerenciamento') {
        window.location.href = '/gerenciamento.html';
    } else if (pageName === 'sair') {
        logout();
    }
}

// Função para realizar o logout do usuário
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = '../tela-login/Tela-de-login.html';
    console.log('Usuário deslogado com sucesso');
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    simularLogin();
});

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
