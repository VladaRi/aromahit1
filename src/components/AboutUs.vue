<template>
  <div class="about-us wrap">
    <div class="txt-blc">
      <p class="txt-blc__item">Парфум - це не тільки косметичний засіб, а й невидимий одяг для жінки та візитівка будь-якого чоловіка.</p>
      <p class="txt-blc__item">Таємничі східні, ніжні квіткові, смачні цитрусові  чи розкішні пряні - обирати тільки вам, а компанія Аромахіт допоможе в цьому.</p>
    </div>
    <img src="~@/assets/img/icons/about-us-lavender-icon.svg" class="lavender-icon">
    <div :id="'why-aromahit'" class="why-aromahit">
      <h3 class="title">Чому варто обрати Аромахіт?</h3>
      <ul class="why-aromahit__list">
        <li
          v-for="(item, id) in items"
          :key="`item-${id}`"
          class="why-aromahit__item blc-subtitle"
        >{{ item.txt }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
    data () {
      return {
        items: [
          {
            txt: 'Більше 3-х років на міжнародному косметичному ринку'
          },
          {
            txt: 'Тисячі задоволених клієнтів'
          },
          {
            txt: 'Дрібна та велика гуртова торгівля'
          },
          {
            txt: 'Кваліфікована допомога в підборі парфумів'
          },
          {
            txt: 'Гарантія якості та сертифікація Halal'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.about-us {
  position: relative;

  &:before {
    position: absolute;
    right: 0px;
    bottom: -20px;
    width: 833px;
    height: 349px;
    content: '';
    background-image:  url("~@/assets/img/icons/about-us-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;

    @include r-max(900) {
      width: 68vw;
      height: 29vw;
    }
  }

  .txt-blc {
    &__item {
      font-weight: 600;
      font-size: 32px;
      color: $txt-color;
      padding-bottom: 22px;

      &:last-child {
        padding-bottom: 0;
      }

      @include r-max(1500) {
        font-size: 22px;
      }

      @include r-max(480) {
        font-size: 20px;
      }
    }
  }

  .lavender-icon {
    display: block;
    margin: 40px auto 0;
    max-width: 100%;

    @include r-max(1500) {
      margin: 30px auto 0;
    }
  }

  .why-aromahit {
    position: relative;
    padding-top: 40px;

    &__item {
      position: relative;
      margin-top: 35px;
      padding-left: 33px;

      &:before {
        position: absolute;
        top: calc(50% - 5px);
        left: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background-color: $brown-light;
        content: '';
        transform: rotate(45deg);
      }

      @include r-max(1500) {
        margin-top: 25px;
      }

      @include r-max(480) {
        padding-left: 25px;
      }
    }

    @include r-max(1500) {
      padding-top: 30px;
    }
  }
}
</style>