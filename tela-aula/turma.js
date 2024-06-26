window.onload = function() {
    var nomeTurma = localStorage.getItem('nomeTurma');
    var diaSemana = localStorage.getItem('diaSemana');
    var horarioInicial = localStorage.getItem('horarioInicial');
    var horarioFinal = localStorage.getItem('horarioFinal');
    var numeroVagas = localStorage.getItem('numeroVagas');

    if (nomeTurma) {
        document.getElementById('nomeTurmaDisplay').textContent = nomeTurma;
    }
    if (diaSemana && horarioInicial && horarioFinal) {
        document.getElementById('dayHourDisplay').innerHTML = diaSemana + '<br>' + horarioInicial + ' - ' + horarioFinal;
    }
    if (numeroVagas) {
        document.getElementById('numeroVagasDisplay').textContent = '0/' + numeroVagas;
    }

    const studentList = document.getElementById('studentList');
    let participantes = JSON.parse(localStorage.getItem('participantes')) || [];
    participantes.forEach(participante => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = `
            <img src="img/icon-player.png" alt="User Icon">
            <span>${participante.name} ${participante.surname}</span> <span class="role">${participante.role}</span>
        `;
        studentList.appendChild(studentDiv);
    });
};
