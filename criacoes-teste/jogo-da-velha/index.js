
let jogador1 = 'Saitama';
let jogador2 = 'Kakaroto';

const trianguloEsquerdo = document.querySelector('.triangulo-esquerdo');

let teste = window.innerHeight;
trianguloEsquerdo.style.height = window.innerHeight+'px';
trianguloEsquerdo.style.width = window.innerHeight+'px';

const jogadas = [
    '','','',
    '','','',
    '','','',
];

let jogadorNaVez = 1;
let jogadorVencedor;

const posicoesElementos = document.querySelectorAll('.tabuleiro .tabuleiro-linha .tabuleiro-linha-posicoes');
const jogadorVencedorPainel = document.querySelector('.vencedor-panel');

const verificaGanhador = (jogador, index) => {

    function definirCorGanhador(jogadorVencedor){
        if(jogadorVencedor == 1){
            return 'tabuleiro-linha-vencedora-jogador1';
        }else{
            return 'tabuleiro-linha-vencedora-jogador2';
        }
    }

    //Horizontal ganhador
    if( jogadas[0] !== '' && jogadas[0] === jogadas[1] && jogadas[1] === jogadas[2] ){
        jogadorVencedor = jogador;
        posicoesElementos[0].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[1].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[2].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
        
    }else if( jogadas[3] !== '' && jogadas[3] === jogadas[4] && jogadas[4] === jogadas[5] ){
        jogadorVencedor = jogador;
        posicoesElementos[3].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[4].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[5].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }else if( jogadas[6] !== '' && jogadas[6] === jogadas[7] && jogadas[7] === jogadas[8] ){
        jogadorVencedor = jogador;
        posicoesElementos[6].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[7].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[8].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }
    
    //Vertical ganhador
    if( jogadas[0] !== '' && jogadas[0] === jogadas[3] && jogadas[3] === jogadas[6] ){
        jogadorVencedor = jogador;
        posicoesElementos[0].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[3].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[6].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }else if( jogadas[1] !== '' && jogadas[1] === jogadas[4] && jogadas[4] === jogadas[7] ){
        jogadorVencedor = jogador;
        posicoesElementos[1].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[4].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[7].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }else if( jogadas[2] !== '' && jogadas[2] === jogadas[5] && jogadas[5] === jogadas[8] ){
        jogadorVencedor = jogador;
        posicoesElementos[2].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[5].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[8].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }
    
    //Diagonal ganhador
    if( jogadas[0] !== '' && jogadas[0] === jogadas[4] && jogadas[4] === jogadas[8] ){
        jogadorVencedor = jogador;
        posicoesElementos[0].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[4].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[8].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }else if( jogadas[2] !== '' && jogadas[2] === jogadas[4] && jogadas[4] === jogadas[6] ){
        jogadorVencedor = jogador;
        posicoesElementos[2].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[4].classList.add(definirCorGanhador(jogadorVencedor));
        posicoesElementos[6].classList.add(definirCorGanhador(jogadorVencedor));
        jogadorVencedorPainel.lastElementChild.innerHTML = jogadorVencedor == 1 ? jogador1 : jogador2;
        document.querySelector(".vencedor-panel img[src='coroa.gif']").style.display = 'block';
    }
}

posicoesElementos.forEach( (posicao,index) => {
    posicao.id = index;
    posicao.addEventListener('click', () => {
        if( jogadas[posicao.id] === '' && !jogadorVencedor){
            if(jogadorNaVez == 1){
                jogadas[posicao.id] = 'X';
                posicao.children[0].innerHTML = 'X';
                posicao.classList.add('tabuleiro-linha-posicoes-ativo-jogador1');
                verificaGanhador(jogadorNaVez, index);
                jogadorNaVez = 2;
            }else{
                jogadas[posicao.id] = 'O';
                posicao.children[0].innerHTML = 'O';
                posicao.classList.add('tabuleiro-linha-posicoes-ativo-jogador2');
                verificaGanhador(jogadorNaVez, index);
                jogadorNaVez = 1;
            }
        }
        console.log(jogadorVencedor);
    }); 
});
