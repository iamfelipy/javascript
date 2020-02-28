const regexpTELEFONE = /([+]?\d{2})?\s?([(]?\d{2}[)]?)?\s?\d?\d{4}[ -]?\d{4}/;
// /([+]?\d{2})? \s? ([(]?\d{2}[)]?)? \s? \d? \d{4} [ -]? \d{4}/;
// /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
];

for(telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}

/*
    Anotações
    O que é regex:
    Uma linguagem de busca de padrões
    Para que serve?:
    Serve para buscar e substituir

    flag: diz como regex vai ser interpretada
    g, i, m

    class: filtra os caracters
    class negação

    referência:
    . qualquer caracter menos quebra de linha
    \w [A-Za-z0-9_] \w 
    \d [0-9] \D 
    \s selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas. 
    \S

    quantificadores:
    *
    ?
    +
    {}

    caracters especiais:
    +*?^$\.[]{}()|/

    escape:
    \

    revisar:
    dentro de uma class os caracters especiais não precisam de escape

    O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

    ^ inicio da linha fora da class

    $ no final da linha

    \t seleciona tabs


*/ 


//exemplos:

// 'JavaScript'.replace(/J/, 'B')
// // BavaScript
// 'JavaScript'.replace(/Java/, 'Type')
// // TypeScript
// 'JavaScript'.replace(/a/g, 'i')
// // JiviScript
// 'Perdeu perdido'.replace(/Pe/gi, 'Ba')
// // Bardeu Bardido
// 'JavaScript'.replace(/[ai]/gi, 'u');
// // JuvuScrupt
// '111.222-333-44'.replace(/[-.]/g, '');
// // 11122233344
// 'Brasil é com z: Brazil'.replace(/Bra[sz]il/g, 'Prazer');
// // Prazer é com z: Prazer
// 'JavaScript é a linguagem.'.replace(/[a-z]/g, '0');
// // J000S00000 é 0 000000000.
// 'JavaScript é a linguagem.'.replace(/[a-zA-Z]/g, '1');
// // 1111111111 é 1 111111111.
// '123.333.333-33'.replace(/[0-9]/g, 'X');
// // XXX.XXX.XXX-XX
// 'Brasil é com z: Brazil'.replace(/[^a-z]/g, ' ');
// // rasil   com z   razil 
// 'JavaScript é a linguagem.'.replace(/./g, '0');
// // 0000000000000000000000000
// '999.222.222.11'.replace(/\./g, '-');
// // 999-222-222-11
// 'Guarda-chuva R$ 23,00.'.replace(/\w/g, '-');
// // ------------ -$ --,--.
// 'Guarda-chuva R$ 23,00.'.replace(/\W/g, '-');
// // Guarda-chuva-R--23-00-
// '+55 (21) 2222-2222'.replace(/\d/g, 'X');
// // +XX (XX) XXXX-XXXX.
// '+55 (21) 2222-2222'.replace(/\D/g, '');
// // 552122222222
// '+55 (21) 2222-  2222  '.replace(/\s/g, '');
// // +55(21)2222-2222
// '+55 (21) 2222-  2222  '.replace(/\S/g, 'X');
// // XXX XXXX XXXXX  XXXX
// 'Vaaaai ali por favor.'.replace(/aaaa/g, 'a');
// // Vai ali por favor.  
// 'Vaaaai ali por favor.'.replace(/a{4}/g, 'a');
// // Vai ali por favor.  
// '222.333.222.42'.replace(/\d{2,3}/g, 'X');
// // X.X.X.X
// 'A melhor linguagem é JavaScript'.replace(/\w{1,}/g, 'X');
// // X X X é X
// '222.333.222.42'.replace(/\d+/g, 'X');
// // X.X.X.X
// 'Dígitos, dados, desenhos, Dito, d'.replace(/d\w+/g, 'X');
// // Dígitos, X, X, Dito, d
// 'Dígitos, dados, desenhos, Dito, d'.replace(/d\w*/g, 'X');
// // Dígitos, X, X, Dito, X
// 'Qual é o certo, regexp ou regex?'.replace(/regexp?/g, 'Regular Expression');
// // Qual é o certo, Regular Expression ou Regular Expression?
// 'PHP e Java são linguagens diferentes'.replace(/java|php/gi, 'X');
// // X e X são linguagens diferente
// 'Java não é JavaScript.'.replace(/java/gi, 'X');
// // X não é XScript.
// 'Java não é JavaScript.'.replace(/\b\d+\b/gi, 'X');
// // X não é JavaScript.
// 'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(/\b\d+\b/gi, 'X');
// // O Restaurante25 na Rua X, custa R$ X,X
// '11_22 33-44 55é66 77e88'.replace(/\b\d+\b/gi, 'X');
// // 11_22 X-X XéX 77e88
// `andre@origamid.com
// contato@origamid.com`.replace(/^\w+/g, 'X');
// // X@origamid.com
// // contato@origamid.com
// `andre@origamid.com
// contato@origamid.com`.replace(/\w+$/g, 'X');
// // andre@origamid.com
// // contato@origamid.X
// `andre@origamid.com
// contato@origamid.com`.replace(/\w+$/gm, 'X');
// // andre@origamid.X
// // contato@origamid.X
// `andre@origamid.com
// contato@origamid.com`.replace(/^\w+/gm, 'X');
// // X@origamid.com
// // X@origamid.com
// `andre@origamid.com\ncontato@origamid.com`.replace(/\n/g, '---');
// // andre@origamid.com---contato@origamid.com
// `andre@origamid.com
// contato@origamid.com`.replace(/\n/g, 'X');
// // andre@origamid.com---contato@origamid.com
// 'andre@origamid.com ©'.replace(/\u0040|\u00A9/g, '---');
// // andre---origamid.com ---


