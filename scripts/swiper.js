const slideWrap = new Swiper ('#slide_wrap .container .swiper',{
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        prevEl:'#slide_wrap .container .swiper  .swiper-button-prev',
        nextEl:'#slide_wrap .container .swiper  .swiper-button-next',
    },
})

console.log('1행', document.querySelector('#slide_wrap .container .swiper'));

const adBnr = new Swiper ('#ad_bnr .swiper',{
    loop:true, 
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        prevEl:'#ad_bnr .swiper .swiper-button-prev',
        nextEl:'#ad_bnr .swiper .swiper-button-next',
    },
    /* scrollbar:{
        el:'#ad_bnr .swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    pagination: {
        el: "#ad_bnr .swiper-pagination",
        type: "fraction",
        clickable: true,
    }, */
})

const originSung = new Swiper ('#origin_sung .container .contents .swiper',{
    loop:true,
    spaceBetween: 30,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        prevEl:'#origin_sung .container .contents .swiper ~ .swiper-button-prev',
        nextEl:'#origin_sung .container .contents .swiper ~  .swiper-button-next',
    },
    scrollbar:{
        el:'#origin_sung .container .contents .swiper ~ .swiper-scrollbar',
        draggable: true,
        hide: false,
    },
    /* pagination: {
        el: "#origin_sung  .swiper-pagination",
        type: "fraction",
        clickable: true,
    }, */
})
console.log('5행', document.querySelector('#origin_sung .container .contents .swiper ~ .swiper-button-prev'));
console.log('5행2', document.querySelector('#origin_sung .container .contents .swiper'));



const cakeroll = new Swiper ('#cakeroll .container .swiper',{
    loop:true,
    spaceBetween: 30,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    speed:3000,
    navigation:{
        prevEl:'#cakeroll .container .swiper ~ .swiper-button-prev',
        nextEl:'#cakeroll .container .swiper ~ .swiper-button-next',
    },
    /* scrollbar:{
        el:'#cakeroll .container .contents .swiper ~ .swiper-scrollbar',
        draggable: true,
        hide: false,
    }, */
    /* pagination: {
        el: "#origin_sung  .swiper-pagination",
        type: "fraction",
        clickable: true,
    }, */
})
console.log('케이크탭', document.querySelector('#cakeroll .container .swiper'));
console.log('케이크탭2', document.querySelector('#cakeroll .container .swiper ~ .swiper-button-prev'));