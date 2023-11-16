const menu=document.querySelector('.img_menu');
const menuList=document.querySelector('.ul__nav');
const link=document.querySelectorAll('.nav__link');
const iconTop=document.querySelector('.icon__top');

menu.addEventListener('click',function(){
    menuList.classList.toggle('ul__nav--show');

    if (menuList.classList.contains('ul__nav--show')) {
        menu.src = '/images/menu_cancelar.png';
        iconTop.style.zIndex = 0;

    } else {
        menu.src = '/images/barra-de-menus.png';
        iconTop.style.zIndex = 10;
    }
    
});

link.forEach(function(link){
    link.addEventListener('click',function(){
        menuList.classList.remove('ul__nav--show');
        menu.src = '/images/barra-de-menus.png';
    })
});

/*
ABRIR EL MODAL PARA VER EL HORARIO DE LA SEMANA
*/

document.querySelectorAll('.card__information_div_image').forEach(image =>{
    image.onclick=()=>{
        document.querySelector('.popup_img').style.display='flex';
        document.querySelector('.schedule');
        //iconTop.style.zIndex = 10;
    }
})

document.querySelector('.popup_img .cancel').onclick=()=>{
    document.querySelector('.popup_img').style.display='none';
    //iconTop.style.zIndex = 10;
}

document.querySelector('.popup_img a').onclick=()=>{
    document.querySelector('.popup_img').style.display='none';
}


/*CAMBIAR DE IMAGEN DE PERFIL*/

/*----ANIMACIÓN AL HACER SCROLL*/

const sectionProfileMain= document.querySelector('.section__profile__main');
const sectionReferenceMain = document.querySelector('.section__reference__main');
const sectionNetworkMain = document.querySelector('.section__network__main');
const articleParagraph=document.querySelector('.article__paragraph');
const sectionProfileImage = document.querySelector('.section__profile__image');

const referenceTitle = document.querySelector('.reference__title');
const referenceTitleParagraph = document.querySelector('.reference__title__paragraph');

const loadSection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('section__profile__main')) {
                entry.target.classList.add('profile__main__scroll');
            } else if (entry.target.classList.contains('article__paragraph')) {
                entry.target.classList.add('article__paragraph__scroll');
            } else if (entry.target.classList.contains('section__profile__image')) {
                entry.target.classList.add('section__profile__image__scroll');
            } else if (entry.target.classList.contains('section__network__main')) {
                entry.target.classList.add('network__main__scroll');
            } else if (entry.target.classList.contains('section__reference__main')) {
                entry.target.classList.add('references__main__scroll');
            }else if (entry.target.classList.contains('reference__title')) {
                entry.target.classList.add('reference__title__scroll');
            }
            else if (entry.target.classList.contains('reference__title__paragraph')) {
                entry.target.classList.add('reference__paragraph__scroll');
            }
        }
    });
}

const observe= new IntersectionObserver(loadSection,{
    root: null,
    rootMargin: '0px',
    threshold: .40
});

observe.observe(sectionProfileMain);
observe.observe(articleParagraph);
observe.observe(sectionProfileImage);
observe.observe(sectionReferenceMain);
observe.observe(sectionNetworkMain);
observe.observe(referenceTitle);
observe.observe(referenceTitleParagraph);
