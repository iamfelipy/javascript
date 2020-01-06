// album com animal e descricao
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// adiciona efeito ao faq
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

// adiciona scrollSuave ao clicar no link do menu e ir até o elemento
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href'); 
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

// anima elemento ao movimentar o scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      console.log('----------------');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        // console.log(`innerWeight 50%: ${windowMetade}`);
        // console.log(`SectionTopBoundignClientRect: ${sectionTop}`);
        // console.log(`offsetTop: ${section.offsetTop}`);
        // console.log(section.getBoundingClientRect());
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
        
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();


function métodosInterface(){
  // initTabNav
  // album com animal e descricao

  // initAccordion
  // adiciona efeito ao faq

  // initScrollSuave
  // adiciona scrollSuave ao clicar no link do menu e ir até o elemento


  // initAnimacaoScroll
  // anima elemento ao movimentar o scroll
  // ao retirar a classe ele volta ao normal usando transition que executa as propriedadas css de forma devagar
}



// Array.prototype.forEach.call(animaisDescricao.children, (item) => {
//     item.setAttribute('data-anime', 'show-down');
// });

