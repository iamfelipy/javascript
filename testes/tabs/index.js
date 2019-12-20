
const tabs = document.querySelectorAll('.tab');
const conteudoTab = document.querySelector('.conteudo-tab');
const dadosConteudoTab = [
    { dados: 'Horários Horários Horários Horários' },
    { dados: 'Jogadores Jogadores Jogadores Jogadores' },
    { dados: 'Financeiro Financeiro Financeiro Financeiro' },
    { dados: 'Parceiros Parceiros Parceiros Parceiros' },
]

const ativaTab = index => {
    //ativando tabs
    tabs.forEach( tab =>{
        tab.classList.remove('tab-ativa');
    });
    tabs[index].classList.add('tab-ativa');
    //mostrando conteudo da tab ativa
    conteudoTab.innerHTML = `${dadosConteudoTab[index].dados}`;
}

const init = () => {
    tabs[0].classList.add('tab-ativa');
    conteudoTab.innerHTML = `${dadosConteudoTab[0].dados}`;
    tabs.forEach( (tab, index) =>{
        tab.addEventListener('click', () => {
            ativaTab(index);
        });
    })
}

addEventListener('load', () =>{
    init();
});
