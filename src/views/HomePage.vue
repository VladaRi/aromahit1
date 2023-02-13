<template>
  <div class="home">
    <h1 class="title">Обери фільм</h1>
    <div
      class="btn"
      @click="$router.push({name: 'films'})"
    >
      Обрати фільм</div>
  </div>
</template>

<script>

  export default {
    name: 'HomePage',

    props: {

    }
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .title {
      margin-bottom: 10px;
    }

    .btn {
      margin: 0 auto;
    }
  }

</style>