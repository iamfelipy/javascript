

//Arrays

/*
    métodos para iterar sobre Array
    
    [].forEach( callback(itemAtual, index, array) => {}) ) return undefined
    [].map( callback(itemAtual, index, array) => { }) )  return new array
    [].reduce( callback(acumulador, valorAtual, index, array) => { }), valorInicial ) return accumulator
    [].reduceRight( callback(acumulador, valorAtual, index, array) => { }), valorInicial ) return accumulator
    [].some( callback(valorAtual) => { condicao } ) ) return boolean 
    [].every( callback(valorAtual) => { condicao } ) ) return boolean
    [].find( callback(valorAtual) => { condicao } ) retorna valor
    [].findIndex( callback(valorAtual) => { condicao } ) retorna index

    
    
    
    
    
    
*/

// [].forEach()
console.log('--------------------------------')
console.log('[].forEach()');
let teste = [1,2,1];
console.log('valor original:'); 
console.log(teste);
console.log('retorno forEach:'); 
console.log(teste.forEach( item => { if( item == 1 ){ return 2 } } ) );
console.log('valor atual:'); 
console.log(teste);
console.log('--------------------------------')

// [].map()
console.log('--------------------------------')
console.log('[].map()');
let teste1 = [
    {
        aula: 'aula1',
        min: 12,
    },
    {
        aula: 'aula1',
        min: 9,
    },
    {
        aula: 'aula1',
        min: 10,
    },
];
console.log('valor original:'); 
console.log(teste1);
console.log('retorno map:'); 
console.log(teste1.map(item => item.min));
console.log('valor atual:'); 
console.log(teste1);
console.log('--------------------------------')

// [].reduce()
console.log('--------------------------------')
console.log('[].reduce()');
console.log('somar todos os valores, verificar qual o maior ou menor, ');
let teste2 = [
    {
        aula: 'aula1',
        min: 12,
    },
    {
        aula: 'aula2',
        min: 9,
    },
    {
        aula: 'aula3',
        min: 10,
    },
];
console.log('retorno reduce:'); 
console.log(teste2.map(item => item.min).reduce( (accumulador, itemAtual) => accumulador + itemAtual ,0));
let executa = (accumulador, itemAtual, index) => { 
    accumulador[index] = itemAtual.aula; 
    return accumulador;     
};
console.log(teste2.reduce( executa, {}) );

console.log('--------------------------------');


//-----------------------------------
//[].reduceRight() altera o acumulador da direita para a esquerda
//-----------------------------------

// [].some() se algum valor for true para interação e retornar true
console.log('--------------------------------');
console.log('[].some()');
let teste3 = [1,2,6,1];
console.log('retorno some:'); 
console.log(teste3.some( item => item > 5 ) );
console.log('--------------------------------');

// [].every() se algum valor for false para interação ele retornar false
console.log('--------------------------------');
console.log('[].every()');
let dds = [47,47,48,47];
console.log('retorno every:'); 
console.log(dds.every( dd => dd === 47 ) );
console.log('--------------------------------');

// [].find() se algum valor for true para interação ele retorna o primeiro valor
console.log('--------------------------------');
console.log('[].find()');
let teste4 = [3,1,5,2];
console.log('retorno find:'); 
console.log(teste4.find( valor => valor === 5 ) );
console.log('--------------------------------');

// [].findIndex() se algum valor for true para interação ele retorna index do primeiro valor
console.log('--------------------------------');
console.log('[].findIndex()');
let teste5 = [3,1,5,2,1];
console.log('retorno findIndex:'); 
console.log(teste5.findIndex( valor => valor === 1 ) );
console.log('--------------------------------');

// [].filter() se algum valor for true, adiciona ao novo array e retorna o array com todos os valores que retornaram true
console.log('--------------------------------');
console.log('[].filter()');
let teste6 = ['Banana', 'Uva', '', 'Maça', undefined, 'Melão'];
console.log('retorno filter:'); 
console.log(teste6.filter( elemento => elemento ) );
console.log(teste6.filter( elemento => {if( elemento ){if( elemento.length > 4 ){ return true }}} ));
console.log('--------------------------------');




//exercises

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
let arrayCominformacoesOrganizadasCursos = Array.from(cursos);
arrayCominformacoesOrganizadasCursos = arrayCominformacoesOrganizadasCursos.map( (item) => {
    let filhos = item.children;
    let curso = {
        curso: filhos[0].innerText,
        descricao: filhos[1].innerText,
        aulas: filhos[2].innerText,
        horas: filhos[3].innerText,
    };
    return curso;
});
console.log(arrayCominformacoesOrganizadasCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
console.log( numeros.filter( item => item > 100 ) );


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some( (item) => item === 'Baixo' ));


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 1.002.225,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 1.032,60'
  }
]

let totalCompras = compras.reduce( (accumulator, valorAtual) => {
    let valor = valorAtual.preco.trim().slice(2);
    let valorFormatado;
    do{
        valor = valor.replace('.', '');
    }while( valor.indexOf('.') != -1 );
    valor = valor.replace(',', '.');
    valorFormatado = +valor;
    
    return accumulator + valorFormatado;
}, 0);


console.log(totalCompras.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));

















