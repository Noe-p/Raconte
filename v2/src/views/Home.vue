<template>
<div class="stickman">
  <div class="noe">
    <img class="open" src="@/assets/img/stickman/noe_stop.png" alt="noeStop">
    <img src="@/assets/img/stickman/noe1.png" alt="noe1">
    <img src="@/assets/img/stickman/noe2.png" alt="noe2">
    <img src="@/assets/img/stickman/noe3.png" alt="noe3">
    <img src="@/assets/img/stickman/noe4.png" alt="noe4">
    <img src="@/assets/img/stickman/noe5.png" alt="noe5">
    <img src="@/assets/img/stickman/noe6.png" alt="noe6">
    <img src="@/assets/img/stickman/noe7.png" alt="noe7">
    <img src="@/assets/img/stickman/noe8.png" alt="noe8">
    <img src="@/assets/img/stickman/noe9.png" alt="noe9">
    <img src="@/assets/img/stickman/noe10.png" alt="noe10">
    <img src="@/assets/img/stickman/noe11.png" alt="noe11">
    <img src="@/assets/img/stickman/noe12.png" alt="noe12">
  </div>
  <div class="vanille">
    <img class="open" src="@/assets/img/stickman/vanille_stop.png" alt="vanilleStop">
    <img src="@/assets/img/stickman/vanille1.png" alt="vanille1">
    <img src="@/assets/img/stickman/vanille2.png" alt="vanille2">
    <img src="@/assets/img/stickman/vanille3.png" alt="vanille3">
    <img src="@/assets/img/stickman/vanille4.png" alt="vanille4">
    <img src="@/assets/img/stickman/vanille5.png" alt="vanille5">
    <img src="@/assets/img/stickman/vanille6.png" alt="vanille6">
    <img src="@/assets/img/stickman/vanille7.png" alt="vanille7">
    <img src="@/assets/img/stickman/vanille8.png" alt="vanille8">
    <img src="@/assets/img/stickman/vanille9.png" alt="vanille9">
    <img src="@/assets/img/stickman/vanille10.png" alt="vanille10">
    <img src="@/assets/img/stickman/vanille11.png" alt="vanille11">
    <img src="@/assets/img/stickman/vanille12.png" alt="vanille12">
  </div>
</div>

<main data-scroll-container="">
  <div class="content">
    <div class="gallery">
      <header>
        <span class="title1" data-scroll="" data-scroll-speed="5" data-scroll-direction="vertical">
          Raconte
        </span>
        <span class="title2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical">Ceci est une petite citation.</span>
      </header>

      <figure class="gallery__item" data-scroll data-scroll-speed="1">
        <h2>Anthony et Yann</h2>

        <div class="gallery__item-img">
          <img src="@/assets/img/anthony-yann.webp" alt="antonio-yann">
          <div class="description">
            <p>Rencontre dans un camping perdu <br>dans le désert des Agriates en Corse. <br>Anthony et Yann sont chargés de<br> s'occuper du potager du camping.</p>
          </div>
          <a href="#" class="ay">
            <svg class="macaron" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path id="curve" fill="transparent" d="
                  M 200, 200
                  m -160, 0
                  a 160,160 0 1,0 320,0
                  a 160,160 0 1,0 -320,0" />
              <text>
                <textPath href="#curve" fill="#b4630e">
                  voir le reportage
                </textPath>
              </text>
            </svg>
          </a>
        </div>
      </figure>

    </div>
    <a class="arrow-top" href="#"><img src="@/assets/img/flecheTop.png" alt="flecheTop"></a>
  </div>
</main>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'Home',
  components: {

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

.stickman {
    position: absolute;
    z-index: 90;

    .noe img,
    .vanille img {
        opacity: 0;
        height: 110px;
        position: fixed;
        bottom: 10px;
    }

    .vanille img {
        left: 48%;
    }
    .noe img {
        left: 52%;
    }
    .noe img.open,
    .vanille img.open {
        opacity: 1;
    }

    .noe img.open_reverse,
    .vanille img.open_reverse {
        opacity: 1;
        transform: scaleX(-1);
    }
}

.stickman.hidden {
    display: none;
}

.gallery__item {
    margin: 0 180px 0 30px;
    display: flex;
    flex-direction: column;
    width: 420px;
    word-break: break-all;

    h2 {
        font-family: 'Titre';
        color: white;
        text-align: center;
        margin: 10px;
    }

    .gallery__item-img {
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .description {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 0;
            overflow: hidden;
            opacity: 0;
            display: flex;
            justify-content: center;
            max-height: 80%;

            p {
                color: white;
                text-align: center;
            }
        }

        &:hover .description {
            max-width: 80%;
            opacity: 1;
            transition: max-width 0.5s;
            transition-delay: 0.3s;
            transition-timing-function: ease-out;
        }

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(31, 31, 31, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.2s;
        }

        &:hover::before {
            opacity: 1;
        }

        .macaron {
            position: absolute;
            width: 150px;
            top: -75px;
            left: -75px;
            font-family: Titre;
            font-size: 7.3em;
            animation-name: rotate-macaron;
            animation-duration: 60s;
            animation-iteration-count: infinite;
            transform: rotate(0deg);
            animation-timing-function: linear;
            letter-spacing: 10px;
            border-radius: 50%;
            border: solid 1px #b4630e;
        }

        .macaron:hover {
            animation-name: macaron-hover;
            animation-duration: 0.5s;
            animation-iteration-count: 1;
        }

        @keyframes rotate-macaron {
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes macaron-hover {
            100% {
                transform: rotate(360deg);
            }
        }
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

    .gallery__item {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        margin-top: 130px;

        &::before {
            content: '';
            display: block;
            position: relative;
            top: -30px;
            width: 50%;
            height: 1px;
            background-color: white;
        }

        .gallery__item-img {
            width: 95%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 30px;

            .description {
                position: inherit;
                top: 10px;
                left: 0;
                transform: translate(-0, 0);
                max-width: 100%;
                opacity: 1;
            }

            &:hover .description {
                max-width: 100%;
            }

            &:hover::before {
                opacity: 0;
            }

            .macaron {
                position: relative;
                display: flex;
                width: 110px;
                top: 0;
                left: 0;
                font-size: 7.2em;
                margin-top: 20px;
            }
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
