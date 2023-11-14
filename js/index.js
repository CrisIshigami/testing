const menu=document.querySelector('.img_menu');
const menuList=document.querySelector('.ul__nav');
const link=document.querySelectorAll('.nav__link');

menu.addEventListener('click',function(){
    menuList.classList.toggle('ul__nav--show');

    if (menuList.classList.contains('ul__nav--show')) {
        menu.src = '/images/menu_cancelar.png';
    } else {
    menu.src = '/images/barra-de-menus.png';
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
    }
})

document.querySelector('.popup_img .cancel').onclick=()=>{
    document.querySelector('.popup_img').style.display='none';
}

document.querySelector('.popup_img a').onclick=()=>{
    document.querySelector('.popup_img').style.display='none';
}


/*CAMBIAR DE IMAGEN DE PERFIL*/

/*----ANIMACIÓN AL HACER SCROLL*/

const sectionInformation= document.querySelector('.section__information');

const loadSection = (entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log('La sección esta en el viewport');
        }
        else{
            console.log('No hay NADA')
        }
    })
}

const observe= new IntersectionObserver(loadSection,{
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

observe.observe(sectionInformation);