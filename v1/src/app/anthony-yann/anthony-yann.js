
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

//animation slide img

if(!mobilecheck()){
  let img = document.getElementsByTagName('div');
  setTimeout(() => {
    window.addEventListener('scroll', () => {
      for (var i = 5; i < img.length; i++) {

        if(window.scrollY > img[i].offsetTop + 300 - screen.availHeight){
          img[i].classList.remove("close");
        }else {
          img[i].classList.add("close");
        }

      }

    });

  }, 1000);
}


function mobilecheck() {
    return (typeof window.orientation !== "undefined")
      || (navigator.userAgent.indexOf('IEMobile') !== -1
      );
};
