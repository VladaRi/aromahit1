<template>
  <div id="cooperation" class="cooperation wrap">
    <span class="title">Обробка замовлень та доставка</span>
    <ul class="list">
      <li
        v-for="(item, id) in items"
        :key="`item-${id}`"
        class="item"
      >
        <div class="counter">{{ item.counterNum }}</div>
        <span class="blc-subtitle">{{ item.title }}</span>
        <p class="blc-dscr">{{ item.dscr }}</p>
        <span v-if="item.additional" class="additional-info">{{ item.additional }}</span>
        <div v-if="item.haveBtn" class="btn" v-scroll-to="'#form-blc'">Відправити заявку</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Cooperation',
    data () {
      return {
        // counterNum: 1,
        items: [
          {
            title: 'Надішліть Вашу заявку',
            dscr: 'Наші менеджери з продажу формують кошик замовлень.',
            haveBtn: true
          },
          {
            title: 'Очікування поставки',
            dscr: 'Очікуємо поставку від виробника до 7-10 днів.*',
            additional: '* час поставки може бути змінено в залежності від ситуації в країні'
          },
          {
            title: 'Оплата і доставка',
            dscr: 'В день прибуття товару на склад, менеджер, інфомує Вас про готовність замовлення до відправки.'
          },
          {
            title: 'Отримання замовлення',
            dscr: 'Відправка замовлення зручною для Вас кур’єрською доставкою (Нова Пошта / Укрпошта / Делівері / Ін Тайм).'
          }
        ]
      }
    },

    created () {
      this.items.map((el, index) => index < 9 ? el.counterNum = '0' + (index + 1) : el.counterNum = index + 1)
    }
  }
</script>

<style lang="scss" scoped>
.cooperation {
  padding-bottom: 50px;

  .title {
    position: relative;
    display: inline-block;

    &:before {
      position: absolute;
      top: -20px;
      left: -29px;
      width: 43px;
      height: 74px;
      background-image: url("~@/assets/img/icons/brown-stars.svg");
      background-size: contain;
      background-repeat: no-repeat;
      content: '';

      @include r-max(1500) {
        left: -25px;
        top: -12px;
        width: 34px;
        height: 59px;
      }

      @include r-max(900) {
        left: -23px;
      }

      @include r-max(480) {
        left: -12px;
        top: -9px;
        height: 32px;
        width: 21px;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -66px;
    padding-top: 24px;

    @include r-max(1200) {
      margin-left: -30px;
    }

    @include r-max(900) {
      padding-top: 0;
      margin-top: -15px;
    }

    @include r-max(480) {
      margin-left: 0;
    }
  }

  .item {
    width: calc(25% - 66px);
    margin-left: 66px;

    @include r-max(1200) {
      width: calc(25% - 30px);
      margin-left: 30px;
    }

    @include r-max(900) {
      width: calc(50% - 30px);
      padding-top: 20px;
    }

    @include r-max(480) {
      width: 100%;
      margin-left: 0;
      padding-top: 10px;
    }
  }

  .counter {
    position: relative;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: $txt-color-brown;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: $txt-color-brown;
      content: '';
    }

    @include r-max(480) {
      font-size: 55px;
    }
  }

  .blc-subtitle {
    display: block;
    padding-top: 8px;
    padding-bottom: 17px;
    color: $txt-color-brown;

    @include r-min-max(901, 1500) {
      font-size: 24px;
    }

    @include r-max(480) {
      padding-bottom: 10px;
    }
  }

  .blc-dscr {
    font-weight: 500;
    font-size: 23px;
    color: $txt-color;

    @include r-max(1500) {
      font-size: 19px;
    }

    @include r-max(900) {
      font-size: 18px;
    }

    @include r-max(480) {
      font-size: 16px;
    }
  }

  .additional-info {
    display: block;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 400;
    color: $txt-color;

    @include r-max(1500) {
      font-size: 15px;
    }
  }

  .btn {
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 17px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
    justify-content: center;
    background-color: $txt-color-brown;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.36);
    transition: all .25s ease-in;
    cursor: pointer;

    &:hover {
      box-shadow: none;
    }

    @include r-max(1500) {
      font-size: 17px;
    }

    @include r-max(900) {
      height: 40px;
      font-size: 14px;
    }
  }
}
</style>