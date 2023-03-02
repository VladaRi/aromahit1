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
          @click="onAuthBtnClick"
        >
          {{ auth ? 'Выйти' : 'Войти' }}
        </button>
      </div>
    </div>
    <auth-modal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"
    ></auth-modal>
  </header>

</template>

<script>
  import AuthModal from './AuthModal'
  export default {
    name: 'MainHeader',
    components: { AuthModal },
    data () {
      return {
        auth: false,
        isAuthModalOpen: false
      }
    },
    // mounted() {
    //   this.auth = localStorage.getItem('auth')
    // },

    created() {
      this.setUser(JSON.parse(localStorage.getItem('user')))
    },

    watch: {

    },
    methods: {
      onAuthBtnClick() {
        this.isAuthModalOpen = true
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