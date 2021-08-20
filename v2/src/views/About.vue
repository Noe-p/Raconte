<template>
  <main data-scroll-container="">
    <section class="about">
      <div class="info">
        <h1>À la recherche de vie atypique, nous essayons de partager des personnalités inspirantes et passionnées.</h1>
        <div class="header">
          <h2>Ces reportages sont des témoignages de personnes qui nous ont touchées et marquées.</h2>
          <div class="img-about">
            <img src="../assets/img/about/vanille.jpg" alt="vanille">
            <p class="desc-left small">Vanille face à la lune rousse - Ajaccio</p>
          </div>
        </div>
      </div>

      <div class="noe-about">
        <h1>Noé - Photographie</h1>
        <div class="info-noe">
          <div class="img-abeille">
            <img src="../assets/img/about/abeille.jpg" alt="abeille">
            <p class="desc-bottom small">Bateau "L'Abeille Bourbon" - Brest</p>
          </div>
          <article>
            <h2>Je suis étudiant en développement web et mobile à la Sorbonne sur Paris et photographe amateur.</h2>
            <p>J'aime beaucoup la photographie de paysages. J'ai pu prendre plusieurs clichés de la ville de Brest pendant mes années d'études. C'est dans cette ville que j'ai découvert la photographie.</p>
            <p>Depuis peu, je me suis intéressé à la photo de reportage. Vanille, quant à elle, est passionnée d'écriture. On s'est dit que "Raconte" serait un bon moyen de nous compléter. Avec notre premier reportage d'Anthony et Yann en Corse, nous avons tout de suite compris qu'on était sur la même longueur d'onde. En plus de rencontrer des gens formidables, on peut transmettre leurs idées, leurs passions...</p>
            <p>Nous espérons pouvoir continuer ce projet et le compléter par d'autres reportages.</p>
          </article>
        </div>
      </div>

      <div class="rapp">
        <h2>Si vous êtes intéressés par notre travail, vous pouvez nous contacter !</h2>
      </div>

      <div class="contact">
        <h1>Contact</h1>
        <article>
          <p><B>Instagram :</B> @raconte-reportage</p>
          <p><B>Mail :</B>   <a href="mailto:reportage.raconte@gmail.com">reportage.raconte@gmail.com</a></p>
          <p><B>Téléphone :</B> <a href="tel:0781533181">07 81 53 31 81</a><br><br><br></p>

          <p><B>Texte :</B> Vanille LAGADEC</p>
          <p><B>Photographie - Développement/Design :</B> <a target='blank' href="https://noe-philippe.com">Noé PHILIPPE</a></p>
        </article>
      </div>

    </section>
  </main>
</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll';

  export default {
    name: 'About',
    mounted (){
      document.querySelector('.navbar').classList.add('white');
      document.querySelector('.item-home').classList.remove('open');
      document.querySelector('.item-about').classList.remove('open');
      document.querySelector('.item-menu').classList.remove('open');
      document.querySelector('.item-about').classList.add('open');

      // Scroll vertical
      new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          direction: 'vertical'
      });
    }
  }
</script>

<style lang="scss" src="@/style/description-img.scss"></style>
<style lang="scss">
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: #121a27;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100vh;
  overflow-x: hidden;
  text-align: left;

  h1{
    font-family: 'Text-titre';
    font-size: 3vw;
  }

  h2{
    font-family: 'Text-bold';
    font-size: 1.5vw;
    color: rgb(62, 62, 62);
  }

  p{
    font-size: 1.2vw;
  }

  transition: all 1s ease-out;
  transition-delay: 0.5s;
}

.info{
  display: flex;
  flex-direction: column;
  width: 90%;

  h1{
    width: 70%;
  }

  .header {
    display: inline-flex;
    justify-content:space-between;

    h2{
      width: 30%;
    }

    .img-about{
      position: relative;
      img{
        width: 60vw;
      }
    }
  }
}

.noe-about{
  display: flex;
  flex-direction: column;
  width: 90%;

  .info-noe{
    display: flex;
    justify-content: space-around;
    align-items: center;

    .img-abeille{
      position: relative;

      img{
        width: 50vw;
      }
    }

    article{
      display: flex;
      flex-direction: column;
      width: 35%;
    }
  }
}

.rapp{
  position: relative;
  margin-top: 70px;
}

.contact{
  width: 90%;
  a{
    color: black;
    transition: color 0.2s ;
  }

  a:hover{
    color: #b4630e;
  }
}

@media all and (max-device-width:800px) {

  .about{
    top: 100px;
    align-items: center;
    display: flex;
    width: 100vw;
    margin: 0;

    h1{
      font-size: 7vw;
      width: 100%;
    }

    h2{
      font-size: 4.2vw;
    }

    p{
      font-size: 3.4vw;
    }
  }

  .info{
    width: 95%;
    margin: 0;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;


      h2{
        width: 100%;
      }

      .img-about{
        position: relative;
        display:flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        img{
          position: relative;
          top: 0;
          width: 70%;
        }

        p{
          position: relative;
          top: 0;
          left:0;
          width: 20%;
          font-size: 3vw;

          span{
            position: absolute;
            font-size: 2em;
            top: 45%;
            margin-left:30%;
          }
        }
      }
    }
  }

  .noe-about{
    width: 95%;
    top: 20px;

    .info-noe{
      display: flex;
      flex-direction: column-reverse;

      .img-abeille{
        top: 10vw;

        img{
          width: 100%;
        }

        p{
          position: relative;
          left:50%;
          transform: translateX(-50%);
          width: 100px;
          font-size: 3vw;

          span{
            font-size: 2em;
          }
        }
      }

      article{
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }

  .rapp, .contact{
    top:100px;
    width: 95%;
  }

  .contact{
    padding-bottom: 50px;
  }
}

</style>
