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


// Animation stickman
//let vanille = document.querySelector('.vanille');
let noe = document.querySelector('.noe');
let direction = 0;
let speed = 300;
let stop = 1;

lscroll.on('scroll', (obj) => {
  let change_img = obj.scroll.x % speed;

  if(stop){
    setTimeout(function (){
      stop=1;
      noe.setAttribute("src", "/noe_stop.fc3b12c4.png");
    }, 500);
    stop=0;
  }

  if((change_img-direction) > 0 && (change_img-direction) < 5){
    if(change_img > (speed/12)*0 && change_img < (speed/12)*1){
      noe.setAttribute("src", "/noe1_d.f585e420.png");
    }
    else if(change_img > (speed/12)*1 && change_img < (speed/12)*2){
      noe.setAttribute("src", "/noe2_d.7af8ec46.png");
    }
    else if(change_img > (speed/12)*2 && change_img < (speed/12)*3){
      noe.setAttribute("src", "/noe3_d.7397d153.png");
    }
    else if(change_img > (speed/12)*3 && change_img < (speed/12)*4){
      noe.setAttribute("src", "/noe4_d.8eec50df.png");
    }
    else if(change_img > (speed/12)*4 && change_img < (speed/12)*5){
      noe.setAttribute("src", "/noe5_d.b173238f.png");
    }
    else if(change_img > (speed/12)*5 && change_img < (speed/12)*6){
      noe.setAttribute("src", "/noe6_d.ecc1be59.png");
    }
    else if(change_img > (speed/12)*6 && change_img < (speed/12)*7){
      noe.setAttribute("src", "/noe7_d.8ca6d5c5.png");
    }
    else if(change_img > (speed/12)*7 && change_img < (speed/12)*8){
      noe.setAttribute("src", "/noe8_d.92a95669.png");
    }
    else if(change_img > (speed/12)*8 && change_img < (speed/12)*9){
      noe.setAttribute("src", "/noe9_d.9e7e500e.png");
    }
    else if(change_img > (speed/12)*9 && change_img < (speed/12)*10){
      noe.setAttribute("src", "/noe10_d.f568b948.png");
    }
    else if(change_img > (speed/12)*10 && change_img < (speed/12)*11){
      noe.setAttribute("src", "/noe11_d.b6d3651c.png");
    }
    else{
      noe.setAttribute("src", "/noe12_d.0a80e69a.png");
    }
  }
  else if((change_img-direction) < 0 && (change_img-direction) > -5){
    if(change_img > (speed/12)*0 && change_img < (speed/12)*1){
      noe.setAttribute("src", "/noe1_g.1c6dd27d.png");
    }
    else if(change_img > (speed/12)*1 && change_img < (speed/12)*2){
      noe.setAttribute("src", "/noe2_g.0c2eb620.png");
    }
    else if(change_img > (speed/12)*2 && change_img < (speed/12)*3){
      noe.setAttribute("src", "/noe3_g.76fd67be.png");
    }
    else if(change_img > (speed/12)*3 && change_img < (speed/12)*4){
      noe.setAttribute("src", "/noe4_g.6b47c767.png");
    }
    else if(change_img > (speed/12)*4 && change_img < (speed/12)*5){
      noe.setAttribute("src", "/noe5_g.356b5dc7.png");
    }
    else if(change_img > (speed/12)*5 && change_img < (speed/12)*6){
      noe.setAttribute("src", "/noe6_g.09fbdc99.png");
    }
    else if(change_img > (speed/12)*6 && change_img < (speed/12)*7){
      noe.setAttribute("src", "/noe7_g.70448662.png");
    }
    else if(change_img > (speed/12)*7 && change_img < (speed/12)*8){
      noe.setAttribute("src", "/noe8_g.ddc8679a.png");
    }
    else if(change_img > (speed/12)*8 && change_img < (speed/12)*9){
      noe.setAttribute("src", "/noe9_g.80143eef.png");
    }
    else if(change_img > (speed/12)*9 && change_img < (speed/12)*10){
      noe.setAttribute("src", "/noe10_g.fec2a7bf.png");
    }
    else if(change_img > (speed/12)*10 && change_img < (speed/12)*11){
      noe.setAttribute("src", "/noe11_g.099b9e6f.png");
    }
    else{
      noe.setAttribute("src", "/noe12_g.f6fded6e.png");
    }
  }

  direction = change_img;
});
