//loader
const loader = document.querySelector('.loader');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');
const content = document.querySelector('.content');
const ay = document.querySelector('.ay');

window.addEventListener('load', () => {
  loader.classList.add('hidden');

  document.documentElement.classList.remove('hidden');
  if(menu){
    menu.classList.remove('hidden');
  }
  if(about){
    about.classList.remove('hidden');
  }
  if(content){
    content.classList.remove('hidden');
  }
  if(ay){
    ay.classList.remove('hidden');
  }
});
