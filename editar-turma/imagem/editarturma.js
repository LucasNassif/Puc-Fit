function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function updateTurma() {
    // Get form values
    var nomeTurma = document.getElementById('nomeTurma').value;
    var diaSemana = document.getElementById('diaSemana').value;
    var horarioInicial = document.getElementById('horarioInicial').value;
    var horarioFinal = document.getElementById('horarioFinal').value;
    var numeroVagas = document.getElementById('numeroVagas').value;

    // Store values in localStorage
    localStorage.setItem('nomeTurma', nomeTurma);
    localStorage.setItem('diaSemana', diaSemana);
    localStorage.setItem('horarioInicial', horarioInicial);
    localStorage.setItem('horarioFinal', horarioFinal);
    localStorage.setItem('numeroVagas', numeroVagas);

    // Optional: Redirect to the other page to see changes
    window.location.href = '/tela-aula/turma.html';
}
