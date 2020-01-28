
const valorBitcoin = document.querySelector('.btc-brl');


function primeiraExecucao(){
    fetch('https://blockchain.info/ticker')
    .then( (response) => {
        return response.json();
    })
    .then( (bitcoin) => {
        valorBitcoin.innerText = bitcoin['BRL'].buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    })
}
primeiraExecucao();

setInterval(()=>{
    fetch('https://blockchain.info/ticker')
    .then( (response) => {
        return response.json();
    })
    .then( (bitcoin) => {
        alert('Bitcoin atualizado.');
        valorBitcoin.innerText = bitcoin['BRL'].buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    })
}, 30000);

