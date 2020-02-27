
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

'JavaScript'.replace(/a/, 'B')
'JavaScript'.replace(/Java/, 'Type')
'JavaScript'.replace(/a/g, 'i')
'Perdeu perdido'.replace(/Pe/gi, 'Ba')
'JavaScript'.replace(/a/g, 'i')
'JavaScript'.replace(/[ai]/gi, 'u');
'111.222-333-44'.replace(/[-.]/g, '');
'Brasil é com z: Brazil'.replace(/Bra[sz]il/g, 'Prazer');
'JavaScript é a linguagem.'.replace(/[a-z]/g, '0');
'JavaScript é a linguagem.'.replace(/[a-zA-Z]/g, '1');
'123.333.333-33'.replace(/[0-9]/g, 'X');
'Brasil é com z: Brazil'.replace(/[^a-z]/g, ' ');
'JavaScript é a linguagem.'.replace(/./g, '0');
'999.222.222.11'.replace(/\./g, '-');
'Guarda-chuva R$ 23,00.'.replace(/\w/g, '-');
'Guarda-chuva R$ 23,00.'.replace(/\W/g, '-');
'+55 (21) 2222-2222'.replace(/\d/g, 'X');
'+55 (21) 2222-2222'.replace(/\D/g, '');
'+55 (21) 2222-  2222  '.replace(/\s/g, '');
'+55 (21) 2222-  2222  '.replace(/\S/g, '');
'Vaaaai ali por favor.'.replace(/aaaa/g, 'a');
'Vaaaai ali por favor.'.replace(/a{4}/g, 'a');
'222.333.222.42'.replace(/\d{2,3}/g, 'X');
'A melhor linguagem é JavaScript'.replace(/\w{1,}/g, 'X');
'222.333.222.42'.replace(/\d+/g, 'X');
'Dígitos, dados, desenhos, Dito, d'.replace(/d\w+/g, 'X');
'Dígitos, dados, desenhos, Dito, d'.replace(/d\w*/g, 'X');
'Qual é o certo, regexp ou regex?'.replace(/regexp?/g, 'Regular Expression');
'PHP e Java são linguagens diferentes'.replace(/java|php/gi, 'X');
'Java não é JavaScript.'.replace(/java/gi, 'X');
'Java não é JavaScript.'.replace(/\b\d+\b/gi, 'X');
'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(/\b\d+\b/gi, 'X');
'11_22 33-44 55é66 77e88'.replace(/\b\d+\b/gi, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/^\w+/g, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/\w+$/g, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/\w+$/gm, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/^\w+/gm, 'X');
`andre@origamid.com\ncontato@origamid.com`.replace(/\n/g, '---');
`andre@origamid.com
contato@origamid.com`.replace(/\n/g, 'X');
'andre@origamid.com ©'.replace(/\u0040|\u00A9/g, '---');

'JavaScript'.replace(/a/, 'B')
// BavaScript
'JavaScript'.replace(/Java/, 'Type')
// TypeScript
'JavaScript'.replace(/a/g, 'i')
// JiviScript
'Perdeu perdido'.replace(/Pe/gi, 'Ba')
// Bardeu Bardido
'JavaScript'.replace(/a/g, 'i')
// JuvuScrupt

'JavaScript'.replace(/[ai]/gi, 'u');
'111.222-333-44'.replace(/[-.]/g, '');
'Brasil é com z: Brazil'.replace(/Bra[sz]il/g, 'Prazer');
'JavaScript é a linguagem.'.replace(/[a-z]/g, '0');
'JavaScript é a linguagem.'.replace(/[a-zA-Z]/g, '1');
'123.333.333-33'.replace(/[0-9]/g, 'X');
'Brasil é com z: Brazil'.replace(/[^a-z]/g, ' ');
'JavaScript é a linguagem.'.replace(/./g, '0');
'999.222.222.11'.replace(/\./g, '-');
'Guarda-chuva R$ 23,00.'.replace(/\w/g, '-');
'Guarda-chuva R$ 23,00.'.replace(/\W/g, '-');
'+55 (21) 2222-2222'.replace(/\d/g, 'X');
'+55 (21) 2222-2222'.replace(/\D/g, '');
'+55 (21) 2222-  2222  '.replace(/\s/g, '');
'+55 (21) 2222-  2222  '.replace(/\S/g, '');
'Vaaaai ali por favor.'.replace(/aaaa/g, 'a');
'Vaaaai ali por favor.'.replace(/a{4}/g, 'a');
'222.333.222.42'.replace(/\d{2,3}/g, 'X');
'A melhor linguagem é JavaScript'.replace(/\w{1,}/g, 'X');
'222.333.222.42'.replace(/\d+/g, 'X');
'Dígitos, dados, desenhos, Dito, d'.replace(/d\w+/g, 'X');
'Dígitos, dados, desenhos, Dito, d'.replace(/d\w*/g, 'X');
'Qual é o certo, regexp ou regex?'.replace(/regexp?/g, 'Regular Expression');
'PHP e Java são linguagens diferentes'.replace(/java|php/gi, 'X');
'Java não é JavaScript.'.replace(/java/gi, 'X');
'Java não é JavaScript.'.replace(/\b\d+\b/gi, 'X');
'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(/\b\d+\b/gi, 'X');
'11_22 33-44 55é66 77e88'.replace(/\b\d+\b/gi, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/^\w+/g, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/\w+$/g, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/\w+$/gm, 'X');
`andre@origamid.com
contato@origamid.com`.replace(/^\w+/gm, 'X');
`andre@origamid.com\ncontato@origamid.com`.replace(/\n/g, '---');
`andre@origamid.com
contato@origamid.com`.replace(/\n/g, 'X');
'andre@origamid.com ©'.replace(/\u0040|\u00A9/g, '---');







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

