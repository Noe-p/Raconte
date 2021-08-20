<template>
  <aside class="navbar">
    <router-link to="/" class="item-home open">Raconte</router-link>
    <div class="item_nav_left">
      <router-link to="/menu" class="item-menu">Menu</router-link>
      <router-link to="/about" class="item-about">À propos</router-link>
    </div>
  </aside>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar.white{
  a{
    color: #121a27;
  }

  a::before{
    background-color: #121a27;
  }
}

.navbar{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  height: 50px;
  position:fixed;
  top: 0;
  z-index: 90;
  width: 100vw;

  a{
    font-family: 'Text';
    color:white;
    text-decoration: none;
    position: relative;
    margin-left: 30px;
    margin-right: 30px;
  }

  a:hover{
    cursor: pointer;
  }

  .item-home{
    position: absolute;
    left: 10px;
  }

  a::before{
    position: absolute;
    content:'';
    display: block;

    top: 100%;
    left: 0;
    height: 1.5px;
    background-color: white;
  }

    a.open::before{
      width: 100%;
    }

  a::before{
    width: 0;
    transition: width 0.3s;
  }

  a:hover::before{
    width: 100%;
  }
}

@media all and (max-device-width:480px) {
  .navbar{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content:space-around;

    .item-home{
      position: relative;
      left: 0;
    }

    .item_nav_left{
      display: inline-flex;
    }

    a{
      position: relative;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

</style>
<style lang="scs" src="@/style/style.scss"></style>
<style src="@/style/locomotive-scroll.css"></style>
