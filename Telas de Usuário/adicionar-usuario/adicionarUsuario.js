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

// Função para alternar a visibilidade do menu ao clicar no ícone de menu
function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('show');
}   

// Função para redirecionar para a página correspondente ao item do menu clicado
function redirectToPage(pageName) {
    if (pageName === 'meu-painel') {
        window.location.href = '../../rotina-treino/RotinaDeTreino.html';  // Substitua com o caminho da sua página Meu Painel
    } else if (pageName === 'turmas') {
        window.location.href = '../../Minhas Turmas/minhas-turmas.html';  // Substitua com o caminho da sua página Turmas
    } else if (pageName === 'anotacoes') {
        window.location.href = '../../anotacoes/anotacoes.html';  // Substitua com o caminho da sua página Anotações
    } else if (pageName === 'gerenciamento') {
        window.location.href = '/gerenciamento.html';  // Substitua com o caminho da sua página Gerenciamento
    } else if (pageName === 'sair') {
        // Implemente lógica de sair da sessão, se necessário
        console.log('Implemente lógica para sair');
    }
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    simularLogin();
});

// Evento para lidar com o fechamento do menu se clicar fora dele (mantido conforme o seu código original)
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
