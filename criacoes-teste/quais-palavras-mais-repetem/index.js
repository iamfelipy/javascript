
const entrada = document.querySelector('.nova-item');
const lista = document.querySelector('.itens-lista');
const buttonAddNewItem = document.querySelector('.adicionar-novo-item');
const divQuatroPalavrasQuemaisSeRepetem = document.querySelector('.quatro-palavras-que-mais-se-repetem');
let palavras = [
    {
        palavra: 'limão',
        quantasVezesApareceu: 2,
    },
    {
        palavra: 'chuchu',
        quantasVezesApareceu: 3,
    },
    {
        palavra: 'manga',
        quantasVezesApareceu: 4,
    },
    {
        palavra: 'pera',
        quantasVezesApareceu: 5,
    },
    {
        palavra: 'diesel',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'cana',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'carro',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'roda',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'vidro',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'sol',
        quantasVezesApareceu: 6,
    },
    {
        palavra: 'ceu',
        quantasVezesApareceu: 6,
    }
]

const inicializaLista = () => {
    if( palavras.length ){
        palavras.forEach( palavra => {
            let novoItem = document.createElement('div');
            novoItem.innerHTML = palavra.palavra;
            lista.appendChild(novoItem);
        });
        ordenaPalavrasPrimeiroAsQueMaisSeRepetem();
    }
    console.log(palavras);
}

const mostraQuatroPalavrasQueMaisSeRepetem = () => {
    divQuatroPalavrasQuemaisSeRepetem.innerHTML = '';
    let estiloFonte = [
        {  
            color: 'red',
            fontSize: '16px',
        },
        {  
            color: 'gray',
            fontSize: '20px',
        },
        {  
            color: 'blue',
            fontSize: '25px',
        },
        {  
            color: 'green',
            fontSize: '30px',
        }
    ];
    let porcentagem = 0;
    palavras.forEach( (palavra, index) => {
        
        if( index < 10 ){
            let novoItem = document.createElement('div');
            novoItem.classList.add('palavra-que-mais-se-repete');

            porcentagem = 100*index/10;
            console.log(porcentagem);

            if( porcentagem <= 25 ){
                novoItem.style.color = estiloFonte[3].color;
                novoItem.style.fontSize = estiloFonte[3].fontSize;
            }else if( porcentagem <= 50 ){
                novoItem.style.color = estiloFonte[2].color;
                novoItem.style.fontSize = estiloFonte[2].fontSize;
            }else if( porcentagem <= 75 ){
                novoItem.style.color = estiloFonte[1].color;
                novoItem.style.fontSize = estiloFonte[1].fontSize;
            }else{
                novoItem.style.color = estiloFonte[0].color;
                novoItem.style.fontSize = estiloFonte[0].fontSize;
            }
            novoItem.innerHTML = palavra.palavra;
            divQuatroPalavrasQuemaisSeRepetem.appendChild(novoItem);
        }
    });
}

const ordenaPalavrasPrimeiroAsQueMaisSeRepetem = () => {
    palavras.map( (palavra, index) => {
        palavras.map( (palavra2, index2) => {
            let backup;
            if( palavra.quantasVezesApareceu > palavra2.quantasVezesApareceu){
                backup = {...palavras[index]};
                palavras[index] = {...palavra2};
                palavras[index2] = {...backup};
                maiorValorQueQuantasVezesApareceu = palavra2.quantasVezesApareceu;
            }
        }); 
    });
    mostraQuatroPalavrasQueMaisSeRepetem();
}

const procuraPalavra = palavra => {
    let naoApareceu = true;
    
    palavras.forEach( (palavraLista, index) => {
        if( palavraLista.palavra === palavra ){
            palavras[index].quantasVezesApareceu++;
            naoApareceu = false;
        }
    });

    if( naoApareceu ){
        palavras.push({ palavra: palavra, quantasVezesApareceu: 1 });
    }
    ordenaPalavrasPrimeiroAsQueMaisSeRepetem();
    console.log(palavras);
}

function adicionaNovoItem() {
    procuraPalavra(entrada.value);
    let novoItem = document.createElement('div');
    novoItem.innerHTML = entrada.value;
    lista.appendChild(novoItem);
}

inicializaLista();

buttonAddNewItem.addEventListener('click', adicionaNovoItem );


function RecursosDeElementoAutomacao(seletor){
    this.seletor = seletor;
    this.elementos = Array.from( document.querySelectorAll(seletor) );
    this.ativoDesativo = function(){
        this.elementos.map( elemento => {
            elemento.classList.toggle('ativo');
        } );
    }
}
