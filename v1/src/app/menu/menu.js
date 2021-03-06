import LocomotiveScroll from 'locomotive-scroll';

// Scroll vertical

const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical'
});


// onClick
const itemRaconte = document.querySelector('.item_nav_index');
const loader = document.querySelector('.loader');
const menu = document.querySelector('.menu');
const itemAbout = document.querySelector('.item-about');

const ay = document.querySelector('.ay');


itemRaconte.onclick = function(){
  loader.classList.add('open');
  menu.classList.add('hidden');

  setTimeout(() => {  window.location.replace("../../index.html"); }, 1000);
};

itemAbout.onclick = function(){
  loader.classList.add('open');
  menu.classList.add('hidden');

  setTimeout(() => {  window.location.replace("about.html"); }, 1000);
};

ay.onclick = function(){
  loader.classList.add('open');
  menu.classList.add('hidden');

  setTimeout(() => {  window.location.replace("anthony-yann.html"); }, 1000);
};



//Image hover
const reportage = document.querySelector('.reportage');
const frontImg = document.querySelector('.front-img');

for (var i = 0; i < reportage.childElementCount; i++) {
  let reportageImg = reportage.children[i];
  let img = frontImg.children[i];

  reportageImg.onmouseover = function(){
    img.classList.add('open');
    document.addEventListener('mousemove', e => {
      img.setAttribute("style", "top: "+(e.pageY-200)+"px; left: "+(e.pageX+100)+"px;");
    })
  };

  reportageImg.onmouseout = function(){
    img.classList.remove('open');
  };
}
