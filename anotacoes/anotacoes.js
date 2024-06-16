function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.classList.toggle('show');
}

function redirectToPage(page) {
    // Redirection logic here
    console.log(`Redirect to ${page}`);
}

function addNota() {
    const notaInput = document.getElementById('notaInput');
    const notaText = notaInput.value;
    const notaContainer = document.getElementById('notaContainer');
    const date = new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    if (notaText.trim() !== "") {
        const notaElement = document.createElement('div');
        notaElement.classList.add('nota');
        notaElement.innerHTML = `<p>${notaText}</p><span>${date}</span>`;
        notaContainer.appendChild(notaElement);
        notaInput.value = '';
    }
}
