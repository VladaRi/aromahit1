<template>
  <div class="main-footer">
    <div class="wrap">
      <h2 class="logo blc" v-scroll-to="'#main-header'">aromaxit</h2>
      <nav class="blc">
        <span class="footer-title">КЛІЄНТАМ</span>
        <ul class="menu-list">
          <li
            v-for="(item, id) in items"
            :key="`item-${id}`"
            class="menu-item"
          >
            <a href="#" v-scroll-to="item.id">{{ item.txt }}</a>
          </li>
        </ul>
      </nav>
      <div class="blc">
        <span class="footer-title">КОНТАКТНА ІНФОРМАЦІЯ</span>
        <a href="tel:+380505772372" class="menu-item">+380505772372</a>
        <a href="tel:+380681106968" class="menu-item">+380681106968</a>
        <a href="mailto:Tradearomaxit@gmail.com" class="menu-item">tradearomaxit@gmail.com</a>
        <a class="menu-item agreement">Угода користувача</a>
      </div>
    </div>
    <div class="bottom-side wrap">
      <span class="freepik">Image by <a href="https://www.freepik.com">Freepik</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainFooter',
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
.main-footer {
  position: relative;

  &:after {
    position: absolute;
    bottom: 21px;
    left: 0;
    width: 65px;
    height: 191px;
    content: '';
    background-image: url("~@/assets/img/icons/lavender.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @include r-max(1500) {
      height: 170px;
    }
  }

  .wrap {
    display: flex;
    padding-top: 40px;
    justify-content: space-between;

    @include r-min-max(901, 1500) {
      padding-bottom: 50px;
    }

    @include r-max(650) {
      display: block;
    }
  }

  .blc {
    text-align: center;
  }

  .logo {
    font-weight: 600;
    font-size: 32px;
    text-transform: uppercase;
    color: $brown-light;
    cursor: pointer;

    @include r-max(1500) {
      font-size: 24px;
    }

    @include r-max(480) {
      font-size: 22px;
    }
  }

  .footer-title {
    display: block;
    padding-top: 10px;
    font-size: 22px;
    font-weight: 700;
    color: $txt-color;

    @include r-max(1500) {
      font-size: 18px;
    }

    @include r-max(900) {
      padding-top: 0;
    }

    @include r-max(650) {
      padding-top: 40px;
    }

    @include r-max(480) {
      font-size: 18px;
    }
  }

  .menu-item {
    display: block;
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
    color: $txt-color;

    &.agreement {
      display: inline-block;
      border-bottom: 1px solid $txt-color;
    }

    @include r-max(1500) {
      font-size: 18px;
    }
  }

  .bottom-side {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: $brown-light;
    justify-content: flex-end;

    .freepik {
      color: #fff;
      font-weight: 600;
      font-size: 17px;

      a {
        color: #fff;
        text-transform: uppercase;
      }

      @include r-max(1500) {
        font-size: 15px;
      }
    }
  }
}
</style>