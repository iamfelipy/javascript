
//String

/*
  métodos do tipo object

    métodos do tipo object não herdados:
    
    new Object() 
    Object.create() 
    Object.assign() 
    Object.defineProperties()
    Object.defineProperty()
    Object.getOwnPropertyDescriptors();

    Object.keys();
    Object.values();
    Object.entries();
    
    Object.getOwnPropertyNames();
    Object.getPrototypeOf()
    Object.is();

    Object.freeze();
    Object.seal();
    Object.preventExtensions();

    Object.isFrozen();
    Object.isSealed();
    Object.isExtensible();

    métodos do tipo object herdados:



*/

// new Object({})
console.log('--------------------------------');
console.log('new Object()');
let felipy = new Object({nome: 'Felipy', idade: 20});
console.log( felipy );
console.log('--------------------------------');

// Object.create({}, define properties)
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
console.log('Object.assign({}, {})');

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
console.log('Object.defineProperties({})');
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