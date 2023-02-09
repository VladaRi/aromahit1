<template>
  <div class="test3">
    <span>Input</span>
    <!--<test-comp1-->
      <!--v-model="searchText"-->
      <!--@click="btnClicked"-->
    <!--/>-->
    <test-comp1
      @click="btnClicked"
    />
    {{searchText}}
    <!--<ul class="product-list">-->
      <!--<li-->
        <!--v-for="(product, index) in products"-->
        <!--:key="index"-->
        <!--class="product-card"-->
      <!--&gt;-->
        <!--<img-->
          <!--:src="product.imgUrl"-->
          <!--width="300px"-->
        <!--&gt;-->
        <!--<div class="product-card__info">-->
          <!--<h2>{{ product.title }}</h2>-->
          <!--<p class="price">{{ product.price }}р.</p>-->
          <!--<p class="count">Доступно для доставки {{ product.count }}шт.</p>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->

    <ul class="product-list">
      <li
        v-for="(product, index) in newArr"
        :key="index"
        class="product-card"
      >
        <img
          :src="product.imgUrl"
          width="300px"
        >
        <div class="product-card__info">
          <h2>{{ product.title }}</h2>
          <p class="price">{{ product.price }}р.</p>
          <p class="count">Доступно для доставки {{ product.count }}шт.</p>
        </div>
      </li>
    </ul>

    <hr style="margin: 50px">
  </div>
</template>

<script>
  import TestComp1 from '../components/TestsComponent/TestComp1'
  export default {
    name: 'Test3',
    components: { TestComp1 },
    data () {
      return {
        searchText: '',
        newArr: [],
        products: [
          {
            title: 'Стіл письмовий BILLUND 53х120 бетон/біл.',
            price: 19999,
            imgUrl: 'https://cdn3.jysk.com/getimage/wd2.large/98599',
            count: 30
          },
          {
            title: 'Стіл письмовий VANDBORG 60х120 дуб/чорн.',
            price: 17199,
            imgUrl: 'https://cdn4.jysk.com/getimage/wd2.large/92357',
            count: 20
          },
          {
            title: 'Стіл письмовий MESINGE 60x118 білий',
            price: 10999,
            imgUrl: 'https://cdn3.jysk.com/getimage/wd2.large/93418',
            count: 23
          }
        ]
      }
    },
    mounted() {
      this.newArr = this.products
    },
    computed: {

    },
    methods: {
      findProducts (val) {
        this.newArr = this.products.filter(el => el.title.includes(val))
      },
      btnClicked(val) {
        this.findProducts(val)
        console.log(`Поиск товара ${val}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test3 {
    margin: 50px;
  }

  span {
    font-size: 24px;
  }

  .product-list {
    display: flex;
  }

  .product-card {
    border: 1px solid rgb(211, 211, 211);
    padding: 20px 15px;
    &__info {
      margin-top: 20px;
      h2, .price {
        font-weight: 500;
      }
      .count {
        color: rgb(143, 143, 143);
      }
      button {
        background-color: rgb(221, 56, 56);
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 8px 14px;
        display: block;
        cursor: pointer;
        margin-top: 20px;
      }
    }
  }


</style>