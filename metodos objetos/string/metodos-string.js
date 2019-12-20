
//String

/*
    listar métodos do objeto String
    
    confiante:
    length
    indexOf()
    lastIndexOf()
    includes()
    split()
    join()
    slice()
    substr
    toLowerCase()
    toUpperCase()
    startWith()
    endsWith()
    charAt()
    padStart()
    padEnd()
    trimStart();
    trimEnd();
    trim();

    mais o menos confiante:
    replace()
    concat()
    
    não confiante:

*/

// Prioridade

// length
console.log('--------------------------------');
console.log('length');
console.log( 'teste'.length );
console.log('--------------------------------');

// indexOf(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('indexOf');
console.log( 'Meu nome é felipy'.indexOf('felipy') );
console.log('--------------------------------');

// lastIndexOf(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('lastIndexOf');
console.log( 'Meu nome é felipy'.lastIndexOf('e') );
console.log('--------------------------------');

// replace(regExp/substr, newString/function), não modifica string
console.log('--------------------------------');
console.log('replace');
console.log( '1,230,123'.replace(',', '.') );
console.log('--------------------------------');

// slice(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('slice');
console.log( 'Laranja'.slice(3) ); 
console.log( 'Laranja'.slice(0,3) ); 
console.log( 'Laranja'.slice(-2) ); 
console.log( 'Laranja'.slice(-1, -3) );
console.log('--------------------------------');

// split() case sensitive, não modifica string
//quebra string explode
console.log('--------------------------------');
console.log('splite');
console.log( 'teste, teste1, teste2, teste3'.split(', ') );
console.log('--------------------------------');

// join() case sensitive, não modifica string
//junta string implode
console.log('--------------------------------');
console.log('join');
console.log( ['Meu','nome','é','Felipy'].join(' ') );
console.log('--------------------------------');

// toLowerCase() case sensitive, não modifica string
console.log('--------------------------------');
console.log('toLowerCase');
console.log( 'brasil'.toLowerCase() );
console.log('--------------------------------');

// toUpperCase() case sensitive, não modifica string
console.log('--------------------------------');
console.log('toUpperCase');
console.log( 'CAIXA ALTA'.toUpperCase() );
console.log('--------------------------------');

//-----

// charAt, case sensitive, não modifica string
console.log('--------------------------------');
console.log('charAt');
console.log( 'teste'.charAt('s') );
console.log('--------------------------------');

// concat(str2, str3, ...), não modifica string
console.log('--------------------------------');
console.log('concat');
console.log( 'Junta ai, '.concat('guarda','-chuva') );
console.log('--------------------------------');

// includes(search, position) case sensitive, não modifica string
console.log('--------------------------------');
console.log('includes');
console.log( 'Banana, Laranja, Uva, Maça'.includes('Maça') );
console.log('--------------------------------');

// endsWith(search, position) case sensitive, não modifica string
console.log('--------------------------------');
console.log('endsWith');
console.log( 'Laranja'.endsWith('ja') );
console.log('--------------------------------');

// startWith(search, position) case sensitive, não modifica string
console.log('--------------------------------');
console.log('startsWith');
console.log( 'Laranja'.startsWith('Lar') );
console.log('--------------------------------');

// substring(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('substring');
console.log( 'Laranja'.substring(3) );
console.log('--------------------------------');

// padStart(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('padStart');
console.log( 'Meu nome é felipy'.padStart(10, '-') );
console.log('--------------------------------');

// padEnd(start, end) case sensitive, não modifica string
console.log('--------------------------------');
console.log('padEnd');
console.log( 'Meu nome é felipy'.padEnd(5, '-') );
console.log('--------------------------------');

// repeat(string), não modifica string
console.log('--------------------------------');
console.log('repeat');
console.log( 'teste'.repeat(5) );
console.log('--------------------------------');

// trim() case sensitive, não modifica string
console.log('--------------------------------');
console.log('trim');
console.log( '      CAIXA ALTA          '.trim('') );
console.log('--------------------------------');

// trimStart() case sensitive, não modifica string
console.log('--------------------------------');
console.log('trimStart');
console.log( '       CAIXA ALTA'.trimStart() );
console.log('--------------------------------');

// trimEnd() case sensitive, não modifica string
console.log('--------------------------------');
console.log('trimEnd');
console.log( 'CAIXA ALTA          '.trimEnd() );
console.log('--------------------------------');
  
//exercicios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: '  R$ 1233129.23',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  
let totalTaxa = 0;
let totalRecebimento = 0;

  transacoes.map( transacao => {
    if( transacao.descricao.toUpperCase().includes('TAXA') ){
        totalTaxa = totalTaxa + +transacao.valor.trim().slice(2);
    }else if( transacao.descricao.toUpperCase().includes('RECEBIMENTO') ){
        totalRecebimento = totalRecebimento + +transacao.valor.trim().slice(2);
    }
  });

  console.log(totalTaxa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  console.log(totalRecebimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  
  console.log(transportes.split(';'));
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  console.log(html.split('span').join('a'));
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase[frase.length-1]);
  
  // Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalPalavrasTaxas = 0;

transacoes1.map( item => {
    if( item.toUpperCase().includes('TAXA') ){
        totalPalavrasTaxas++;
    }
});

console.log(totalPalavrasTaxas)
