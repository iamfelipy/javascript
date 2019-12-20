

const caixa = document.querySelector('.caixa');
const coelho = document.querySelector('.caixa img');
let map = {};

//Faz o coelho andar
const movimentaCoelho = e => {

    map[e.key] = e.type;
    
    if( map['ArrowLeft'] === 'keydown' && map['ArrowUp'] === 'keydown'  ){
        caixa.style.left = `${ caixa.offsetLeft - 20 }px`;
        caixa.style.top = `${ caixa.offsetTop - 20 }px`;
    }else if( map['ArrowLeft'] === 'keydown' && map['ArrowDown'] === 'keydown' ){
        caixa.style.left = `${ caixa.offsetLeft - 20 }px`;
        caixa.style.top = `${ caixa.offsetTop + 20 }px`;
    }else if( map['ArrowRight'] === 'keydown' && map['ArrowUp'] === 'keydown' ){
        caixa.style.left = `${ caixa.offsetLeft + 20 }px`;
        caixa.style.top = `${ caixa.offsetTop - 20 }px`;
    }else if( map['ArrowRight'] === 'keydown' && map['ArrowDown'] === 'keydown' ){
        caixa.style.left = `${ caixa.offsetLeft + 20 }px`;
        caixa.style.top = `${ caixa.offsetTop + 20 }px`;
    }if( e.key === 'ArrowLeft' ){
        caixa.style.left = `${ caixa.offsetLeft - 20 }px`;
        coelho.src = 'coelho-andando-para-esquerda.png';
    }else if( e.key == 'ArrowRight' ){
        caixa.style.left = `${ caixa.offsetLeft + 20 }px`;
        coelho.src = 'coelho-andando-para-direita.png';
    }else if( e.key == 'ArrowUp' ){
        caixa.style.top = `${ caixa.offsetTop - 20 }px`;
    }else if( e.key == 'ArrowDown' ){
        caixa.style.top = `${ caixa.offsetTop + 20 }px`;
    }

}
addEventListener('keydown', movimentaCoelho );
addEventListener('keyup', movimentaCoelho );


//Faz o coelho andar
const trocaImagemCoelhoCorrendo = () => {
    coelho.src = 'coelho-parado.png';
}

setInterval( trocaImagemCoelhoCorrendo, 300 );



