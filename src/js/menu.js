import LocomotiveScroll from 'locomotive-scroll';

// Scroll horizontal

const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical'
});

const itemMenu = document.querySelector('.item-menu');
const itemRaconte = document.querySelector('.item_nav_index');
const loader = document.querySelector('.loader');
const menu = document.querySelector('.menu');


itemRaconte.onclick = function(){
  loader.classList.add('open');
  menu.classList.add('hidden');

  setTimeout(() => {  window.location.replace("../index.html"); }, 1000);
};
