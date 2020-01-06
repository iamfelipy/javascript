
export default function Modal(){
    

}

const botaoAbrirModal = document.querySelector('.menu [data-modal="abrir"]');
const modalContainer = document.querySelector('.modal-container');
const botaoFecharModal = document.querySelector('.fechar');

botaoFecharModal.addEventListener( 'click', () => {
    modalContainer.classList.remove('ativo');
});

botaoAbrirModal.addEventListener('click', e => {
    e.preventDefault();
    modalContainer.removeAttribute('style');
    modalContainer.classList.add('ativo');
});

function fecharModalAoClicarFora(e){
    if( e.target === this ){
        modalContainer.classList.remove('ativo');
    }
}

modalContainer.addEventListener( 'click', fecharModalAoClicarFora);






