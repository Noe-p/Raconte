<template lang="html">
<figure class="gallery__item" data-scroll data-scroll-speed="1">
  <h2>Anthony et Yann</h2>

  <a href="#">
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
  </a>
</figure>
</template>

<script>
import { reportages } from '@/data.js'

export default {
  name: 'Reportage',
  mounted: function () {
    console.log(reportages[0].description);
  }
}
</script>

<style lang="scss" scoped >
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

@media all and (max-device-width:800px) {
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
}
</style>
