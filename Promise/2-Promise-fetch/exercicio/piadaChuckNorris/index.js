
const piadaHTML = document.querySelector('.container-piada');


function primeiraExecucao(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then( (response) => {
        return response.json();
    })
    .then( (piada) => {
        console.log(piada.value);

        piadaHTML.innerText = piada.value;
    })
}
primeiraExecucao();

setInterval(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then( (response) => {
        return response.json();
    })
    .then( (piada) => {
        piadaHTML.innerText = piada.value;
    })
}, 10000);

