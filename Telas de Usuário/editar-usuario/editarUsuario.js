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
        console.log('Implemente lógica para sair');
    }
}

// Evento para carregar os dados do usuário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Simulando o login automático ao carregar a página
    // simularLogin(); // Comente esta linha se não estiver implementada
    
    // Carregar os dados do usuário logado nos campos de edição
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
        document.getElementById('nome').value = usuarioLogado.nome || '';
        document.getElementById('cpf').value = usuarioLogado.cpf || '';
        document.getElementById('datanascimento').value = usuarioLogado.datanascimento || '';
        document.getElementById('email').value = usuarioLogado.email || '';
        document.getElementById('telefone').value = usuarioLogado.telefone || '';
        document.getElementById('endereco').value = usuarioLogado.endereco || '';
        document.getElementById('senha').value = usuarioLogado.senha || '';
        document.getElementById('admin_privileges').checked = usuarioLogado.adminPrivileges || false;
    } else {
        console.error('Nenhum usuário logado encontrado.');
    }
});

// Função para salvar as alterações no usuário
function salvarAlteracoesUsuario(event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
    
    // Obter os dados do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value;
    const adminPrivileges = document.getElementById('admin_privileges').checked;

    // Criar objeto com os novos dados do usuário
    const usuarioEditado = {
        nome: nome,
        cpf: cpf,
        datanascimento: datanascimento,
        email: email,
        telefone: telefone,
        endereco: endereco,
        senha: senha,
        adminPrivileges: adminPrivileges
    };

    // Atualizar os dados no localStorage (simulando a edição do usuário)
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEditado));

    // Exibir mensagem de sucesso (opcional)
    alert('Alterações salvas com sucesso!');

    // Redirecionar para a página principal
    window.location.href = '../../rotina-treino/RotinaDeTreino.html';
}

// Adicionar listener para o evento de submit do formulário
document.getElementById('cadastroForm').addEventListener('submit', salvarAlteracoesUsuario);

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
