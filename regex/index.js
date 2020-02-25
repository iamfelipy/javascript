

let texto = '05:15 ernesto\n08:39 ricardo\n10:32 patricia\n14:59 gabriel \n16:27 carla\n22:23 marcelo';

// let novo = texto.replace(/1[2-8].\n$/g, '');
let novo = texto.replace(/1[2-8]:./g, '');

console.log(novo);


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
    regex = padrões de busca
    As expressões são formadas por símbolos e caracteres literais
    simbolos = metacaracters
    metacaracters = cada metacaracter tem uma função especial para engine
    match('casar') = quando a engine regex encontra algo
    padrão('pattern') = o que estou procurando
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

