const menu=document.querySelector('.img_menu');
const menuList=document.querySelector('.ul__nav');
const link=document.querySelectorAll('.nav__link');
const iconTop=document.querySelector('.icon__top');

menu.addEventListener('click',function(){
    menuList.classList.toggle('ul__nav--show');

    if (menuList.classList.contains('ul__nav--show')) {
        menu.src = '/images/menu_cancelar.png';
        iconTop.style.zIndex = 10;

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


/*----ANIMACIÓN AL HACER SCROLL*/

const loreImg= document.querySelector('.lore__img');
const loreDescription= document.querySelector('.lore__description');
const musicTittle = document.querySelector('.music__tittle');
const music__display = document.querySelector('.music__display');
const profileMain = document.querySelector('.profile__main');

const loadSection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('lore__img')) {
                entry.target.classList.add('lore__img__Scroll');
            } else if (entry.target.classList.contains('lore__description')) {
                entry.target.classList.add('lore__description__scroll');
            } else if (entry.target.classList.contains('music__tittle')) {
                entry.target.classList.add('music__tittle__scroll');
            } else if (entry.target.classList.contains('music__display')) {
                entry.target.classList.add('music__display__scroll');
            } else if (entry.target.classList.contains('profile__main')) {
                entry.target.classList.add('profile__main__scroll');
            }
        }
    });
}

const observe= new IntersectionObserver(loadSection,{
    root: null,
    rootMargin: '0px',
    threshold: .40
});

observe.observe(loreImg);
observe.observe(loreDescription);
observe.observe(musicTittle);
observe.observe(music__display);
observe.observe(profileMain);

