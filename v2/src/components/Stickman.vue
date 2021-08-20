<template lang="html">
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
</template>

<script>
export default {
  name: 'Stickman',
  mounted: function () {

  }
}
</script>

<style lang="scss" scoped >
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

.stickman.hidden{
	display: none;
}

@media all and (max-device-width:800px) {

}
</style>
