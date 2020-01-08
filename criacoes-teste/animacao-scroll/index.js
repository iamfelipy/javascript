
const mostraVantagens = () => {
    const containerVantagens = document.querySelectorAll('.apresentação-vantagens div:last-child .container-vantagem');
    containerVantagens.forEach(containerVantagem => {
        
        let containerVantagemRectTop =  containerVantagem.getBoundingClientRect().top;
        let janelaMeio = window.innerHeight * .8;
        
        let vantagemIcone = containerVantagem.children[0];
        let vantagemDescricao = containerVantagem.children[1];

        if( janelaMeio >= containerVantagemRectTop ){
            vantagemIcone.classList.add('js-icone-vantagem-ativo');
            vantagemDescricao.classList.add('js-descricao-vantagem-ativo');
        }else{
            vantagemIcone.classList.remove('js-icone-vantagem-ativo');
            vantagemDescricao.classList.remove('js-descricao-vantagem-ativo');
        }


        // vantagemIcone.classList.add('js-icone-vantagem-ativo');
        // vantagemDescricao.classList.add('js-descricao-vantagem-ativo');
        // vantagemIcone.classList.add('js-icone-vantagem-desativado');
        // vantagemDescricao.classList.add('js-descricao-vantagem-desativado');

        
    });
}

addEventListener('scroll', mostraVantagens);

