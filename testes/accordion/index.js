const accordions = document.querySelectorAll('.js-container-accordions .accordion');

if( accordions.length ){
    const abreAccordion = index => {
        accordions.forEach( accordion => {
            if( !accordions[index].classList.contains('js-accordion-ativo') ){
                accordion.classList.remove('js-accordion-ativo');
            }
        });    
        accordions[index].classList.toggle('js-accordion-ativo');
        // accordions[index].children[1].style.maxHeight = `${accordions[index].children[1].scrollHeight+20}px`;
    }
    
    accordions.forEach( (accordion, index) => {
        accordion.children[0].addEventListener( 'click' ,() => {
            abreAccordion(index);
        });
    });
}
