<template>
  <div class="main-default">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'defaultLayout',
    data() {
      return {

      }
    },
    computed: {

    },
    watch: {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/main';

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    /*margin-top: 40px;*/
  }
</style>