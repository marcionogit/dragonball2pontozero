





// --------------------------------------------------------

// SCROLL SUAVE

// 1 - SELECIONEI TODOS OS LINKS DOS CABECALHOS
const linksInternos = document.querySelectorAll('.cabecalho-nav li a[href^="#"]');

// 3 - CRIEI UMA FUNÇÃO PARA ACONTECER QUANDO O LINK FOR ACESSADO
function scrollSuave(event){

// 4 - event.preventDefaut() = BARRA O MOVIMENTO PADRÃO DO LINK
    event.preventDefault();

// 5 - .currentTarget.getAttribute('href'); = PEGUEI O ATRIBUTO "href" DENTRO DO LINK A AMARMAZENEI DENTRO DE UMA VARIAVEL
    const href = event.currentTarget.getAttribute('href');

// 6 - FIZ UMA NOVA VARIÁVEL PARA CONSEGUIR USAR O METODO "scrollIntoView"
    const destinoScroll = document.querySelector(href);
    destinoScroll.scrollIntoView({

// "behavior: 'smooth'" FAZ COM QUE O SCROLL DESCA SUAVEMENTE
        behavior: 'smooth',
        block: 'start',
    });
}

// 2 - CRIEI UM ESCUTADOR DE EVENTOS PARA EXECUTAR UMA AÇÃO QUANDO O LINK FOR CLICADO
linksInternos.forEach(function(item){
    item.addEventListener('click', scrollSuave);
})

