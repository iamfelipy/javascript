
//String

/*
  métodos do tipo object

    métodos do tipo object não herdados:
    
    new Object() 
    
    Object.create() 
    cria objeto

    Object.assign() 
    adiciona propriedade a um objeto apartir de outro

    Object.defineProperties()
    defini varias propriedades writeable, configurable, enumerable
    posso modificar o get e o set default 

    Object.defineProperty()
    defini uma propriedade

    Object.getOwnPropertyDescriptors();
    mostra as propriedades writeable, configurable e enumerable do objeto, não mostra as do prototipo
    //Object.getOwnPropertyDescriptor(window, 'innerHeight')

    Object.keys();
    retorna as chaves do objeto em formato de array, apebas as enumerables com true

    Object.values();
    retorna os valroes do objeto em formato de array

    Object.entries();
    retorna um array com dois subarrays com chaves e valor do objeto
    
    Object.getOwnPropertyNames();
    retorna as chaves do objeto em formato de array, até mesmo com enumerable false

    Object.getPrototypeOf()
    retorna o prototype do objeto

    Object.is();
    O método Object.is() determina se dois valores correspondem ao mesmo valor.

    Object.freeze();
    retorna o objeto bloqueado, só é possivel consultar
    Object.seal();
    retorna o objeto bloqueado, só é possivel consultar e alterar
    Object.preventExtensions();
    O método Object.preventExtensions() impede que novas propriedades sejam adicionadas a um objeto.
    pode-se alterar, consultar e deletar
    

    Object.isFrozen();
    Object.isSealed();
    Object.isExtensible();

    métodos e propriedades do tipo object herdados:

    {}.hasOwnProperty()
    verifica se a propriedade existe apenas, não consulta a cadeia de prototipos
    {}.propertyIsEnumerable()
    verifica se o enumerable is true
    {}.isPrototypeOf();
    verifica se o prototipo da origem é igual ao passado para a função isPrototypeOf()
    {}.toString()

https://stackoverflow.com/questions/28600238/trying-to-understand-the-difference-between-prototype-and-constructor-in-javascr



*/

// new Object({})
console.log('--------------------------------');
console.log('new Object()');
let felipy = new Object({nome: 'Felipy', idade: 20});
console.log( felipy );
console.log('--------------------------------');

// Object.create({})
console.log('--------------------------------');
console.log('Object.create({})');
// let teste = new Object({nome: 'Felipy', idade: 20});
let teste = new Object({nome: 'Felipy', idade: 20});
let teste1 = Object.create(teste);
console.log( teste1.nome );
console.log( teste1.idade );
console.log('--------------------------------');

// Object.assign({},{})
console.log('--------------------------------');
console.log('Object.assign(target, source)');

const funcaoAutomovel = {
  acelerar(){
    return 'acelerou';
  },
  buzinar(){
    return 'buzinou';
  }
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

console.log( moto );
console.log( carro );

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

console.log('adicionado propriedades e métodos ao objeto alvo...');

console.log( moto );
console.log( carro );

console.log('--------------------------------');


// Object.defineProperties({}, define properties)
console.log('--------------------------------');
console.log('Object.defineProperties()');
const moto1 = {};

console.log( moto1 );

Object.defineProperties(moto1,{
  rodas: {
    value: 4,
    configurable: false,
    writable: false,
    enumerabel: false,
  },
  capacete: {
    value: 4,
    configurable: false,
    writable: false,
    enumerabel: false,
  },
});

console.log('--------------------------------');

// Object.getOwnPropertyDescriptors({})
console.log('--------------------------------');
console.log('Object.getOwnPropertyDescriptors()');
const moto2 = {};

console.log( moto2 );

Object.defineProperties(moto2,{
  rodas: {
    value: 4,
    configurable: false,
    writable: false,
    enumerabel: false,
  },
  capacete: {
    value: 4,
    configurable: false,
    writable: false,
    enumerabel: false,
  },
});

console.log(Object.getOwnPropertyDescriptors(moto2));

console.log('--------------------------------');

// Object.keys({})
console.log('--------------------------------');
console.log('Object.keys({})');
let teste2 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.keys(teste2) );
console.log('--------------------------------');

// Object.values({})
console.log('--------------------------------');
console.log('Object.values({})');
let teste3 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.values(teste3) );
console.log('--------------------------------');

// Object.entries({})
console.log('--------------------------------');
console.log('Object.entries({})');
let teste4 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.entries(teste4) );
console.log('--------------------------------');

// Object.getOwnPropertyNames({})
//mostra as propriedades enumerable false já object.keys não
console.log('--------------------------------');
console.log('Object.getOwnPropertyNames({})');
let teste5 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.getOwnPropertyNames(teste5) );
console.log('--------------------------------');

//Object.getPrototypeOf({})
console.log('--------------------------------');
console.log('Object.getPrototypeOf({})');
let teste6 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.getPrototypeOf(teste6) );
console.log('--------------------------------');

//Object.is({})
console.log('--------------------------------');
console.log('Object.is({})');
let teste7 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.is(teste6, teste7) );
console.log('--------------------------------');


//Object.freeze({})
console.log('--------------------------------');
console.log('Object.freeze({})');
let teste8 = new Object({nome: 'Felipy', idade: 20});
console.log( Object.freeze(teste8) );
console.log('--------------------------------');


//exercicios:

console.clear();

// Crie uma função que verifique
// corretamente o tipo de dado
function verificaTipoDeDado(dado){
  return Object.prototype.toString.call(dado);
}
console.log(verificaTipoDeDado({}));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

let quadrado = {};
Object.defineProperties(quadrado,{
  lados: {
    value: 4,
    configurable: false,
    writable: false,
    enumerable: true,
  }
});
quadrado.lados = 2;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
configuracao.width = 500;
console.log(configuracao.width);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log( Object.getOwnPropertyDescriptors(Array.prototype) );
console.log( Object.getOwnPropertyDescriptors(String.prototype) );
console.log( Object.keys(Array.prototype) );
console.log( Object.keys(String.prototype) );
