

//Arrays

/*
    listar métodos de Array
    
    //Métodos do Array Object

    métodos nativos do objeto:
    
    Array.from() //transforma array-life em array para poder usar métodos
    Array.isArray() //verifica se é um array

    Array.of(5) // [5] 
    new Array(5) // [empty * 5]
    Array(5) // [empty * 5]

    Métodos do prototype:
        
        métodos modificadores:

        [].sort() 
        [].unshift()
        [].shift()
        [].push()
        [].pop()
        [].reverse()
        [].splice() 
        [].copyWithin()
        [].fill()

        métodos que não modificam o array original, apenas retornam um novo.
    
        [].concat()
        [].includes()
        [].indexOf()
        [].lastIndexOf()
        [].join()
        [].slice()
        [].find()
        [].findIndex()
    
    
    
    
    
*/

// Array.from
    // transformar array-link em array para poder acessar os metódos do Array.prototype
    console.log('--------------------------------')
    console.log('Array.from()');
    const head = document.head.children
    const obj = {
        0: 'usuario1',
        1: 'usuario1',
        2: 'usuario1',
        3: 'usuario1',
        length: 4,
    };
    console.log( Array.from(head) );
    console.log( Array.from(obj) );
    console.log('--------------------------------')

    // Array.isArray()
    console.log('--------------------------------')
    console.log('Array.isArray()');
    console.log( Array.isArray(['teste',1920]) );
    console.log( Array.isArray('string') );
    console.log('--------------------------------')


//Algumas formas de criar Arrays

    // Array.of()
    console.log('--------------------------------')
    console.log('Array.of()');
    console.log( Array.of(5) ); // [5]
    console.log('--------------------------------')

    // new Array
    console.log('--------------------------------')
    console.log('new Array');
    console.log( new Array(5) ); // [ , , , , ]
    console.log( new Array('teste', 1, () => {}, 'teste2') );
    console.log('--------------------------------')

    // Array
    console.log('--------------------------------')
    console.log('Array()');
    console.log( Array('teste1','teste2','teste3') );
    console.log( Array(5) ); //[ , , , , ]
    console.log('--------------------------------')

    // 
    console.log('--------------------------------')
    console.log('let nomes = []');
    console.log( ['felipy', 'cesar', 'tonho'] );
    console.log('--------------------------------')

//Métodos modificadores ('modifica o array original')

    // sort()
    // se não passar função de callback ira ordenar com base na tabela unicode
    // sort suporta ordenação de um array numerico se for enviado a função de callback função de comparação
    console.log('--------------------------------')
    console.log('sort()');
    console.log( [343,44,11,33,123,2].sort( function (a,b) { return a-b;} ) ); 
    console.log( ['teste10','teste2','teste4','teste3','teste1'].sort() );
    console.log( ['e','d','a','b','c'].sort() );
    console.log('--------------------------------')

    // push() // return length
    // adicionar elemento ao final do array
    console.log('--------------------------------')
    console.log('push()');
    console.log( ['teste', 2, 343].push( 'teste1' ) ); 
    console.log('--------------------------------')

    // pop() // return elemento removido
    // remove o ultimo elemento do array
    console.log('--------------------------------')
    console.log('pop()');
    console.log( ['teste', 2, 890].pop() ); 
    console.log('--------------------------------')
    
    // unshift() // return length
    // adicionar elemento a primeira posição do array
    console.log('--------------------------------')
    console.log('unshift()');
    console.log( ['teste', 2, 343].unshift( { teste: 'oi' } ) ); 
    console.log('--------------------------------')

    // shift() // return elemento removido
    // remove o primeiro elemento do array
    console.log('--------------------------------')
    console.log('shift()');
    console.log( ['teste', 2, '456'].shift() ); 
    console.log('--------------------------------')

    // reverse() // return elemento invertido
    console.log('--------------------------------')
    console.log('reverse()');
    console.log( [55, 22, 11].reverse() ); 
    console.log('--------------------------------')

    // splice() 
    console.log('--------------------------------')
    console.log('splice()');
    let teste3 = ['teste1', 'teste2', 'teste3'];
    teste3.splice(0, 0, 'teste');
    console.log( teste3 ); 
    teste3.splice(1, 1, 'teste32');
    console.log( teste3 ); 
    teste3.splice(teste3.length-1, 1, 'teste44');
    console.log( teste3 ); 
    console.log('--------------------------------')

    // copyWithin() 
    console.log('--------------------------------')
    console.log('copyWithin()');
    let teste4 = ['banana','maça', 'chuchu', 'abacate', 'melão' ];
    console.log( teste4);
    console.log( teste4.copyWithin(2,0,2));
    console.log( teste4);
    console.log('--------------------------------')

    // fill
    console.log('--------------------------------')
    console.log('fill()');
    let teste5 = ['banana','maça', 'chuchu', 'abacate', 'melão' ];
    console.log( teste5);
    console.log( teste5.fill('morango',2));
    console.log( teste5);
    console.log('--------------------------------')

//Métodos que não modificam o array original, apenas retornam um novo.
    
    // concat()
    console.log('--------------------------------')
    console.log('concat()');
    console.log( ['diana','djonathan'].concat(['maria', 'jackson']) );
    console.log('--------------------------------')

    // includes()
    const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
    console.log('--------------------------------')
    console.log('includes()');
    console.log( linguagens.includes('css') );
    console.log('--------------------------------')

    // indexOf()
    console.log('--------------------------------')
    console.log('indexOf()');
    console.log( linguagens.indexOf('js') );
    console.log('--------------------------------')

    // lastIndexOf()
    console.log('--------------------------------')
    console.log('lastIndexOf()');
    console.log( linguagens.lastIndexOf('js') );
    console.log('--------------------------------')

    // join()
    console.log('--------------------------------')
    console.log('join()');
    let teste6 = ['<?','></','>']
    console.log( teste6.join('php') );
    console.log('--------------------------------')

    // slice()
    console.log('--------------------------------')
    let teste7 = ['cavalo', 'porco', 'leao', 'zebra', 'jacare', 'galinha'];
    console.log( teste7.slice(1,2) );
    console.log('--------------------------------')


//exercicios



const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
console.log(comidas.shift());
// Remova o último valor de comidas e coloque em uma variável
console.log(comidas.pop());
// Adicione 'Arroz' ao final da array
console.log(comidas.push('Arroz'));
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.sort().reverse());
// Verifique se Joana faz parte dos estudantes
console.log( 'Joana faz parte dos estudantes: ', estudantes.includes('Joana')?'sim':'não' );
// Verifique se Juliana faz parte dos estudantes
console.log( 'Juliana faz parte dos estudantes: ', estudantes.includes('Juliana')?'sim':'não' );

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log( html.split('section').join('ul').split('div').join('li') );

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
let carrosOriginais = [...carros];
let carrosAtualizados = [...carros];
console.log( carrosOriginais );
carrosAtualizados.pop()
console.log( carrosAtualizados );

console.log(carros.slice());
console.log([...carros]);










  

