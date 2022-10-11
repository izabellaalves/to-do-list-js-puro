var inputnovatarefa = document.querySelector("#inputnovatarefa");
var btnaddtarefa = document.querySelector("#btnaddtarefa");
var listatarefas = document.querySelector("#listatarefas");
var janelaediçaobtnfechar = document.querySelector("#janelaediçaobtnfechar");

// Adicionar tarefa ao clicar na tecla Enter
inputnovatarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputnovatarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa)
    }
})

//Adicionar tarefa ao apertar no botão
btnaddtarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputnovatarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa)
})

//Gerar um Id aleatório pra tarefa
function gerarId() {
    return Math.floor(Math.random() * 3000)
}

janelaediçaobtnfechar.addEventListener('click', (e) => {
    altenarJanelaEdicao()
})

function adicionarTarefa(tarefa) {

    let li = criarTagLi(tarefa);
    listatarefas.appendChild(li);
    inputnovatarefa.value = ''
}


function criarTagLi(tarefa) {
    var li = document.createElement('li')
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textotarefa')
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div')

    let btnEditar = document.createElement('button')
    btnEditar.classList.add('btnaçao')
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>'
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')')

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnaçao')
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span)
    li.appendChild(div)

    return li
}

function editar(idTarefa) {
     let li = document.getElementById(''+idTarefa + '')
        if (li) {
            listatarefas.removeChild(li)
        }
}

function excluir(idTarefa) {
    var confirmacao = window.confirm('Tem certeza que deseja excluir a tarefa?')
    if (confirmacao) {
        let li = document.getElementById(''+idTarefa + '')
        if (li) {
            listatarefas.removeChild(li)
        }
    }
}