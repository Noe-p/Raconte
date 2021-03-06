// scrollBar

/*
Ajouter la balise :
  <div class="scrollBar"></div>

puis ajouter un titre h2 avec un id :
  <h2 id="campement">Le campement</h2>

*/

const scrollBar = document.querySelector('.scrollBar');
const titres = document.getElementsByTagName('h2');

//Création du DOM :
let pText = document.createElement('p');
scrollBar.append(pText);

let aIntro = document.createElement('a');
scrollBar.append(aIntro);
aIntro.setAttribute("href", "#scroll-intro");
document.body.setAttribute("id", "scroll-intro");

let divCursor = document.createElement('div');
scrollBar.append(divCursor);
divCursor.setAttribute("class", "cursor");

for (var i = titres.length-1; i >= 0; i--) {
  let aPointer = document.createElement('a');
  scrollBar.prepend(aPointer);
  aPointer.setAttribute("href", "#"+titres[i].attributes.id.nodeValue);
}

const cursor = document.querySelector('.cursor');

// Delay car animation de loader (1s)
setTimeout(() => {
  // Taille de la page
  var height = document.body.scrollHeight - window.innerHeight;

  // Position des pointers des titres
  for (var i = 0; i < titres.length; i++) {
    scrollBar.children[i].setAttribute("style", "left: "+ titres[i].offsetTop / height * 100+"%;");
  }

  window.addEventListener('scroll', () => {
    // Position du curseur :
    cursor.setAttribute("style", "left: "+window.scrollY / height * 100+"%;");

    // Text Titre
    function textTitre(){
      // Introduction
      if(window.scrollY < titres[0].offsetTop){
        pText.textContent = "Introduction";
      }

      // Text des titre
      for (var i = 0; i < titres.length; i++) {
        if(window.scrollY >= titres[i].offsetTop){
          pText.textContent = titres[i].innerHTML;
        }
      }
    }
    textTitre();


    // Animation curseur au passage d'un pointer
    if(window.scrollY <= 200){
      cursor.classList.add('hover-indice');
    }
    else{
      cursor.classList.remove('hover-indice');
    }

    for (var i = 0; i < titres.length; i++) {
      if((window.scrollY >= titres[i].offsetTop - 200 ) && (window.scrollY <= titres[i].offsetTop + 200)){
        cursor.classList.toggle('hover-indice');
      }
    }

    // Hover des pointers
    for (var i = 0; i < titres.length; i++) {
      let indice = titres[i];
      scrollBar.children[i].onmouseover = function(){
        pText.textContent = indice.innerHTML;
      };
      aIntro.onmouseover = function(){
        pText.textContent = "Introduction";
      };

      scrollBar.children[i].onmouseout = function(){
        textTitre();
      };
      aIntro.onmouseout = function(){
        textTitre();
      };
    }

  });
}, 1000);
