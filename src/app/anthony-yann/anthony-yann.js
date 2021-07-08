
// onClick
const itemRaconte = document.querySelector('.item_nav_index');
const loader = document.querySelector('.loader');

const ay = document.querySelector('.ay');
const itemMenu = document.querySelector('.item-menu');
const itemAbout = document.querySelector('.item-about');


itemRaconte.onclick = function(){
  loader.classList.add('open');
  ay.classList.add('hidden');

  setTimeout(() => {  window.location.replace("../../index.html"); }, 1000);
};

itemMenu.onclick = function(){
  loader.classList.add('open');
  ay.classList.add('hidden');

  setTimeout(() => {  window.location.replace("menu.html"); }, 1000);
};

itemAbout.onclick = function(){
  loader.classList.add('open');
  ay.classList.add('hidden');

  setTimeout(() => {  window.location.replace("about.html"); }, 1000);
};

// Description image

const cursor = document.querySelector('.cursor');
const indiceLeCampement = document.querySelector('.indice-leCampement');
const leCampement = document.querySelector('#le-campement');
const text = document.querySelector('.text');

const indiceIntro = document.querySelector('.indice-intro');
const intro = document.querySelector('#intro');
const textIntro = document.querySelector('.text-intro');

setTimeout(() => {
  var height = document.body.scrollHeight - window.innerHeight;
  indiceLeCampement.setAttribute("style", "left: "+leCampement.offsetTop / height * 100+"%;");
  indiceIntro.setAttribute("style", "left: "+0+"%;");

  window.addEventListener('scroll', () => {
    cursor.setAttribute("style", "left: "+window.scrollY / height * 100+"%;");

    if((window.scrollY >= 0) && (window.scrollY <= leCampement.offsetTop)){
      textIntro.classList.add('open');
    }
    else{
      textIntro.classList.remove('open');
    }

    if(window.scrollY >= leCampement.offsetTop){
      text.classList.add('open');
    }
    else{
      text.classList.remove('open');
    }



    if((window.scrollY <= 50) || (window.scrollY >= leCampement.offsetTop - 50 ) && (window.scrollY <= leCampement.offsetTop + 50)){
      cursor.classList.add('hover-indice');
    }
    else{
      cursor.classList.remove('hover-indice');
    }

  });
}, 1000);
