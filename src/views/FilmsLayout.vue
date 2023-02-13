<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>

</template>

<script>
  import MainHeader from '../components/MainHeader'
  export default {
    name: 'FilmsLayout',
    components: { MainHeader }
  }
</script>

<style scoped>

</style>