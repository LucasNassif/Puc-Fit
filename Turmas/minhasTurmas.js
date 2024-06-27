document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o menu suspenso (select) pelo ID 'dia'.
    const selectDia = document.getElementById('dia');
    // Seleciona o botão com a classe 'rotina-button'.
    const rotinaButton = document.querySelector('.rotina-button');

    // Adiciona um evento de clique ao botão 'rotina-button'.
    rotinaButton.addEventListener('click', function () {
        // Exibe um alerta quando o botão é clicado (para depuração).
        alert('Botão "rotina-button" clicado!');
        // Aqui você pode adicionar lógica para manipular o menu suspenso, se necessário.
        // Por exemplo, exibir ou ocultar o menu suspenso.
    });

    // Seleciona todos os botões com a classe 'turmas-button'.
    const buttons = document.querySelectorAll('.turmas-button');

    // Adiciona um evento de clique a cada botão na lista 'buttons'.
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove a classe 'selected' de todos os botões.
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Adiciona a classe 'selected' ao botão que foi clicado.
            this.classList.add('selected');
        });
    });
        // Redirecionar para a pagina inicial ao clicar no Logo
        document.getElementById('redirectInit').addEventListener('click', function() {
            window.location.href = '../rotina-treino/RotinaDeTreino.html';
        });
    
    // Adiciona um evento de clique ao botão 'rotinaButton'.
    rotinaButton.addEventListener('click', function () {
        // Chama a função 'redirectToAdicionarTurma' quando o botão é clicado.
        redirectToAdicionarTurma();
    });

    // Define a função que redireciona o usuário para a página 'adicionar-turma.html'.
    function redirectToAdicionarTurma() {
        window.location.href = '../adicionar-turma/adicionar-turma.html';
    }
});

