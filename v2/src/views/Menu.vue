<template>
  <main data-scroll-container="">
    <section class="menu">
      <figure class="reportage" data-scroll data-scroll-speed="1">
        <h1>Anthony et Yann</h1>
        <h1>Brest</h1>
        <h1>Brest</h1>
        <h1>Brest</h1>
        <h1>Brest</h1>
      </figure>
    </section>
  </main>

  <div class="front-img">
    <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
    <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
    <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
    <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
    <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
  </div>

</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll';

  export default {
    name: 'Menu',
    components: {
    },
    mounted (){
      document.querySelector('.navbar').classList.add('white');
      document.querySelector('.item-home').classList.remove('open');
      document.querySelector('.item-about').classList.remove('open');
      document.querySelector('.item-menu').classList.remove('open');
      document.querySelector('.item-menu').classList.add('open');

      // Scroll vertical
      new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          direction: 'vertical'
      });
      //Image hover
      const reportage = document.querySelector('.reportage');
      const frontImg = document.querySelector('.front-img');

      for (var i = 0; i < reportage.childElementCount; i++) {
        let reportageImg = reportage.children[i];
        let img = frontImg.children[i];

        reportageImg.onmouseover = function(){
          img.classList.add('open');
          document.addEventListener('mousemove', e => {
            img.setAttribute("style", "top: "+(e.pageY-200)+"px; left: "+(e.pageX+100)+"px;");
          })
        };

        reportageImg.onmouseout = function(){
          img.classList.remove('open');
        };
      }

    }
  }
</script>

<style lang="scss">
html.hidden{
  overflow-y: hidden;
  overflow-x: hidden;
}

html{
  overflow-x: hidden;
}

.menu{
  display: block;
  position: relative;
  top: 0;
  opacity: 1;
  background-color: white;
  color: #121a27;
  width: 100vw;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  transition: all 1s ease-out;
  transition-delay: 0.5s;
}

.menu.hidden{
  opacity: 0;
  top: 150px;
}

.reportage{
  display: flex;
  align-items: center;
  flex-direction: column;


  h1{
    font-family: 'Text-titre';
    font-size: 5vw;
    margin: 0 10px 0 0;
    padding-left: 20px;
    border-bottom: solid 1px #121a27;
    text-align: left;
    width: 90%;

    transition: all 0.3s
  }

  h1:hover{
    background-color: #121a27;
    color: white;
    cursor: pointer;
  }
}

.front-img{
  img{
    position:absolute;
    opacity: 0;
    width: 400px;
    transition: opacity 0.5s;
  }

  img.open{
    opacity: 1;
  }
}

@media all and (max-device-width:800px) {
  .menu{
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .reportage{
    position: relative;
    align-items: center;
    flex-direction: column;
    width: 95%;
    margin: 0 0 0 0;


    h1{
      font-family: 'Text-titre';
      font-size: 3em;
      margin: 0 0 0 0;
      padding-left: 0;
      text-align: left;
      width: 100%;

      transition: all 0.3s
    }
  }
  .front-img{
    display: none;
  }

}

</style>
