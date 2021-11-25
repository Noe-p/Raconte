<template>
<div>
<Stickman />

<main data-scroll-container="">
  <div class="content">
    <div class="gallery">
      <header>
        <span class="title1" data-scroll="" data-scroll-speed="5" data-scroll-direction="vertical">
          Raconte
        </span>
        <span class="title2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical">
          {{ this.reportages[0].titre }}
        </span>
      </header>

      <Reportage />

    </div>
    <a class="arrow-top" href="#"><img src="@/assets/img/flecheTop.png" alt="flecheTop"></a>
  </div>
</main>
</div>
</template>

<script>
import { reportages } from '@/data.js'
import LocomotiveScroll from 'locomotive-scroll';
import Stickman from '@/components/Stickman.vue';
import Reportage from '@/components/Reportage.vue';

export default {
  name: 'Home',
  components: {
    Stickman,
    Reportage
  },
  data () {
    return {
      reportages: []
    }
  },
  beforeMount(){
    this.reportages = reportages;
  },
  mounted (){
    document.querySelector('.navbar').classList.remove('white');
    document.querySelector('.item-home').classList.remove('open');
    document.querySelector('.item-about').classList.remove('open');
    document.querySelector('.item-menu').classList.remove('open');
    document.querySelector('.item-home').classList.add('open');


    // Scroll horizontal
    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',

      mobile: {
        direction: 'vertical'
      }
    });

    // Animation stickman
    let vanille = document.querySelector('.vanille');
    let noe = document.querySelector('.noe');

    let direction = 0;
    let speed = 300;
    let stop = 1;
    let nb_stick = noe.childElementCount;
    let reverse = null;

    lscroll.on('scroll', (obj) => {
      let change_img = obj.scroll.x % speed;

      function switch_img(stickman, i, reverse) {
        for (var j = 0; j < nb_stick; j++) {
          stickman.children[j].classList.remove('open');
          stickman.children[j].classList.remove('open_reverse');
        }
        if (reverse == 1) {
          stickman.children[i].classList.add('open_reverse');
        } else {
          stickman.children[i].classList.add('open');
        }
      }

      if (stop) {
        setTimeout(function() {
          stop = 1;
          switch_img(noe, 0, null);
          switch_img(vanille, 0, null);
        }, 500);
        stop = 0;
      }

      if ((change_img - direction) > 0 && (change_img - direction) < 5) {
        reverse = null;
      } else if ((change_img - direction) < 0 && (change_img - direction) > -5) {
        reverse = 1;
      }

      if (change_img > (speed / nb_stick) * 0 && change_img < (speed / nb_stick) * 1) {
        switch_img(noe, 1, reverse);
        switch_img(vanille, 1, reverse);
      } else if (change_img > (speed / nb_stick) * 1 && change_img < (speed / nb_stick) * 2) {
        switch_img(noe, 2, reverse);
        switch_img(vanille, 2, reverse);
      } else if (change_img > (speed / nb_stick) * 2 && change_img < (speed / nb_stick) * 3) {
        switch_img(noe, 3, reverse);
        switch_img(vanille, 3, reverse);
      } else if (change_img > (speed / nb_stick) * 3 && change_img < (speed / nb_stick) * 4) {
        switch_img(noe, 4, reverse);
        switch_img(vanille, 4, reverse);
      } else if (change_img > (speed / nb_stick) * 4 && change_img < (speed / nb_stick) * 5) {
        switch_img(noe, 5, reverse);
        switch_img(vanille, 5, reverse);
      } else if (change_img > (speed / nb_stick) * 5 && change_img < (speed / nb_stick) * 6) {
        switch_img(noe, 6, reverse);
        switch_img(vanille, 6, reverse);
      } else if (change_img > (speed / nb_stick) * 6 && change_img < (speed / nb_stick) * 7) {
        switch_img(noe, 7, reverse);
        switch_img(vanille, 7, reverse);
      } else if (change_img > (speed / nb_stick) * 7 && change_img < (speed / nb_stick) * 8) {
        switch_img(noe, 8, reverse);
        switch_img(vanille, 8, reverse);
      } else if (change_img > (speed / nb_stick) * 8 && change_img < (speed / nb_stick) * 9) {
        switch_img(noe, 9, reverse);
        switch_img(vanille, 9, reverse);
      } else if (change_img > (speed / nb_stick) * 9 && change_img < (speed / nb_stick) * 10) {
        switch_img(noe, 10, reverse);
        switch_img(vanille, 10, reverse);
      } else if (change_img > (speed / nb_stick) * 10 && change_img < (speed / nb_stick) * 11) {
        switch_img(noe, 11, reverse);
        switch_img(vanille, 11, reverse);
      } else {
        switch_img(noe, 12, reverse);
        switch_img(vanille, 12, reverse);
      }

      direction = change_img;

    });

    //Responsive

    if (screen.width <= 480) {
      let stickman = document.querySelector('.stickman');

      stickman.classList.add('hidden');
    }
  }
}

</script>

<style lang="scss">
body {
    background-color: #121a27;
}

.content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    justify-content: flex-start;
    background-color: #121a27;
    justify-content: center;
}

.gallery {
    display: flex;
    margin-left: 12vw;
    padding-right: 12vw;
}

header {
    width: 50vw;
    line-height: 0.8;
    margin: 20vh 11vw 0 7vw;
    text-align: left;

    .title1 {
        font-family: 'Titre';
        color: white;
        font-size: 10vw;
        display: block;
    }

    .title2 {
        font-family: 'Titre';
        color: white;
        font-size: 1.5vw;
        display: block;
    }
}


.arrow-top {
    display: none;
    width: 0;
    height: 0;
}

@media all and (max-device-width:800px) {
    .content {
        display: flex;
        align-items: center;
        height: auto;
        width: auto;
        position: absolute;
        top: 0;
        opacity: 1;

        transition: all 1s ease-out;
        transition-delay: 0.3s;
    }

    .content.hidden {
        opacity: 0;
        top: 150px;
    }

    .gallery {
        display: block;
        margin-left: 0;
        padding-right: 0;
        width: 95%;
    }

    header {
        width: auto;
        line-height: 0.8;
        margin: 30vh 0 300px 10px;
        text-align: left;

        .title1 {
            font-size: 5em;
            width: auto;
        }

        .title2 {
            margin-top: 30px;
            font-size: 1.5em;
            display: block;
        }
    }



    .arrow-top {
        display: block;
        margin-top: 100px;
        margin-bottom: 50px;

        img {
            width: 50px;
        }
    }
}
</style>
