const addButton = document.querySelector('.image-edit-add img[alt="Settings"]'); // Seleciona a imagem com alt="Settings"
const studentList = document.querySelector('.class-list'); // Seleciona o elemento ".class-list"

addButton.addEventListener('click', () => {
  // Cria os elementos para o formulário
  const form = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const surnameLabel = document.createElement('label');
  const surnameInput = document.createElement('input');
  const submitButton = document.createElement('button');

  // Configura os elementos do formulário
  nameLabel.textContent = 'Nome:';
  nameInput.type = 'text';
  nameInput.placeholder = 'Digite seu nome';
  surnameLabel.textContent = 'Sobrenome:';
  surnameInput.type = 'text';
  surnameInput.placeholder = 'Digite seu sobrenome';
  submitButton.textContent = 'Adicionar Aluno';

  // Adiciona os elementos ao formulário
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(surnameLabel);
  form.appendChild(surnameInput);
  form.appendChild(submitButton);

  // Função para criar o elemento "student"
  const createStudentElement = (name, surname) => {
    const student = document.createElement('div');
    student.classList.add('student');
    student.innerHTML = `
      <img src="img/icon-player.png" alt="User Icon">
      <span>${name} ${surname}</span>
    `;
    return student;
  };

  // Função para submeter o formulário
  const submitForm = (event) => {
    event.preventDefault(); // Evita que a página recarregue

    const name = nameInput.value.trim(); // Pega o valor do nome sem espaços
    const surname = surnameInput.value.trim(); // Pega o valor do sobrenome sem espaços

    if (name && surname) { // Verifica se ambos os campos estão preenchidos
      const newStudent = createStudentElement(name, surname);
      studentList.appendChild(newStudent);
      form.remove(); // Remove o formulário após a submissão
    } else {
      alert('Por favor, preencha o nome e sobrenome do aluno.');
    }
  };

  // Adiciona evento de submissão ao formulário
  form.addEventListener('submit', submitForm);

  // Exibe o formulário na tela (você pode escolher como exibi-lo)
  document.body.appendChild(form);
});