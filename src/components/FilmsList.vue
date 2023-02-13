<template>
  <div class="film-list">
    <film-card
      v-for="film in films"
      :key="film.id"
      :film="film"
    />
  </div>
</template>

<script>
  import FilmCard from './FilmCard'
  export default {
    name: 'FilmsList',
    components: { FilmCard },
    props: {
      films: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>

  .film-card {
    margin-bottom: 40px;
  }

  .film-list {

  }

</style>