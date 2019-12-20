const containerGame = document.querySelector('.container-game');

function clickMouseCard(e){
    
    if( this.classList.contains('click-card-mostra-frente') ){
        this.classList.add('click-card-mostra-verso');
        this.classList.remove('click-card-mostra-frente');
        let mudaFundo = setInterval( () => {
            if( this.classList.contains('click-card-mostra-verso') ){
                this.style.backgroundImage = 'url(acuma.gif)';
            }else{
                clearInterval(mudaFundo);
            }
        }, 1000);
    }else if( this.classList.contains('click-card-mostra-verso') ){
        this.classList.add('click-card-mostra-frente');
        this.classList.remove('click-card-mostra-verso');
        let mudaFundo = setInterval( () => {
            if( this.classList.contains('click-card-mostra-frente') ){
                this.style.backgroundImage = 'url(Street_Fighter_Logo.png)';
            }else{
                clearInterval(mudaFundo);
            }
        }, 1000);
    }else{
        this.classList.add('click-card-mostra-verso');
        let mudaFundo = setInterval( () => {
            if( this.classList.contains('click-card-mostra-verso') ){
                this.style.backgroundImage = 'url(acuma.gif)';
            }else{
                clearInterval(mudaFundo);
            }
        }, 1000);
    }
}

for(let c = 1; c <= 10 ; c++){
    const novoElemento = document.createElement('div');
    novoElemento.classList.add('card');
    novoElemento.addEventListener( 'click', clickMouseCard );
    containerGame.appendChild(novoElemento);
}



