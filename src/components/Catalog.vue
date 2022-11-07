<template>
  <div id="catalog" class="catalog wrap">
    <div class="catalog-list">
      <div
        v-for="(item, id) in items"
        :key="`item-${id}`"
        class="catalog-item"
      >
        <img :src="item.image" class="img" />
        <div class="txt-side">
          <span class="title">{{ item.title }}</span>
          <div class="btn" @click="$emit('click')">ОТРИМАТИ каталог</div>
        </div>
        <blockquote class="blockquote">{{ item.blockquote }}</blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'catalog',
    data () {
      return {
        items: [
          {
            title: 'Жіноча парфумерія',
            image: require('@/assets/img/catalog-1.jpg'),
            blockquote: '«Парфуми – це неперевершений відтінок жіночої індивідуальності, це останній штрих образу.» - Крістіан Діор'
          },
          {
            title: 'Чоловіча парфумерія',
            image: require('@/assets/img/catalog-2.jpg'),
            blockquote: '«Духи – головне. Це – автограф чоловіка.» – Палома Пікассо'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.catalog {
  padding-top: 0;

  .catalog-list {
    display: flex;
    justify-content: space-between;
    margin-left: -15px;

    @include r-max(600) {
      display: block;
      margin-left: 0;
    }
  }

  .catalog-item {
    position: relative;
    width: 50%;
    height: 29vw;
    min-height: 380px;
    margin-left: 15px;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      content: '';
      background-color: rgba(64, 60, 60, 0.47);
    }

    .img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .txt-side {
      padding: 7vw 3.3vw 0;

      @include r-max(900) {
        padding: 55px 15px;
      }
    }

    .title {
      position: relative;
      z-index: 1;
      display: block;
      max-width: 390px;
      font-weight: 700;
      color: #fff;

      @include r-max(1500) {
        font-size: 42px;
        max-width: 200px;
      }

      @include r-max(900) {
        font-size: 28px;
      }
    }

    .btn {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      margin-top: 44px;
      width: 260px;
      height: 50px;
      background: #FFFFFF;
      font-weight: 700;
      justify-content: center;
      font-size: 19px;
      text-transform: uppercase;
      color: $brown-light;
      border-radius: 5px;
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.46);
      transition: box-shadow .25s ease-in;
      cursor: pointer;

      &:hover {
        box-shadow: none;
      }

      @include r-max(1500) {
        margin-top: 24px;
      }

      @include r-max(900) {
        width: 200px;
        height: 40px;
        font-size: 14px;
      }
    }

    .blockquote {
      position: absolute;
      z-index: 1;
      right: 20px;
      bottom: 20px;
      display: block;
      max-width: 80%;
      margin-left: auto;
      color: #fff;
      font-weight: 500;
      font-size: 24px;
      font-style: italic;
      text-align: right;

      @include r-max(1500) {
        font-size: 18px;
      }

      @include r-max(900) {
        bottom: 10px;
        right: 15px;
        font-size: 16px;
      }
    }

    @include r-max(900) {
      min-height: 320px;
    }

    @include r-max(600) {
      width: 100%;
      margin-bottom: 15px;
      margin-left: 0;
    }
  }
}
</style>