
const mensagemCepInvalido = document.querySelector('.cep-mensagem-erro');

const cep = document.querySelector('#cepUser');
const ruaUser = document.querySelector('#rua-user');
const complementoUser = document.querySelector('#complemetno-user');
const bairroUser = document.querySelector('#bairro-user');
const localidadeUser = document.querySelector('#localidade-user');
const ufUser = document.querySelector('#uf-user');



let cepBuscado;

let cepModificado = setInterval(() => {
    if ( cep.value.length === 8 && cepBuscado !== cep.value ) {
        cepBuscado = cep.value;
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then( (response) => {
            response.json()
            .then( (responseJSON) => {
                if( "erro" in responseJSON ) {
                    mensagemCepInvalido.innerText = 'Cep não encontrado.';        
                    limpaCep();
                }
                else {
                    mensagemCepInvalido.innerText = ''; 
                    limpaCep();
                    mostraEnderecoDoCep(responseJSON);
                }
            })
        })
        .catch( (response) => {
            console.log(response.statuscode);
        });
    }

    if ( cep.value.length > 8 ) {
        cep.value = cep.value.slice(0,8);
    }

});

function mostraEnderecoDoCep (responseJSON) {
    ruaUser.value = responseJSON.logradouro;
    complementoUser.value = responseJSON.complemento;
    bairroUser.value = responseJSON.bairro;
    localidadeUser.value = responseJSON.localidade;
    ufUser.value = responseJSON.uf;
}

function limpaCep () {
    ruaUser.value = '';
    complementoUser.value = '';
    bairroUser.value = '';
    localidadeUser.value = '';
    ufUser.value = '';
}