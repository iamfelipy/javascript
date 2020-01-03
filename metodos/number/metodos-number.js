
//Number

/*
    listar métodos do objeto Number
    
    métodos Number
    
    Number.isNaN
    Number.isInteger
    Number.parseFloat
    Number.parseInt

    métodos herdados do Number

    toFixed
    toString
    TolocaleString

    API Math

    Math.abs()
    Math.ceil()
    Math.floor()
    Math.round()
    Math.max()
    Math.min()
    Math.random()

    --------------------------------------------------------------

    confiante:
    Number.isNaN
    Number.isInteger
    Number.parseFloat
    Number.parseInt
    toFixed
    toString
    TolocaleString

    

    
*/

// isNaN
console.log('--------------------------------')
console.log('isNaN');
console.log( Number.isNaN(NaN) );
console.log( Number.isNaN(99) );
console.log( Number.isNaN('99') );
console.log('--------------------------------')

// isInteger
console.log('--------------------------------')
console.log('isInteger');
console.log( Number.isInteger(0.5) );
console.log( Number.isInteger(5) );
console.log('--------------------------------')

// parseFloat
console.log('--------------------------------')
console.log('parseFloat');
console.log( parseFloat('0.5') );
console.log( Number.parseFloat('0.5') ); //recomendado
console.log('--------------------------------')

// parseInt
console.log('--------------------------------')
console.log('parseint');
console.log( parseInt('5') );
console.log( Number.parseInt('5') ); //recomendado
console.log('--------------------------------')

// métodos que são acessados pelo tipo primitivo, variavel que você declarou

// toFixed() mostra a quantidade de casas decimais que passar como argumento, arrendonda usando regras matematicas se precisar
console.log('--------------------------------')
console.log('toFixed');
let preco = 1299.326
console.log( preco );
console.log( preco.toFixed() );
console.log( preco.toFixed(2) );
console.log( preco.toFixed(3).replace('.', ',') );
console.log('--------------------------------')

// toString()
console.log('--------------------------------')
console.log('toString');
let preco1 = 1299.323;
console.log( preco1.toString() );
console.log('--------------------------------')

// toLocalesString() 
console.log('--------------------------------')
console.log('toLocalesString');
let preco2 = 1299.323;
console.log( preco2.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', currencyDisplay: 'name' }) );
console.log('--------------------------------')

// API Math

// Math.abs() valor absoluto
console.log('--------------------------------')
console.log('Math.abs()');
console.log( Math.abs(-1) );
console.log('--------------------------------')

// Math.ceil() arredonda para o teto
console.log('--------------------------------')
console.log('Math.ceil()');
console.log( Math.ceil(4.01) );
console.log('--------------------------------')

// Math.floor() arredonda para o chao
console.log('--------------------------------')
console.log('Math.floor()');
console.log( Math.floor(4.3) );
console.log('--------------------------------')

// Math.round() arredonda utiliando a regra matemática e deixa como inteiro
console.log('--------------------------------')
console.log('Math.round()');
console.log( Math.round(4.6) );
console.log( Math.round(4.3) );
console.log('--------------------------------')

// Math.max() retorna o maior 
console.log('--------------------------------')
console.log('Math.max()');
let teste = [5,2,3,32,111,2,0.5,12.22];
console.log( Math.max(...teste) );
console.log('--------------------------------')

// Math.min() retorna o menor
console.log('--------------------------------')
console.log('Math.min()');
console.log( Math.min(5,2,3,32,111,2,0.5,1222.22) );
console.log('--------------------------------')

// Math.random() numero aleatorio
console.log('--------------------------------')
let max = 100;
let min = 30
console.log('Math.random()');
console.log( (Math.random() * 100).toFixed(0) );
console.log( Math.floor(Math.random() * ( max + 1 )));
console.log( Math.floor((Math.random() * ( max - min + 1 ) + min)) );
console.log('--------------------------------')

//exercicios

// Retorne um número aleatório
// entre 1050 e 2000

console.log( Math.floor( Math.random() * (2000 - 1050 + 1) + 1050  ) );

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');
numeros = numeros.map( elemento => parseInt(elemento) );
numeros = numeros.reduce( (accumulator, currentValue) => {
    if( accumulator < currentValue ){
        return currentValue
    }else{
        return accumulator
    }
});
console.log( numeros );

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 5100123139,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaArredondaRetornaSomaTotal(){
    let numbersLimpos = listaPrecos.map( elemento => Number( elemento.toUpperCase().replace('R$', '').trim().replace(',', '.') ) );
    numbersLimpos = numbersLimpos.reduce( (accumulator,b) => accumulator + b );
    console.log( numbersLimpos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) );
}

limpaArredondaRetornaSomaTotal();


