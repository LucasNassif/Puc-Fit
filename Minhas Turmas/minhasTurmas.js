document.addEventListener('DOMContentLoaded', function() {
    const turmas = JSON.parse(localStorage.getItem('turmas')) || [];

    if (turmas.length > 0) {
        const turmasSection = document.getElementById('turmasSection');
        turmas.forEach((turma, index) => {
            const turmaDiv = document.createElement('div');
            turmaDiv.className = 'turma';
            turmaDiv.style.position = 'relative';
            turmaDiv.innerHTML = `
                <button class="delete-button" data-index="${index}">Excluir</button>
                <div class="turma-info" data-index="${index}">
                    <h3>${turma.nomeTurma}</h3>
                    <p>Dia: ${turma.dia.charAt(0).toUpperCase() + turma.dia.slice(1).replace('-', ' ')}</p>
                    <p>Horário: ${turma.horarioInicial} - ${turma.horarioFinal}</p>
                    <p>Vagas: ${turma.numeroVagas}/20</p>
                </div>
            `;
            turmasSection.appendChild(turmaDiv);
        });
    }

    // Adiciona evento de clique ao botão para redirecionar para adicionar-turma.html
    document.getElementById('addTurmaButton').addEventListener('click', function() {
        window.location.href = '../adicionar-turma/adicionar-turma.html';
    });

    // Redirecionar para a pagina inicial ao clicar no Logo
    document.getElementById('redirectInit').addEventListener('click', function() {
        window.location.href = '../rotina-treino/RotinaDeTreino.html';
    });


    // Adiciona evento de clique aos botões de excluir
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            turmas.splice(index, 1); // Remove a turma do array
            localStorage.setItem('turmas', JSON.stringify(turmas)); // Atualiza o localStorage
            window.location.reload(); // Recarrega a página para atualizar a lista
        });
    });

    // Adiciona evento de clique para as informações da turma
    const turmaInfos = document.querySelectorAll('.turma-info');
    turmaInfos.forEach(info => {
        info.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const turma = turmas[index];
            localStorage.setItem('nomeTurma', turma.nomeTurma);
            localStorage.setItem('diaSemana', turma.dia);
            localStorage.setItem('horarioInicial', turma.horarioInicial);
            localStorage.setItem('horarioFinal', turma.horarioFinal);
            localStorage.setItem('numeroVagas', turma.numeroVagas);
            window.location.href = '../tela-aula/turma.html'; // Substitua pelo caminho correto para a página Turma
        });
    });
});
