import LocomotiveScroll from 'locomotive-scroll';

// Scroll horizontal
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});

//loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const navbar = document.querySelector('.navbar');

window.addEventListener('load', () => {
  loader.classList.add('hidden');
  navbar.classList.remove('hidden');
  main.classList.remove('hidden');
});

// Animation stick man
let person = document.querySelector('.stickman');
let direction = 0;

lscroll.on('scroll', (obj) => {
  let change_img = obj.scroll.x % 60;

  console.log(change_img-direction);
  if((change_img-direction) > 0 && (change_img-direction) < 5){
    if(change_img > 0 && change_img < 10){
      person.setAttribute("src", "/man2.9d339d9e.png");
    }
    else if(change_img > 10 && change_img < 20){
      person.setAttribute("src", "/man3.5126bd79.png");
    }
    else if(change_img > 20 && change_img < 30){
      person.setAttribute("src", "/man4.f832e58e.png");
    }
    else if(change_img > 30 && change_img < 40){
      person.setAttribute("src", "/man5.448df43f.png");
    }
    else if(change_img > 40 && change_img < 50){
      person.setAttribute("src", "/man6.f8a85719.png");
    }
    else{
      person.setAttribute("src", "/man1.fa1006bf.png");
    }
  }
  else if((change_img-direction) < 0 && (change_img-direction) > -5){
    if(change_img > 0 && change_img < 10){
      person.setAttribute("src", "/man2_g.b9cbf5e5.png");
    }
    else if(change_img > 10 && change_img < 20){
      person.setAttribute("src", "/man3_g.30d5f3b3.png");
    }
    else if(change_img > 20 && change_img < 30){
      person.setAttribute("src", "/man4_g.d2693391.png");
    }
    else if(change_img > 30 && change_img < 40){
      person.setAttribute("src", "/man5_g.9f483ea2.png");
    }
    else if(change_img > 40 && change_img < 50){
      person.setAttribute("src", "/man6_g.ccbe238f.png");
    }
    else{
      person.setAttribute("src", "/man1_g.8da08b5f.png");
    }
  }

  direction = change_img;
});
