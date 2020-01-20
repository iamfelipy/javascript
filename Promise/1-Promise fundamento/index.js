

// github.com/user/repo/master/db.json

// my-json-server.typicode.com/user/repo/posts/1

// https://my-json-server.typicode.com/felipyc/serverRestFake

// my-json-server.typicode.com/felipyc/serverRestFake/posts/1

// https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871

// exemplo site
// https://medium.com/jaguaribetech/promises-javascript-867d49f20fcf

// https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2


// Promises

/*

  New Promise( (resolve, reject) => {
    if(true)
      resolve('entrou');
    else
      reject('foi embora');
  } );
  .then((resolvida)=>{}).cath((rejeitada)=>{})
  .then((resolvida)=>{},(rejeitada)=>{})
  .then().then().then().catch()
  .finally(()=>{
    console.log('promessa executada, só ñ sei se foi resolvida ou rejeitada');
  })
  Promise.all(promise1,promise2)
  Promise.race(promise1,promise2)

*/ 

console.log('1');

setTimeout( () => {
  console.log('2');
});


console.log('3');

let promessa = new Promise((resolved, reject)=>{
  if( true){
    setTimeout(() => resolved('Resolvida'));
    // resolved('Resolvida')
  }else{
    reject('Rejeitada');
  }
});

promessa
.then((respostResolved) => {
  console.log(respostResolved);  
})
.catch((respostReject)=>{
  console.log(respostReject);
});

promessa
.then( respostResolved => {
  console.log(respostResolved);  
}, respostReject =>{
  console.log(respostReject);
})

promessa
.then( respostResolved => {
  console.log(respostResolved);  
}, respostReject =>{
  console.log(respostReject);
}).finally(()=>{
    //não traz o valor
    console.log('promessa executada');
});

console.log('4');


//métodos que vem no prototype da função construtora Promise

let passouDeAno = true;

let ganharConsole = new Promise((resolve,reject)=>{
  if( passouDeAno ){
    setTimeout(()=>{
      resolve('PS4');
    }, 2000);
  }else{
    setTimeout(()=>{
      reject('Ano que vem você consegue.');
    }, 1000);
  }
});

let amigoVaiVirJogarPS4 = true;

let jogarComAmigo = new Promise((resolve,reject)=>{
  if( amigoVaiVirJogarPS4 ){
    setTimeout(()=>{
      resolve('Maik chegou.');
    }, 1000);
  }else{
    setTimeout(()=>{
      reject('Maik não vai poder vir.');
    }, 2000);
  }
});

// const fimDeSemanaDivertido = Promise.all([ganharConsole, jogarComAmigo]);

// console.log(fimDeSemanaDivertido);

// fimDeSemanaDivertido.then( (promessasCumpridas) => {
//   console.log(promessasCumpridas);
//   console.log(fimDeSemanaDivertido);
// });

const fimDeSemanaDivertido = Promise.race([ganharConsole, jogarComAmigo]);

console.log(fimDeSemanaDivertido);

fimDeSemanaDivertido.then( (promessaMaisRapida) => {
    console.log(promessaMaisRapida);
  });


// Promise com then aninhado

let paoFeito = true;

let pao = new Promise( (resolve, reject) => {
  if( paoFeito ) {
    setTimeout(()=>{
      resolve('Pão pronto')
    }, 1000);
  }
  else{
    setTimeout(()=>{
      reject('Pão queimado ou acabou o pão')
    }, 1000);
  }
});

pao.then((paoFeito)=>{
  console.log('--------------------------------------------');  
  console.log('- Retorno then aninhado');
  console.log(paoFeito);
  return paoFeito;
})
.then((hambuguer) => {
  console.log(hambuguer + ' feito');
});