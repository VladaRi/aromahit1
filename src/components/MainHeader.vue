<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'home' }"
        class="logo"
      >
        Кинотеатр
      </router-link>
      <div class="links">
        <router-link
          :to="{ name: 'films' }"
        >
          Фильмы
        </router-link>
        <button
          type="button"
          class="btn btn-outline-light btn-lg"
          @click="changeUserState"
        >
          {{ auth ? 'Выйти' : 'Войти' }}
        </button>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    name: 'MainHeader',
    data () {
      return {
        auth: false
      }
    },
    mounted() {
      this.auth = localStorage.getItem('auth')
    },
    watch: {

    },
    methods: {
      changeUserState() {
        if (this.auth) {
          localStorage.removeItem('auth')
          this.$router.push({ name: 'home'})
        } else {
          localStorage.setItem('auth', true)
          this.auth = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    border-bottom: 1px dotted #EB5804;
    margin-bottom: 25px;

  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  }
  padding: 20px 0;
  a {
    text-decoration: none;
    font-weight: 700;
    /*color: #ffffff;*/
    font-size: 25px;
  }
  .logo {
    color: #EB5804;
    font-size: 30px;
  }
  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
  }
  button {
    margin-left: auto;
  }
  }

</style>