const inputTarefa = document.getElementById('input-adicionar-nova-tarefa');
const buttonAdicionarNovaTarefa = document.querySelector('.btn-adicionar-nova-tarefa');

let tarefaSendoEditada;
let valorOriginalDaTarefaAntesDeSerEditada;

const moldeTarefa = document.querySelector('.molde-tarefa');
const containerTarefas = document.querySelector('.container-tarefas');
const containerTarefaBotaoExcluirEditar = document.querySelector('.container-tarefa-botao-excluir-editar');



buttonAdicionarNovaTarefa.addEventListener('click', adicionarNovaTarefa);

function adicionarNovaTarefa(){
    if(!tarefaSendoEditada){
        let containerTarefaBotaoExcluirEditar = moldeTarefa.children[0].cloneNode(true);
        let containerTarefa = containerTarefaBotaoExcluirEditar.children[0];
        let botaoExcluir = containerTarefaBotaoExcluirEditar.children[1].children[0];
        let botaoEditar = containerTarefaBotaoExcluirEditar.children[1].children[1];
        
        function excluirElemento(tarefa){
            tarefa.parentElement.removeChild(tarefa);
        }
        botaoExcluir.addEventListener('click', () => excluirElemento(containerTarefaBotaoExcluirEditar));

        function editarElemento(e,containerTarefa){
            
            if( !tarefaSendoEditada ){
                valorOriginalDaTarefaAntesDeSerEditada = containerTarefa.innerText;
                let inputEditarTarefa = document.createElement('input');
                inputEditarTarefa.setAttribute('type', 'text');
                containerTarefa.innerHTML = '';
                containerTarefa.appendChild(inputEditarTarefa);
                tarefaSendoEditada = containerTarefa;
                e.currentTarget.innerHTML = 'Salvar';
                console.log(valorOriginalDaTarefaAntesDeSerEditada);
            }else if(containerTarefa === tarefaSendoEditada){
                e.currentTarget.innerHTML = 'Editar';
            }
        }
        botaoEditar.addEventListener('click', (e) => editarElemento(e,containerTarefa));

        botaoExcluir.innerHTML = 'X';
        botaoEditar.innerHTML = 'Editar';

        containerTarefaBotaoExcluirEditar.children[0].innerHTML = inputTarefa.value; 
        containerTarefas.appendChild(containerTarefaBotaoExcluirEditar);
        inputTarefa.value = '';
    }

}

