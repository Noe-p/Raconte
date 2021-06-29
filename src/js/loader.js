//loader
const loader = document.querySelector('.loader');
const menu = document.querySelector('.menu');

window.addEventListener('load', () => {
  loader.classList.add('hidden');

  if(menu){
    menu.classList.remove('hidden');
  }
});
