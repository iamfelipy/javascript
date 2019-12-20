
const menuEsquerdo = document.querySelector('.menu-left-responsivo');
const buttonMenuEsquerdo = document.querySelector('.botao-abre-menu-esquerdo');
let buttonMenuEsquerdoPrimeiroClique = false;

const abreMenuEsquerdoResponsivo = () => {
    if( !buttonMenuEsquerdoPrimeiroClique ){
        menuEsquerdo.classList.toggle('menu-esquerdo-ativo');
        buttonMenuEsquerdoPrimeiroClique = true;
    }else{
        if( menuEsquerdo.classList.contains('menu-esquerdo-ativo') ){
            menuEsquerdo.classList.remove('menu-esquerdo-ativo');
            menuEsquerdo.classList.add('menu-esquerdo-desativado');
        }else{
            menuEsquerdo.classList.remove('menu-esquerdo-desativado');
            menuEsquerdo.classList.add('menu-esquerdo-ativo');
        }
    }
    if( !menuEsquerdo.offsetWidth ){
        menuEsquerdo.style.display = 'none';
    }
    
}

addEventListener('scroll', () => {
    let menuEsquerdo = document.querySelector('.menu-left-responsivo');
    let menuEsquerdoRect = menuEsquerdo.getBoundingClientRect();
    menuEsquerdo.style.paddingTop = `${-menuEsquerdoRect.top}px`;
    console.log(menuEsquerdoRect);
});

buttonMenuEsquerdo.addEventListener('click', abreMenuEsquerdoResponsivo);
