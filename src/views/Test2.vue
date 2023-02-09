<template>
  <div class="filter-input__wrap">
    <div class="filter-input">
      <input class="input"  v-model="message2">
      <span>{{ message2 }}</span>
      <span class="span">Всього імен - {{names.length}}. Співпадінь - {{getFilteredNames.length}}</span>
      <ul>
        <li v-for="(item, index) in getFilteredNames" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="filter-input">
      <input class="input"  v-model="message">
      <span>{{ message }}</span>
      <span class="span">Всього імен - {{items.length}}. Співпадінь - </span>
      <ul>
        <li style="color: blue" v-for="(item, index) in newArr" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test2',
    data () {
      return {
        message: '',
        message2: '',
        names: ['Данил', 'Василий', 'Дмитрий', 'Григорий', 'Максим'],
        items: [
          {
            name: 'Василь',
            age: 15
          },
          {
            name: 'Петро'
          },
          {
            name: 'Дмитро'
          },
          {
            name: 'Іван'
          }
        ],
        newArr: []
      }
    },
    computed: {
      getFilteredNames() {
        return this.names.filter(name => name.toLowerCase().includes(this.message2.toLowerCase()))
      },
      // newArr() {
      //   return this.items.filter(item => item.name.toLowerCase().includes(this.message.toLowerCase()))
      // }
    },

    watch: {
      message (val) {
        this.filterArray(val)
      }
    },
    methods: {
      filterArray (val) {
        this.newArr = this.items.filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
        console.log(val, this.newArr)
      }
    },
    mounted() {
      this.newArr = this.items
    }
  }
</script>

<style lang="scss" scoped>
  .filter-input__wrap {
    display: flex;
  }
  .filter-input {
    padding: 60px;

    .input {
      height: 35px;
    }

    .span {
      display: block;
      font-size: 25px;
      padding-bottom: 15px;
    }

    li {
      font-size: 18px;
    }
  }
</style>