// Função para inicializar o script
function initialize() {
    // Carregar notas salvas ao iniciar a página
    loadSavedNotes();

    // Event listener para adicionar nota quando o formulário for enviado
    const form = document.getElementById('notaForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        addNota();
    });

    // Event listener para mostrar/ocultar o menu dropdown
    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', toggleMenu);
}

// Função para mostrar/ocultar o menu dropdown
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.classList.toggle('show');
}

    // Redirecionar para a pagina inicial ao clicar no Logo
    document.getElementById('redirectInit').addEventListener('click', function() {
        window.location.href = '../rotina-treino/RotinaDeTreino.html';
    });

// Função para adicionar uma nova nota
function addNota() {
    const notaInput = document.getElementById('notaInput');
    const notaText = notaInput.value.trim();
    const notaContainer = document.getElementById('notaContainer');
    
    if (notaText !== "") {
        const date = new Date().toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const notaElement = document.createElement('div');
        notaElement.classList.add('nota');
        notaElement.innerHTML = `<p>${notaText}</p><span>${date}</span>`;
        notaContainer.appendChild(notaElement);

        // Salvar no localStorage
        saveNoteToLocalStorage(notaText, date);

        notaInput.value = ''; // Limpar o campo de entrada
    }
}

// Função para salvar a nota no localStorage
function saveNoteToLocalStorage(text, date) {
    let notas = JSON.parse(localStorage.getItem('notas')) || [];

    notas.push({ text, date });

    localStorage.setItem('notas', JSON.stringify(notas));
}

// Função para carregar as notas salvas do localStorage
function loadSavedNotes() {
    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    const notaContainer = document.getElementById('notaContainer');
    
    notas.forEach(nota => {
        const notaElement = document.createElement('div');
        notaElement.classList.add('nota');
        notaElement.innerHTML = `<p>${nota.text}</p><span>${nota.date}</span>`;
        notaContainer.appendChild(notaElement);
    });
}

// Chamar a função initialize ao carregar a página
document.addEventListener('DOMContentLoaded', initialize);
