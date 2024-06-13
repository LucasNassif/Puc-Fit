function salvarDadosCadastro() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value; 
    const adminPrivileges = document.getElementById('admin_privileges').checked;

    const novoUsuario = {
        nome: nome,
        cpf: cpf,
        datanascimento: datanascimento,
        email: email,
        telefone: telefone,
        endereco: endereco,
        senha: senha, 
        adminPrivileges: adminPrivileges
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Usuário cadastrado:', novoUsuario); 
    console.log('Todos os usuários:', usuarios); 

    alert('Usuário cadastrado com sucesso!');
    
    // Logar automaticamente o usuário
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));

    // Redirecionar para a página principal
    window.location.href = '../../rotina-treino/RotinaDeTreino.html';
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    salvarDadosCadastro(); 
});
