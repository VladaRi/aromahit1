<template>
  <div>
    <h2>Обери фільм</h2>
    <films-list :films="films" />
    <div>
      <input class="main-input" v-model="newFilm">
      <div class="btn" @click="add">Add</div>
    </div>
  </div>
</template>

<script>
  import films from '../mocks/films'
  import FilmsList from '../components/FilmsList'
  export default {
    name: 'AllFilmsPage',
    components: { FilmsList },
    data () {
      return {
        films,
        newFilm: ''
      }
    },
    methods: {
      add() {
        this.films.push({
          title: this.newFilm,
          img: 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg',
          rating: '0.0',
          id: this.films.length + 1,
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }

</style>