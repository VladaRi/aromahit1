<template>
  <div class="film-page">
    <div class="container" v-if="film">
      <h1>{{ film.title }}</h1>
      <img
        :src="film.img"
        :alt="film.title"
      >
      <div class="section">
        <p class="section__title">Немного о сюжете:</p>
        <p class="section__description">{{ film.description }}</p>
        <span @click="changeDscrActive = !changeDscrActive" class="btn">Change dscr</span>
        <div v-if="changeDscrActive">
          <textarea type="text" :value="newDscr" @input="changeDscrMethod($event.target.value)" class="main-input textarea"></textarea>
          <span @click="saveChangesMethod" class="btn">Save</span>
        </div>
      </div>
      <div class="section">
        <p class="section__title">Рейтинг:</p>
        <p class="section__description">{{ film.rating }}</p>
      </div>
      <div class="section">
        <p class="section__title">Актерский состав:</p>
        <p class="section__description">{{ film.actors.join(', ') }}</p>
      </div>
      <div class="section">
        <p class="section__title">Режисеры:</p>
        <p class="section__description">{{ film.directors.join(', ') }}</p>
      </div>


      <div class="line" />
      <div class="review">
        <h3>Смотрели данный фильм ?</h3>
        <p>Оставьте отзыв:</p>
        <ul>
          <li
            v-for="reaction in reactions"
            :key="reaction.id"
          >
            <button type="button" class="btn btn-outline-light">
              {{ reaction.title }}
            </button>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
  import films from '../mocks/films'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        film: null,
        changeDscrActive: false,
        newDscr: ''
      }
    },
    computed: {
      ...mapGetters({
        getReactions: 'reactions/getReactions'
      }),
      reactions() {
        return this.getReactions
      }
    },
    created() {
      const film = films.find(film => film.id == this.$route.params.id)
      if (film) {
        this.film = film
      }
      this.newDscr = this.film.description
    },
    methods: {
      changeDscrMethod (value) {
        this.newDscr = value
      },
      saveChangesMethod() {
        this.film.description = this.newDscr
        this.changeDscrActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .film-page {
    padding-bottom: 100px;
    .back {
      margin-left: 30px;
      margin-top: 30px;
    }
    h1 {
      margin-bottom: 30px;
      padding-bottom: 15px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
      }
    }
    img {
      object-fit: cover;
      border-radius: 10px;
      width: 1160px;
      height: 600px;
      margin-bottom: 30px;
    }
    .section {
      &__title {
        color: #EB5804;
        font-weight: 700;
        font-size: 25px;
        margin-bottom: 10px;
      }
      &__description {
        font-size: 18px;
        line-height: 30px;
      }
    }
    .btn {
      margin: 10px 0 10px;
      border: 1px solid #EB5804;
    }
    .line {
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
      margin-bottom: 45px;
    }
    .review {
      h3 {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 10px;
        /*color: #ffffff;*/
      }

      p {
        font-weight: 600;
        font-size: 20px;
        color: #EB5804;
      }

      ul {
        padding-left: 0;
        list-style: none;
        display: flex;

        li {
          margin-right: 15px;
        }
      }

      .btn {
        border: 1px solid #000;
        background-color: white;
        border-radius: 5px;
        font-weight: 600;
        transition: all .2s ease-in-out;

        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
</style>
