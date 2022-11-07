<template>
  <div id="main-header" class="main-header fix-blc">
    <h2 class="logo">aromaxit</h2>
    <nav class="nav">
      <ul class="menu-list">
        <li
          v-for="(item, id) in items"
          :key="`item-${id}`"
          class="menu-item"
        >
          <a href="#" v-scroll-to="item.id">{{ item.txt }}</a>
        </li>
      </ul>
      <div class="btn" @click="$emit('click')">Замовити дзвінок</div>
    </nav>
    <!--<nav>-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</nav>-->
  </div>
</template>

<script>
  import ModalWindow from './ModalWindow/ModalLayout'
  export default {
    name: 'MainHeader',
    components: { ModalWindow },
    data () {
      return {
        items: [
          {
            txt: 'Про компанію',
            id: '#why-aromahit'
          },
          {
            txt: 'Каталог',
            id: '#catalog'
          },
          {
            txt: 'Наші переваги',
            id: '#our-benefits'
          },
          {
            txt: 'Співпраця',
            id: '#cooperation'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 80px 0 200px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  .logo {
    font-weight: 600;
    font-size: 32px;
    text-transform: uppercase;
    color: $txt-color-brown;

    @include r-max(1500) {
      font-size: 24px;
    }

    @include r-max(480) {
      font-size: 22px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .menu-list {
    display: flex;
    align-items: center;
    padding-right: 30px;

    @include r-max(1200) {
      padding-right: 20px;
    }

    @include r-max(700) {
      display: none;
    }
  }

  .menu-item {
    position: relative;
    display: block;
    margin-left: 67px;
    font-size: 21px;
    font-weight: 600;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: -3px;
      width: 0;
      height: 1px;
      background-color: $txt-color;
      transition: width 0.5s;
    }

    &:hover {
      &:after {
        width: 100%;
        left: 0;
        transition: width 0.5s;
      }
    }

    @include r-max(1500) {
      font-size: 18px;
    }

    @include r-max(1200) {
      margin-left: 20px;
    }

    @include r-max(900) {
      text-align: center;
      font-size: 16px;
    }
  }

  .btn {
    display: flex;
    width: 240px;
    height: 43px;
    align-items: center;
    justify-content: center;
    background: $txt-color-brown;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: #fff;
    border: 1px solid transparent;
    transition: all .4s ease-out;

    &:hover {
      border-color: $txt-color-brown;
      background-color: #fff;
      color: $txt-color-brown;
      cursor: pointer;
    }

    @include r-max(1500) {
      width: 172px;
      height: 33px;
      font-size: 13px;
    }

    @include r-max(900) {
      width: 160px;
      font-size: 12px;
    }
  }

  @include r-max(1500) {
    height: 62px;
  }

  @include r-max(900) {
    padding-left: 24px;
  }

  @include r-max(480) {
    height: 55px;
    padding: 0 10px;
  }
}
</style>