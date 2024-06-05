document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add'); // Seleciona a imagem com alt="add"
    const studentList = document.querySelector('.class-list'); // Seleciona o elemento ".class-list"

    addButton.addEventListener('click', () => {

        // Cria os elementos para o formulário
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        const form = document.createElement('form');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const surnameLabel = document.createElement('label');
        const surnameInput = document.createElement('input');
        const roleLabel = document.createElement('label');
        const roleSelect = document.createElement('select');
        const optionStudent = document.createElement('option');
        const optionInstructor = document.createElement('option');
        const submitButton = document.createElement('button');

        // Configura os elementos do formulário
        nameLabel.textContent = 'Nome:';
        nameInput.type = 'text';
        nameInput.placeholder = 'Digite seu nome';
        surnameLabel.textContent = 'Sobrenome:';
        surnameInput.type = 'text';
        surnameInput.placeholder = 'Digite seu sobrenome';
        roleLabel.textContent = 'Função:';
        optionStudent.value = 'Aluno';
        optionStudent.textContent = 'Aluno';
        optionInstructor.value = 'Instrutor';
        optionInstructor.textContent = 'Instrutor';
        roleSelect.appendChild(optionStudent);
        roleSelect.appendChild(optionInstructor);
        submitButton.textContent = 'Adicionar Aluno';

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(surnameLabel);
        form.appendChild(surnameInput);
        form.appendChild(roleLabel);
        form.appendChild(roleSelect);
        form.appendChild(submitButton);
        formContainer.appendChild(form);

        const createStudentElement = (name, surname, role) => {
            const student = document.createElement('div');
            student.classList.add('student');
            student.innerHTML = `
                <img src="img/icon-player.png" alt="User Icon">
                <span>${name} ${surname}</span> <span class="role">${role}</span>
            `;
            return student;
        };

        const submitForm = (event) => {
            event.preventDefault();

            const name = nameInput.value.trim();
            const surname = surnameInput.value.trim();
            const role = roleSelect.value;

            if (name && surname) {
                const newStudent = createStudentElement(name, surname, role);
                studentList.appendChild(newStudent);
                form.remove(); // Remove o formulário após a submissão
            } else {
                alert('Por favor, preencha o nome e sobrenome do aluno.');
            }
        };

        // Adiciona evento de submissão ao formulário
        form.addEventListener('submit', submitForm);

        // Exibe o formulário na tela, acima da lista de alunos
        const container = document.querySelector('.container');
        container.insertBefore(formContainer, studentList);
    });
});
