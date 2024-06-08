document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.image-edit-add img[alt="Add"]'); 
    const studentList = document.querySelector('.class-list'); 
    const studentCounter = document.querySelector('.numero'); 

    const novoUsuarioNome = localStorage.getItem('novoUsuarioNome');
    if (novoUsuarioNome) {
        createStudentElement(novoUsuarioNome);
        localStorage.removeItem('novoUsuarioNome'); 
    }

    addButton.addEventListener('click', () => {
        window.location.href = '/add-usuario-turma/addusuarioturma.html';
    });

    const updateCounter = () => {
        const numberOfStudents = studentList.children.length;
        studentCounter.textContent = `${numberOfStudents}/20`;
    };
    updateCounter();

    function createStudentElement(name) {
        const student = document.createElement('div');
        student.classList.add('student');
        student.innerHTML = `
            <img src="img/icon-player.png" alt="User Icon">
            <span>${name}</span>
        `;
        studentList.appendChild(student);
        updateCounter();
    }
});
