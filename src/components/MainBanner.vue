<template>
  <div id="main-banner" class="main-banner">
    <div class="mob-pic__wrapper"><img src="~@/assets/img/main-banner.jpg" alt="" class="mob-pic"></div>
    <h1 class="title">Брендова Парфумерія ГУРТОМ</h1>
    <div class="btn" @click="$emit('click')">ОТРИМАТИ КАТАЛОГ ПРОДУКЦІЇ</div>
  </div>
</template>

<script>
  export default {
    name: 'MainBanner'
  }
</script>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  height: calc(100vh - 72px);
  min-height: 580px;
  max-width: 100%;
  padding: 0 15px;
  background-image: url("~@/assets/img/main-banner.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    background-color: rgba(64, 60, 60, 0.43);

    @include r-max(480) {
      display: none;
    }
  }

  .mob-pic {
    &__wrapper {
      display: none;
      position: relative;

      &:after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: '';
        background-color: rgba(64, 60, 60, 0.38);
      }

      @include r-max(480) {
        display: block;
      }
    }

    @include r-max(480) {
      display: block;
      width: 100%;
    }
  }

  .title {
    position: relative;
    display: block;
    z-index: 1;
    padding-top: 300px;
    padding-bottom: 60px;
    text-align: center;
    font-weight: 600;
    font-size: 85px;
    color: #FFFFFF;

    &:before {
      display: none;

      @include r-max(480) {
        display: block;
        position: absolute;
        z-index: -1;
        left: 20px;
        bottom: -17px;
        width: 50px;
        height: 152px;
        content: '';
        background-image: url("~@/assets/img/icons/lavender.svg");
        background-size: contain;
        background-repeat: no-repeat;
        opacity: .43;
      }
    }

    @include r-max(1500) {
      padding-top: 193px;
      padding-bottom: 44px;
      font-size: 75px;
    }

    @include r-max(900) {
      padding-top: 0px;
      font-size: 64px;
    }

    @include r-max(480) {
      max-width: 390px;
      margin: 0 auto;
      padding: 44px 10px;
      font-size: 36px;
      text-transform: uppercase;
      color: $txt-color;
    }
  }

  .btn {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 366px;
    max-width: 100%;
    height: 71px;
    margin: 0 auto;
    justify-content: center;
    font-weight: 700;
    font-size: 19px;
    color: $txt-color;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF3DB 100%);
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.25), 2px 7px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    transition: box-shadow .25s ease-in;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, 0.25);
    }

    @include r-max(1500) {
      width: 360px;
      height: 65px;
    }

    @include r-max(900) {
      width: 325px;
      height: 60px;
      font-size: 16px;
    }

    @include r-max(480) {
      background: linear-gradient(180deg, #FFF3DB 0%, #D7B26A 100%);
    }

    @include r-max(345) {
      width: auto;
      margin: 0 10px;
    }
  }

  @include r-max(1500) {
    height: calc(100vh - 62px);
    min-height: 500px;
  }

  @include r-max(900) {
    height: auto;
    min-height: auto;
    padding: 150px 20px;
    background-attachment: scroll;
  }

  @include r-max(480) {
    background: none;
    padding: 0;
  }
}
</style>