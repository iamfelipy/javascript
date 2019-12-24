
//String

/*
  métodos do tipo function

    métodos do tipo function não herdados:

    métodos do tipo function herdados:
    function.length // return quantidade de parametros da função
    function.name // return o nome da função como string
    function.call(this, arg1, arg2, arg3); executa a função com o this modificado
    function.apply(this, [arg1, arg2, arg3]); executa a função mandando os argumentos em formatado spread
    function.bind(this, arg1, arg2, arg3); retorna uma nova função com this modificado o argumentos mandados são similiares ao call 

*/

// new Function
console.log('--------------------------------');
console.log('new Function()');
let tudoEUmObjetoAteFuncoes = new Function('lado', 'return lado * 4');
console.log( tudoEUmObjetoAteFuncoes );
console.log( 'tudoEUmObjetoAteFuncoes(4)' );
console.log( tudoEUmObjetoAteFuncoes(2) );
console.log('--------------------------------');

// function.length
console.log('--------------------------------');
console.log('nomedafuncao.length');
let dadosPessoa = new Function('nome, idade, altura', 'return "humano"');
console.log( dadosPessoa.length );
console.log('--------------------------------');

// function.name
console.log('--------------------------------');
console.log('nomedafuncao.name');
dadosPessoa2 = new Function('nome, idade, altura', 'return "humano"');
console.log( dadosPessoa2.name );
console.log('--------------------------------');

// muito importante: mudar a referencia do this

// function.call(this, arg1, arg2)
console.log('--------------------------------');
console.log('nomedafuncao.call()');
const carro = {
  nomeCarro: 'chevet',
  ano: 2020,
}
let apresentacaoCarro = function(nome){
  console.log('O nome do meu novo carro é ' + this.nomeCarro + ' e é ' + this.ano + ', comprei de ' + nome + '.');
}
console.log( apresentacaoCarro.call(carro, 'Felipy') );
console.log( apresentacaoCarro.call({nomeCarro: 'Citroen', ano: 2050}, 'Jose') );

const anosBrasilGanhouCopa = [2000, 2004, 2008, 2009];
anosBrasilGanhouCopa.forEach.call( anosBrasilGanhouCopa, (ano) => {console.log('Brasil ganhou em: ' + ano)} );
console.log('--------------------------------');

// function.apply(this,[arg1, arg2])
//a partir do segundo argumento do apply, ao enviar o array ele transforma cada elemento do array em variaveis isoladasS
// Array.prototype.filter.apply(li, itemAtivo)
console.log('--------------------------------');
console.log('nomedafuncao.apply()');
let numeros = [3,2,6,20,1];
console.log( Math.max.apply(null, numeros) );
console.log('--------------------------------');

// function.bind()
// bind é parecido com o call, a diferença é que ele retorna a função com o this modificado
console.log('--------------------------------');
console.log('nomedafuncao.bind()');
let escola = {
  nomeEscola: 'Elizabeth',
  anoConstrucao: 1990,
}
let mostraInfoEscola = function(){
  console.log('Nome escola: ' + this.nomeEscola);
  console.log('Ano da construção: ' + this.anoConstrucao);
}
let retornoBind = mostraInfoEscola.bind(escola);
console.log(retornoBind);
console.log(retornoBind());
console.log('--------------------------------');

console.clear();

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

let pes = document.querySelectorAll('p');
let quantidadeCaracters = Array.prototype.reduce.call(pes, function(accumulator, elemento){
  return elemento.innerText.length + accumulator;
}, 0);

console.log(quantidadeCaracters);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criaElemento(tag, classe, conteudo){
  let novoElemento;
  novoElemento = document.createElement(tag);
  novoElemento.classList.add(classe);
  novoElemento.innerHTML = conteudo;
  return novoElemento;
}

console.log(criaElemento('div', 'container', 'Olá mundo'));
document.body.appendChild(criaElemento('div', 'container', 'Olá mundo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

let criaTitulo = criaElemento.bind(null,'h1','titulo');
console.log( criaTitulo('Isso é um titulo.') );
document.body.appendChild(criaTitulo('Isso é um titulo.'));

console.clear();

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.saudacao = function (){
   console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade}.`); 
  }
 }
 
 function Professor(nome, idade, materia){
  Pessoa.call(this, nome, idade);
  this.materia = materia;
  this.saudacao = function (){
   console.log( `Meu nome é ${this.nome}, tenho ${this.idade} anos e leciono na matéria de ${this.materia}.`); 
  }
 }

 Professor.prototype = Pessoa.prototype;


let andre = new Professor('André', 29, 'Matemática');

console.log( andre.saudacao());