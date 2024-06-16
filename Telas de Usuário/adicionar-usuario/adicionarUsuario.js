// Função para salvar os dados do novo usuário
function salvarDadosCadastro() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value; 
    const adminPrivileges = document.getElementById('admin_privileges').checked;


    // Criar um objeto com os dados do novo usuário
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

    // Carregar os usuários existentes do localStorage ou iniciar um array vazio
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Adicionar o novo usuário à lista de usuários
    usuarios.push(novoUsuario);
    // Salvar a lista atualizada no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Exibir os dados do novo usuário no console para confirmação
    console.log('Usuário cadastrado:', novoUsuario); 
    console.log('Todos os usuários:', usuarios); 

    // Exibir um alerta informando que o usuário foi cadastrado com sucesso
    alert('Usuário cadastrado com sucesso!');
    
    // Logar automaticamente o usuário
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));

    // Redirecionar para a página principal após o cadastro
    window.location.href = '../../rotina-treino/RotinaDeTreino.html';
}

// Adicionar um listener para o evento de submit do formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Prevenir o comportamento padrão de submit do formulário
    event.preventDefault(); 
    // Chamar a função para salvar os dados de cadastro
    salvarDadosCadastro(); 
});

// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}   

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    if (pageName === 'meu-painel') {
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';
    } else if (pageName === 'turmas') {
        window.location.href = '../../Minhas Turmas/minhas-turmas.html';
    } else if (pageName === 'anotacoes') {
        window.location.href = '/anotacoes.html';
    } else if (pageName === 'gerenciamento') {
        window.location.href = '/gerenciamento.html';
    } else if (pageName === 'sair') {
        logout();
    }
}

// Função para realizar o logout do usuário
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = '../tela-login/Tela-de-login.html';
    console.log('Usuário deslogado com sucesso');
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    simularLogin();
});

// Evento para lidar com o fechamento do menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.img-menu')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
