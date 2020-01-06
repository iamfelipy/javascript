
const tabela = document.querySelector('.tabela-produtos');
const tbody = document.querySelector('.tabela-produtos tbody');
const ordenarCrescente = document.querySelector('.tabela-produtos thead .reordenar-crescente'); 
const ordenardeDrescente = document.querySelector('.tabela-produtos thead .reordenar-decrescente'); 

function reordenarArrayCrescenteDescrecente(array, ordenacao = 0, index = 0, indexVerificar = 0){
    if( ordenacao === 0 ){
        if( indexVerificar < array.length ){
            if( index == array.length ){
                reordenarArrayCrescenteDescrecente(array, 0, 0, indexVerificar+1);
            }else{
                console.log(array[indexVerificar].quantidade);
                console.log(array[index].quantidade);
                if( array[indexVerificar].quantidade < array[index].quantidade ){
                    let backupValor = {...array[index]};
                    array[index] = {...array[indexVerificar]};
                    array[indexVerificar] = {...backupValor};
                }
                reordenarArrayCrescenteDescrecente(array, 0, index+1, indexVerificar);
            }
        }
    }else{
        if( indexVerificar < array.length ){
            if( index >= array.length ){
                reordenarArrayCrescenteDescrecente(array, 1, 0, indexVerificar+1);
            }else{
                if( array[indexVerificar].quantidade > array[index].quantidade ){
                    let backupValor = {...array[index]};
                    array[index] = {...array[indexVerificar]};
                    array[indexVerificar] = {...backupValor};
                }
                reordenarArrayCrescenteDescrecente(array, 1, index+1, indexVerificar);
            }
        }
    }
    return array;
}

let dadosTabela = [
    { 
        nomeProduto: 'Batata',
        quantidade: 200,
        preco: 1205.22,
    },
    { 
        nomeProduto: 'Tomate',
        quantidade: 2,
        preco: 1.22,
    },
    { 
        nomeProduto: 'Cenoura',
        quantidade: 100,
        preco: 33.22,
    },
    { 
        nomeProduto: 'Repolho',
        quantidade: 300,
        preco: 312.22,
    },
    { 
        nomeProduto: 'Salsinha',
        quantidade: 1,
        preco: 0.55,
    },
];




ordenarCrescente.addEventListener( 'click', () => {
    ordenarCrescente.style.backgroundImage = 'url(./assets/imagens/icon-ordenar-crescente.png)';
    ordenardeDrescente.style.backgroundImage = 'url(./assets/imagens/icon-sem-ordenar-decrescente.png)';
    reordenarArrayCrescenteDescrecente(dadosTabela, 0);
    tbody.innerHTML = '';
    dadosTabela.map( dado => {
        let tr = document.createElement('tr');
        tr.classList.add('linha-dado');
        tr.innerHTML = `<td>${dado.nomeProduto}</td><td>${dado.quantidade}</td><td>${dado.preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</td>`;
        tbody.appendChild(tr);
    });
});

ordenardeDrescente.addEventListener( 'click', () => {
    ordenardeDrescente.style.backgroundImage = 'url(./assets/imagens/icon-ordenar-decrescente.png)';
    ordenarCrescente.style.backgroundImage = 'url(./assets/imagens/icon-sem-ordenar-crescente.png)';
    reordenarArrayCrescenteDescrecente(dadosTabela, 1);
    tbody.innerHTML = '';
    dadosTabela.map( dado => {
        let tr = document.createElement('tr');
        tr.classList.add('linha-dado');
        tr.innerHTML = `<td>${dado.nomeProduto}</td><td>${dado.quantidade}</td><td>${dado.preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</td>`;
        tbody.appendChild(tr);
    });
});

dadosTabela.map( dado => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${dado.nomeProduto}</td><td>${dado.quantidade}</td><td>${dado.preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</td>`;
    tbody.appendChild(tr);
});

console.log(ordenarCrescente);
console.log(tbody);