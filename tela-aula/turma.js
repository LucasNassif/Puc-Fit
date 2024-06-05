document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.image-edit-add img[alt="Settings"]'); // Seleciona a imagem com alt="Settings"
    const studentList = document.querySelector('.class-list'); // Seleciona o elemento ".class-list"
    const studentCounter = document.querySelector('.numero'); // Seleciona o contador de alunos

    addButton.addEventListener('click', () => {
        // Remove o formulário anterior, se existir
        const existingFormContainer = document.querySelector('.form-container');
        if (existingFormContainer) {
            existingFormContainer.remove();
        }

        // Cria os elementos para o formulário
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        const form = document.createElement('form');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const surnameLabel = document.createElement('label');
        const surnameInput = document.createElement('input');
        const submitButton = document.createElement('button');

        nameLabel.textContent = 'Nome:';
        nameInput.type = 'text';
        nameInput.placeholder = 'Digite seu nome';
        surnameLabel.textContent = 'Sobrenome:';
        surnameInput.type = 'text';
        surnameInput.placeholder = 'Digite seu sobrenome';
        submitButton.textContent = 'Adicionar Aluno';

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(surnameLabel);
        form.appendChild(surnameInput);
        form.appendChild(submitButton);
        formContainer.appendChild(form);

        const createStudentElement = (name, surname) => {
            const student = document.createElement('div');
            student.classList.add('student');
            student.innerHTML = `
                <img src="img/icon-player.png" alt="User Icon">
                <span>${name} ${surname}</span>
            `;
            return student;
        };

        const updateCounter = () => {
            const numberOfStudents = studentList.children.length;
            studentCounter.textContent = `${numberOfStudents}/20`;
        };

        const submitForm = (event) => {
            event.preventDefault();

            const name = nameInput.value.trim();
            const surname = surnameInput.value.trim();

            if (name && surname) {
                const newStudent = createStudentElement(name, surname);
                studentList.appendChild(newStudent);
                updateCounter();
                form.remove(); // Remove o formulário após a submissão
            } else {
                alert('Por favor, preencha o nome e sobrenome do aluno.');
            }
        };

        form.addEventListener('submit', submitForm);

        const container = document.querySelector('.container');
        container.insertBefore(formContainer, studentList);
    });

    // Atualiza o contador ao carregar a página
    const updateCounter = () => {
        const numberOfStudents = studentList.children.length;
        studentCounter.textContent = `${numberOfStudents}/20`;
    };
    updateCounter();
});
