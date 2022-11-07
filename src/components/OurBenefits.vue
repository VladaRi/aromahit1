<template>
  <div id="our-benefits" class="our-benefits wrap">
    <h4 class="title">Що ми пропонуємо</h4>
    <ul class="list">
      <li
        v-for="(item, id) in items"
        :key="`item-${id}`"
        class="item"
      >
        <div class="pic-wrap"><img :src="item.pic" class="pic"></div>
        <span class="blc-subtitle">{{ item.title }}</span>
        <p class="blc-dscr">{{ item.dscr }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'OurBenefits',
    data () {
      return {
        items: [
          {
            title: 'Парфуми напряму від виробника',
            pic: require('@/assets/img/icons/benefit-1.svg'),
            dscr: 'Ми доставляємо продукцію без посередників, з найбільших парфумерних концернів Європи та Америки'
          },
          {
            title: 'Гарантія якості',
            pic: require('@/assets/img/icons/benefit-2.svg'),
            dscr: 'Якість товару для нас - понад усе, тому ми пропонуємо виключно найкращий товар'
          },
          {
            title: 'Вигідна цінова політика',
            pic: require('@/assets/img/icons/benefit-3.svg'),
            dscr: 'Великий об‘єм закупівлі дає змогу нам запропонувати кожному клієнту максимально приємну ціну, а чим більшу кількість товару обираєте Ви - тим нижчу гуртову ціну пропонуємо ми'
          },
          {
            title: 'Клієнтоорієнтованість',
            pic: require('@/assets/img/icons/benefit-4.svg'),
            dscr: 'Індивідуальна консультація для кожного покупця від наших спеціалістів, протягом якої ми надаємо максимально повну інформацію про продукцію, допомагаємо підібрати аромати, створюємо попередньо лист замовлення та задовольняємо всі інші запити клієнта'
          },
          {
            title: 'Програма лояльності',
            pic: require('@/assets/img/icons/benefit-5.svg'),
            dscr: 'Програма лояльності для постійних замовників. Для постійних клієнтів розроблена спеціальна система знижок та пропозицій'
          },
          {
            title: 'Великий асортимент',
            pic: require('@/assets/img/icons/benefit-6.svg'),
            dscr: 'Пропонуємо великий асортимент товарів, адже працюємо з найбільшими парфумерними концернами'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.our-benefits {
  background: $brown-light;

  .title {
    position: relative;
    display: inline-block;
    color: #fff;
    padding-right: 48px;

    &:after {
      position: absolute;
      bottom: 20px;
      right: 0;
      width: 43px;
      height: 74px;
      background-image: url("~@/assets/img/icons/white-stars.svg");
      background-size: contain;
      background-repeat: no-repeat;
      content: '';

      @include r-max(1500) {
        width: 34px;
        height: 59px;
      }

      @include r-max(480) {
        bottom: 15px;
        height: 41px;
        width: 24px;
      }
    }

    @include r-max(1500) {
      padding-right: 36px;
    }

    @include r-max(480) {
      padding-right: 25px;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 72px;
    margin-left: -20px;
    justify-content: space-between;

    @include r-max(1500) {
      padding-top: 55px;
    }

    @include r-max(480) {
      margin-left: 0;
      padding-top: 35px;
    }
  }

  .item {
    margin-left: 20px;
    width: calc(33.3% - 20px);

    &:nth-child(1n + 4) {
      @include r-min(901) {
        padding-top: 119px;
      }
    }

    &:nth-child(5) {
      position: relative;

      &:before {
        position: absolute;
        top: 22px;
        left: calc(50% - 199px);
        width: 398px;
        height: 74px;
        background-image:  url("~@/assets/img/icons/benefit-pic.svg");
        content: '';

        @include r-max(900) {
          display: none;
        }
      }
    }

    @include r-max(900) {
      width: calc(50% - 20px);
      padding-bottom: 50px;
    }

    @include r-max(480) {
      width: 100%;
      margin-left: 0;
      padding-bottom: 40px;
    }
  }

  .pic {
    position: absolute;
    display: block;
    max-height: 41px;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &-wrap {
      position: relative;
      width: 93px;
      height: 93px;
      margin: 0 auto;
      border-radius: 50%;
      background-color: #fff;

      @include r-max(1500) {
        width: 81px;
        height: 81px;
      }

      @include r-max(480) {
        width: 70px;
        height: 70px;
      }
    }

    @include r-max(1500) {
      max-height: 35px;
    }

    @include r-max(480) {
      max-height: 30px;
    }
  }

  .blc-subtitle {
    display: block;
    padding-top: 13px;
    padding-bottom: 25px;
    color: #fff;
    text-align: center;

    @include r-max(1500) {
      padding-bottom: 17px;
    }

    @include r-max(480) {
      padding-bottom: 10px;
    }
  }
  
  .blc-dscr {
    display: block;
    max-width: 80%;
    margin: 0 auto;
    color: #fff;
    font-weight: 600;
    font-size: 23px;
    text-align: center;

    @include r-max(1500) {
      font-size: 18px;
      max-width: 90%;
    }

    @include r-max(480) {
      max-width: 100%;
      font-size: 16px;
    }
  }
}
</style>