import LocomotiveScroll from 'locomotive-scroll';

// Scroll horizontal

const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',

    mobile :{
      direction : 'vertical'
    }
});

//onClick

const itemMenu = document.querySelector('.item-menu');
const loader = document.querySelector('.loader');
const itemAbout = document.querySelector('.item-about');
const ay = document.querySelector('.ay');

itemMenu.onclick = function(){
  loader.classList.add('open');
  setTimeout(() => {  window.location.replace("src/app/menu.html"); }, 1000);
};

itemAbout.onclick = function(){
  loader.classList.add('open');
  setTimeout(() => {  window.location.replace("src/app/about.html"); }, 1000);
};

ay.onclick = function(){
  loader.classList.add('open');
  setTimeout(() => {  window.location.replace("src/app/anthony-yann.html"); }, 1000);
};

// Animation stickman
let vanille = document.querySelector('.vanille');
let noe = document.querySelector('.noe');

let direction = 0;
let speed = 300;
let stop = 1;
let nb_stick = noe.childElementCount;
let reverse = null;

lscroll.on('scroll', (obj) => {
  let change_img = obj.scroll.x % speed;

  function switch_img(stickman, i, reverse){
    for (var j = 0; j < nb_stick; j++) {
      stickman.children[j].classList.remove('open');
      stickman.children[j].classList.remove('open_reverse');
    }
    if(reverse == 1){
      stickman.children[i].classList.add('open_reverse');
    }
    else{
      stickman.children[i].classList.add('open');
    }
  }

  if(stop){
    setTimeout(function (){
      stop=1;
      switch_img(noe, 0, null);
      switch_img(vanille, 0, null);
    }, 500);
    stop=0;
  }

  if((change_img-direction) > 0 && (change_img-direction) < 5){
    reverse = null;
  }
  else if((change_img-direction) < 0 && (change_img-direction) > -5){
    reverse = 1;
  }

  if(change_img > (speed/nb_stick)*0 && change_img < (speed/nb_stick)*1){
    switch_img(noe, 1, reverse);
    switch_img(vanille, 1, reverse);
  }
  else if(change_img > (speed/nb_stick)*1 && change_img < (speed/nb_stick)*2){
    switch_img(noe, 2, reverse);
    switch_img(vanille, 2, reverse);
  }
  else if(change_img > (speed/nb_stick)*2 && change_img < (speed/nb_stick)*3){
    switch_img(noe, 3, reverse);
    switch_img(vanille, 3, reverse);
  }
  else if(change_img > (speed/nb_stick)*3 && change_img < (speed/nb_stick)*4){
    switch_img(noe, 4, reverse);
    switch_img(vanille, 4, reverse);
  }
  else if(change_img > (speed/nb_stick)*4 && change_img < (speed/nb_stick)*5){
    switch_img(noe, 5, reverse);
    switch_img(vanille, 5, reverse);
  }
  else if(change_img > (speed/nb_stick)*5 && change_img < (speed/nb_stick)*6){
    switch_img(noe, 6, reverse);
    switch_img(vanille, 6, reverse);
  }
  else if(change_img > (speed/nb_stick)*6 && change_img < (speed/nb_stick)*7){
    switch_img(noe, 7, reverse);
    switch_img(vanille, 7, reverse);
  }
  else if(change_img > (speed/nb_stick)*7 && change_img < (speed/nb_stick)*8){
    switch_img(noe, 8, reverse);
    switch_img(vanille, 8, reverse);
  }
  else if(change_img > (speed/nb_stick)*8 && change_img < (speed/nb_stick)*9){
    switch_img(noe, 9, reverse);
    switch_img(vanille, 9, reverse);
  }
  else if(change_img > (speed/nb_stick)*9 && change_img < (speed/nb_stick)*10){
    switch_img(noe, 10, reverse);
    switch_img(vanille, 10, reverse);
  }
  else if(change_img > (speed/nb_stick)*10 && change_img < (speed/nb_stick)*11){
    switch_img(noe, 11, reverse);
    switch_img(vanille, 11, reverse);
  }
  else{
    switch_img(noe, 12, reverse);
    switch_img(vanille, 12, reverse);
  }

  direction = change_img;
});

//Responsive

if(screen.width<=480){
  let stickman = document.querySelector('.stickman');
  let title1 = document.querySelector('.title1');
  let title2 = document.querySelector('.title2');

  stickman.classList.add('hidden');

}
