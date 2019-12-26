


function Pessoa( nome, idade, sexo, interesses ){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.interesses = interesses;
}

Pessoa.prototype = {
    constructor: Pessoa,
    bio(){
        console.log('----------------------------------------------');
        console.log('              Meus dados                        ');
        console.log(`Nome: ${this.nome}.`);
        console.log(`Idade: ${this.idade}.`);
        console.log(`Sexo: ${this.sexo}.`);
        // console.log(`Interesses:`);
        // console.log(`  Musicas: ${this.interesses.musicas[0]}`);
        // console.log(`  Jogos: ${this.interesses.jogos[0]}`);
        console.log('----------------------------------------------');
    },
    apresentacao(){
        console.log('----------------------------------------------');
        console.log(`Oi, sou o ${this.nome}`);
        console.log('----------------------------------------------');
    },
    teste(){
        console.log('teste');
    },
}

function Aluno(nome, idade, sexo){
    Pessoa.call(this, nome, idade, sexo);
    this.apresentacao = function (){
        console.log(`Yoyo. Meu nome é ${this.nome}.`);
    }
}Aluno.prototype = Pessoa.prototype;


function Professor(nome, idade, sexo, subject){
    Pessoa.call(this, nome, idade, sexo);
    this.subject = subject;
    this.apresentacao = function (){
        console.log('----------------------------------------------');
        console.log(`Oi. Meu nome é ${this.nome}, e sou professor da matéria ${this.subject}`);
        console.log('----------------------------------------------');
    }
}Professor.prototype = Pessoa.prototype;




let felipy = new Aluno( 'Felipy', 
                        20, 
                        'Masculino', 
                        // { 
                        //     musicas: ['rock alternativo'], 
                        //     jogos: ['mobile legends', 'free fire']
                        // },
                        'Matemática'
);

let Joaquim = new Professor( 'Joaquim', 
                        31, 
                        'Masculino', 
                        // { 
                        //     musicas: ['Pagode'], 
                        //     jogos: ['mobile legends', 'free fire'
                        // },
                        'Matemática'
);

console.log(felipy);
felipy.bio();
felipy.apresentacao();
felipy.teste();

console.log('----------------------------------------------');

console.log(Joaquim);
Joaquim.bio();
Joaquim.apresentacao();


console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));