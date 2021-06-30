//loader
const loader = document.querySelector('.loader');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

window.addEventListener('load', () => {
  loader.classList.add('hidden');

  if(menu){
    menu.classList.remove('hidden');
  }
  if(about){
    about.classList.remove('hidden');
  }
});
