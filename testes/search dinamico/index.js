

const pesquisarSite = document.querySelector('#pesquisarSite');
const apagarpesquisarSite = document.querySelector('.apagarpesquisarSite');
apagarpesquisarSite.addEventListener('click', () => {
    pesquisarSite.value = '';
});
const pesquisarSiteChange = () => {
    const artigos = document.querySelectorAll('.artigo .titulo-noticia');
    artigos.forEach( item => {
        if( pesquisarSite.value === item.firstElementChild.innerText ){
            window.scrollTo( 0, item.parentElement.offsetTop );
        }
    });
}
pesquisarSite.addEventListener('change', pesquisarSiteChange);


