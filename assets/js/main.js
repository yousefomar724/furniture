/*==-- ONLOAD ANIAMATIONS --==*/
const onLoad = () => {
    /*==-- VARIABLES --==*/
    const whiteBox = document.querySelector(".white-box");
    const slideImg1 = document.querySelector(".slide-1 img");
    const slidePrice1 = document.querySelector(".item__price p");
    const itemName = document.querySelector(".item__name");
    const rating = document.querySelector(".item__rating");
    const generalName = document.querySelector(".general-name");
    const numbers = document.querySelector(".numbers");
    const btn = document.querySelector(".btn");

    /*==-- TIMELINE lITE ANIMATIONS --==*/
    let t1 = new TimelineLite();

    t1.fromTo(whiteBox, 1, {height: '0vh'}, {height: '60vh', ease: Power4.easeOut})
    .fromTo(slideImg1, 1, {opacity: 0}, {opacity: 1})
    .fromTo(numbers, 1, {opacity: 0}, {opacity: 1})
    .fromTo(itemName, 1, {opacity: 0}, {opacity: 1})
    .fromTo(rating, 1, {opacity: 0, y: '-20px'}, {opacity: 1, y: '0px', ease: Power4.easeOut}, 'start')
    .fromTo(generalName, 1, {marginTop: '120px'}, {marginTop: '0px', ease: Power4.easeOut}, 'start')
    .fromTo(slidePrice1, 1, {opacity: 0, y: '20px'}, {opacity: 1, y: '0px', ease: Power4.easeOut}, 'start')
    .fromTo(btn, 1, {opacity: 0}, {opacity: 1}, 'start')
};

/*==-- SLIDE ITEMS SCRIPT --==*/
const showItem = e =>{
    const itemId = e.id;
    const activeLinks = document.querySelector('.activeLink');
    activeLinks.classList.remove('activeLink');
    e.classList.add('activeLink');
    const slides = document.getElementsByClassName('main-content');

    for(let i=0; i<slides.length; i++){

        if(slides[i].classList.contains(`slide-${itemId}`)){

            slides[i].style.position = "relative";
            slides[i].style.left = 0;

            /*==-- ANIMATION WITH THE SLIDE --==*/
            const img = document.querySelector(`.slide-${itemId} img.item__img`)
            const price = document.querySelector(`.slide-${itemId} div.item__price`)
            const itemName = document.querySelector(`.slide-${itemId} h3.item__name`)
            const rating = document.querySelector(`.slide-${itemId} div.item__rating`)
            const generalName = document.querySelector(`.slide-${itemId} h1.general-name`)

            let t1 = new TimelineLite();

            t1.fromTo(img, 1 ,{opacity: 0}, {opacity: 1})
            .fromTo(itemName, 1 ,{opacity: 0}, {opacity: 1})
            .fromTo(rating, 1 ,{opacity: 0, y: '-20px'}, {opacity: 1, y: '0px', ease: Power4.easeOut}, 'start1')
            .fromTo(price, 1 ,{opacity: 0, y: '20px'}, {opacity: 1, y: '0px', ease: Power4.easeOut}, 'start1')
            .fromTo(generalName, 1 ,{marginTop: '120px'}, {marginTop: '0px', ease: Power4.easeOut}, 'start1')
        } else{
            slides[i].style.position = "absolute";
            slides[i].style.left = '-9999px';
        }
    }
}