document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os inputs
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var adminPrivilegios = document.getElementById('adminPrivilegios').checked;

    console.log({
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        email: email,
        telefone: telefone,
        endereco: endereco,
        adminPrivilegios: adminPrivilegios
    });

    // Save the nome value in localStorage to be accessed in turma.js
    localStorage.setItem('novoUsuarioNome', nome);

    window.location.href = 'turma.html';
});