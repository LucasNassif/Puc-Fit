function salvarTurma() {
    const nomeTurma = document.getElementById('nomeTurma').value;
    const dia = document.getElementById('dia').value;
    const horarioInicial = document.getElementById('horarioInicial').value;
    const horarioFinal = document.getElementById('horarioFinal').value;
    const numeroVagas = document.getElementById('numeroVagas').value;

    const turma = {
        nomeTurma,
        dia,
        horarioInicial,
        horarioFinal,
        numeroVagas
    };

    // Obtém a lista de turmas do localStorage, ou cria uma nova lista se não houver nenhuma.
    const turmas = JSON.parse(localStorage.getItem('turmas')) || [];
    turmas.push(turma);

    // Salva a lista de turmas atualizada no localStorage.
    localStorage.setItem('turmas', JSON.stringify(turmas));
    window.location.href = '../Minhas Turmas/minhas-turmas.html'; // Substitua pelo caminho correto para a página Minhas Turmas
}

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    if (pageName === 'meu-painel') {
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';  // Substitua com o caminho da sua página Meu Painel
    } else if (pageName === 'turmas') {
        window.location.href = '../../Minhas Turmas/minhas-turmas.html';  // Substitua com o caminho da sua página Turmas
    } else if (pageName === 'anotacoes') {
        window.location.href = '/anotacoes.html';  // Substitua com o caminho da sua página Anotações
    } else if (pageName === 'gerenciamento') {
        window.location.href = '/gerenciamento.html';  // Substitua com o caminho da sua página Gerenciamento
    } else if (pageName === 'sair') {
        // Implemente lógica de sair da sessão, se necessário
        console.log('Implemente lógica para sair');
    }
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    // simularLogin(); // Descomente se houver uma função de simulação de login
});
