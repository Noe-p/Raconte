import LocomotiveScroll from 'locomotive-scroll';

// Scroll horizontal

const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical'
});

// onClick
const itemRaconte = document.querySelector('.item_nav_index');
const loader = document.querySelector('.loader');
const about = document.querySelector('.about');
const itemMenu = document.querySelector('.item-menu');


itemRaconte.onclick = function(){
  loader.classList.add('open');
  about.classList.add('hidden');

  setTimeout(() => {  window.location.replace("../../index.html"); }, 1000);
};

itemMenu.onclick = function(){
  loader.classList.add('open');
  about.classList.add('hidden');

  setTimeout(() => {  window.location.replace("menu.html"); }, 1000);
};
