
const mostraVantagens = () => {
    const containerVantagens = document.querySelectorAll('.apresentação-vantagens div:last-child .container-vantagem');
    let primeiraExecucao = false;
    containerVantagens.forEach(containerVantagem => {
        let containerVantagemRectTop =  containerVantagem.getBoundingClientRect().top;
        let janelaMeio = window.innerHeight * .7;
        let vantagemIcone = containerVantagem.children[0];
        let vantagemDescricao = containerVantagem.children[1];
        if( !primeiraExecucao ){
            if( containerVantagemRectTop <=  janelaMeio){
                vantagemIcone.classList.add('js-icone-vantagem-ativo');
                vantagemDescricao.classList.add('js-descricao-vantagem-ativo');
                console.log('teste1');
            }else{
                vantagemIcone.classList.remove('js-icone-vantagem-ativo');
                vantagemDescricao.classList.remove('js-descricao-vantagem-ativo');
                console.log('teste2');
            }
            primeiraExecucao = true;
        }
        if( containerVantagemRectTop <=  janelaMeio){
            vantagemIcone.classList.add('js-icone-vantagem-ativo');
            vantagemDescricao.classList.add('js-descricao-vantagem-ativo');
            vantagemIcone.classList.remove('js-icone-vantagem-desativado');
            vantagemDescricao.classList.remove('js-descricao-vantagem-desativado');
            
        }else{
            vantagemIcone.classList.remove('js-icone-vantagem-ativo');
            vantagemDescricao.classList.remove('js-descricao-vantagem-ativo');
            vantagemIcone.classList.add('js-icone-vantagem-desativado');
            vantagemDescricao.classList.add('js-descricao-vantagem-desativado');
        }
    });
}

addEventListener('scroll', mostraVantagens);

