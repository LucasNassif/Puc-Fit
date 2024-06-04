// Função para salvar os dados de cadastro no localStorage
function salvarDadosCadastro() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const adminPrivileges = document.getElementById('admin_privileges').checked;

    const novoUsuario = {
        nome: nome,
        cpf: cpf,
        datanascimento: datanascimento,
        email: email,
        telefone: telefone,
        endereco: endereco,
        adminPrivileges: adminPrivileges
    };

    // Verifica se já existem usuários salvos no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Adiciona o novo usuário à lista de usuários
    usuarios.push(novoUsuario);

    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário cadastrado com sucesso!');
}

// Event listener para o envio do formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    salvarDadosCadastro(); // Chama a função para salvar os dados de cadastro
});
