document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.turmas-button');
    const rotinaButton = document.querySelector('.rotina-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    rotinaButton.addEventListener('click', function () {
        redirectToAdicionarTurma();
    });

    function redirectToAdicionarTurma() {
        window.location.href = '../adicionar-turma/adicionar-turma.html';
    }
});
