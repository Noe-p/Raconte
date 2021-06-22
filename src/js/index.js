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
let vanille = document.querySelector('.vanille');
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
      vanille.setAttribute("src", "/vanille_stop.654beb58.png");
    }, 500);
    stop=0;
  }

  if((change_img-direction) > 0 && (change_img-direction) < 5){
    if(change_img > (speed/12)*0 && change_img < (speed/12)*1){
      noe.setAttribute("src", "/noe1_d.f585e420.png");
      vanille.setAttribute("src", "/vanille2_d.7cf80c51.png");
    }
    else if(change_img > (speed/12)*1 && change_img < (speed/12)*2){
      noe.setAttribute("src", "/noe2_d.7af8ec46.png");
      vanille.setAttribute("src", "/vanille3_d.697fa0e2.png");
    }
    else if(change_img > (speed/12)*2 && change_img < (speed/12)*3){
      noe.setAttribute("src", "/noe3_d.7397d153.png");
      vanille.setAttribute("src", "/vanille4_d.bd814307.png");
    }
    else if(change_img > (speed/12)*3 && change_img < (speed/12)*4){
      noe.setAttribute("src", "/noe4_d.8eec50df.png");
      vanille.setAttribute("src", "/vanille5_d.361e4131.png");
    }
    else if(change_img > (speed/12)*4 && change_img < (speed/12)*5){
      noe.setAttribute("src", "/noe5_d.b173238f.png");
      vanille.setAttribute("src", "/vanille6_d.5d594cb4.png");
    }
    else if(change_img > (speed/12)*5 && change_img < (speed/12)*6){
      noe.setAttribute("src", "/noe6_d.ecc1be59.png");
      vanille.setAttribute("src", "/vanille7_d.288180a5.png");
    }
    else if(change_img > (speed/12)*6 && change_img < (speed/12)*7){
      noe.setAttribute("src", "/noe7_d.8ca6d5c5.png");
      vanille.setAttribute("src", "/vanille8_d.0644e242.png");
    }
    else if(change_img > (speed/12)*7 && change_img < (speed/12)*8){
      noe.setAttribute("src", "/noe8_d.92a95669.png");
      vanille.setAttribute("src", "/vanille9_d.251cde99.png");
    }
    else if(change_img > (speed/12)*8 && change_img < (speed/12)*9){
      noe.setAttribute("src", "/noe9_d.9e7e500e.png");
      vanille.setAttribute("src", "/vanille10_d.66213bfd.png");
    }
    else if(change_img > (speed/12)*9 && change_img < (speed/12)*10){
      noe.setAttribute("src", "/noe10_d.f568b948.png");
      vanille.setAttribute("src", "/vanille11_d.9c29a4e4.png");
    }
    else if(change_img > (speed/12)*10 && change_img < (speed/12)*11){
      noe.setAttribute("src", "/noe11_d.b6d3651c.png");
      vanille.setAttribute("src", "/vanille12_d.ae5c3297.png");
    }
    else{
      noe.setAttribute("src", "/noe12_d.0a80e69a.png");
      vanille.setAttribute("src", "/vanille1_d.d3a91bda.png");
    }
  }
  else if((change_img-direction) < 0 && (change_img-direction) > -5){
    if(change_img > (speed/12)*0 && change_img < (speed/12)*1){
      noe.setAttribute("src", "/noe1_g.1c6dd27d.png");
      vanille.setAttribute("src", "/vanille2_g.1463155a.png");
    }
    else if(change_img > (speed/12)*1 && change_img < (speed/12)*2){
      noe.setAttribute("src", "/noe2_g.0c2eb620.png");
      vanille.setAttribute("src", "/vanille3_g.d0a6951e.png");
    }
    else if(change_img > (speed/12)*2 && change_img < (speed/12)*3){
      noe.setAttribute("src", "/noe3_g.76fd67be.png");
      vanille.setAttribute("src", "/vanille4_g.79d698ce.png");
    }
    else if(change_img > (speed/12)*3 && change_img < (speed/12)*4){
      noe.setAttribute("src", "/noe4_g.6b47c767.png");
      vanille.setAttribute("src", "/vanille5_g.19b1f944.png");
    }
    else if(change_img > (speed/12)*4 && change_img < (speed/12)*5){
      noe.setAttribute("src", "/noe5_g.356b5dc7.png");
      vanille.setAttribute("src", "/vanille6_g.43d642da.png");
    }
    else if(change_img > (speed/12)*5 && change_img < (speed/12)*6){
      noe.setAttribute("src", "/noe6_g.09fbdc99.png");
      vanille.setAttribute("src", "/vanille7_g.9c429dd1.png");
    }
    else if(change_img > (speed/12)*6 && change_img < (speed/12)*7){
      noe.setAttribute("src", "/noe7_g.70448662.png");
      vanille.setAttribute("src", "/vanille8_g.a9afc110.png");
    }
    else if(change_img > (speed/12)*7 && change_img < (speed/12)*8){
      noe.setAttribute("src", "/noe8_g.ddc8679a.png");
      vanille.setAttribute("src", "/vanille9_g.f79d2310.png");
    }
    else if(change_img > (speed/12)*8 && change_img < (speed/12)*9){
      noe.setAttribute("src", "/noe9_g.80143eef.png");
      vanille.setAttribute("src", "/vanille10_g.ff037739.png");
    }
    else if(change_img > (speed/12)*9 && change_img < (speed/12)*10){
      noe.setAttribute("src", "/noe10_g.fec2a7bf.png");
      vanille.setAttribute("src", "/vanille11_g.19f63a1a.png");
    }
    else if(change_img > (speed/12)*10 && change_img < (speed/12)*11){
      noe.setAttribute("src", "/noe11_g.099b9e6f.png");
      vanille.setAttribute("src", "/vanille12_g.8a369c80.png");
    }
    else{
      noe.setAttribute("src", "/noe12_g.f6fded6e.png");
      vanille.setAttribute("src", "/vanille1_g.b11ad9d7.png");
    }
  }

  direction = change_img;
});