// Números inteiros (postivos ou negativos):
// ^-?\d+$
//Números inteiros positivos:
// ^\d+$
// Números inteiros negativos:
// ^-\d+$
// Números (postivos ou negativos):
// ^-?\d*[.,]?\d*$
// Números positivos:
// ^\d+[.,]?\d+$

/*
    regex úteis:
    https://www.mundojs.com.br/2018/07/05/expressoes-regulares-para-o-dia-a-dia/#page-content
*/





/*
    ANOTAÇÕES

    Expressões regulares uma abordargem divertida
    
    Capítulo 1 • Introdução [x]
    Capítulo 2 • Os metacaracteres
    Capítulo 3 • Mais sobre metacaracteres 
    Capítulo 4 • Os 6 mandamentos do Criador
    Capítulo 5 • Como lidar com
    Capítulo 6 • Editores de texto e planilhas 
    Capítulo 7 • Aplicativos
    Capítulo 8 • Linguagens de programação
    Capítulo 9 • Bancos de dados 
    Capítulo 10 • Bibliotecas e programas relacionados
    Apêndice B • Tabelas

    ---

    Capítulo 1 • Introdução
    regex = padrões de busca e substituição de padrões
    As expressões são formadas por símbolos e caracteres literais
    simbolos = metacaracters
    metacaracters = cada metacaracter tem uma função especial para engine
    match('casar') = quando a engine regex encontra algo
    pattern('padrão') = o que estou procurando
    posso buscar ou validar com regex
    O que é?
    linguagem para criar padrões de busca
    regex é conjunto de simbolos e caracters literais
    Os simbolos são metacaracters que tem funções especiais para a engine regex implementada
    para que serve?
    procurar data, ip, ...

    Capítulo 2 • Os metacaracteres pag 25
    . ? * + ^ $ | [ ] { } ( ) \ 
    pag 26 tem uma tabela com o nome de cada um
    representantes = representa um ou mais caracters
    quantificadores
    âncoras
    parie pag 29


    



*/

