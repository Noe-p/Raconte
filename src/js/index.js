import LocomotiveScroll from 'locomotive-scroll';

const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});

let person = document.querySelector('.person');

lscroll.on('scroll', (obj) => {
  if((obj.scroll.x % 60) > 0 && (obj.scroll.x % 60) < 10){
    person.setAttribute("src", "/man2.9d339d9e.png");
  }
  else if((obj.scroll.x % 60) > 10 && (obj.scroll.x % 60) < 20){
    person.setAttribute("src", "/man3.5126bd79.png");
  }
  else if((obj.scroll.x % 60) > 20 && (obj.scroll.x % 60) < 30){
    person.setAttribute("src", "/man4.f832e58e.png");
  }
  else if((obj.scroll.x % 60) > 30 && (obj.scroll.x % 60) < 40){
    person.setAttribute("src", "/man5.448df43f.png");
  }
  else if((obj.scroll.x % 60) > 40 && (obj.scroll.x % 60) < 50){
    person.setAttribute("src", "/man6.f8a85719.png");
  }
  else{
    person.setAttribute("src", "/man1.fa1006bf.png");
  }
});
