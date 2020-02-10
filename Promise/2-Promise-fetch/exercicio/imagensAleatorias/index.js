
// viacep.com.br/ws/01001000/json/

const containerImagens =  document.querySelector('.container-imagens');
let pegandoDados = false;
let fotos = [];

async function puxarDados() {
    try {
        // const dadosResponse = await fetch('https://source.unsplash.com/random');
        const dadosResponse = await fetch('https://source.unsplash.com/random');
        
        const imageBlob = await (await dadosResponse).blob();

        fotos.push(imageBlob);
        pegandoDados = false;
        
    }catch(erro){
        console.warn(erro);
    }
    
    console.log('teste');
}

function mostraImagens() {
    fotos.forEach((blobImage) => {
        
        let img = document.createElement('img');
        img.setAttribute('src', URL.createObjectURL(blobImage)); 
        img.style.cssText = 'width: 100%; height: 100%;';
        img.classList.add('imagens');

        containerImagens.appendChild(img);
    });
    containerImagens.style.backgroundImage = 'none';
}

let pedeAsFotos = setInterval( () => {
    if ( fotos.length === 5 ) {
        clearInterval(pedeAsFotos);
        mostraImagens();
    }
    else if ( !pegandoDados ) {
        pegandoDados = true;
        setTimeout(puxarDados, 3000);
    }
}, 0);

console.log('vem antes ou depois.')