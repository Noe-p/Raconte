// scrollBar

/*
Ajouter la balise :
  <div class="scrollBar"></div>

puis ajouter un titre h2 avec un id :
  <h2 id="campement">Le campement</h2>

*/

const scrollBar = document.querySelector('.scrollBar');
const indiceScroll = document.getElementsByTagName('h2');

let newP = document.createElement('p');
scrollBar.append(newP);

let newA = document.createElement('a');
scrollBar.append(newA);
newA.setAttribute("href", "#scroll-intro");
document.body.setAttribute("id", "scroll-intro");

let newDiv = document.createElement('div');
scrollBar.append(newDiv);
newDiv.setAttribute("class", "cursor");

for (var i = indiceScroll.length-1; i >= 0; i--) {
  let scrollA = document.createElement('a');
  scrollBar.prepend(scrollA);
  scrollA.setAttribute("href", "#"+indiceScroll[i].attributes.id.nodeValue);
}

const cursor = document.querySelector('.cursor');

setTimeout(() => {
  var height = document.body.scrollHeight - window.innerHeight;

  for (var i = 0; i < indiceScroll.length; i++) {
    scrollBar.children[i].setAttribute("style", "left: "+ indiceScroll[i].offsetTop / height * 100+"%;");
  }

  window.addEventListener('scroll', () => {
    cursor.setAttribute("style", "left: "+window.scrollY / height * 100+"%;");

    if(window.scrollY < indiceScroll[0].offsetTop){
      newP.textContent = "Introduction";
    }

    for (var i = 0; i < indiceScroll.length; i++) {
      if(window.scrollY >= indiceScroll[i].offsetTop){
        newP.textContent = indiceScroll[i].innerHTML;
      }
    }

    if(window.scrollY <= 50){
      cursor.classList.add('hover-indice');
    }
    else{
      cursor.classList.remove('hover-indice');
    }

    for (var i = 0; i < indiceScroll.length; i++) {
      if((window.scrollY >= indiceScroll[i].offsetTop - 50 ) && (window.scrollY <= indiceScroll[i].offsetTop + 50)){
        cursor.classList.toggle('hover-indice');
      }
    }

  });
}, 1000);
