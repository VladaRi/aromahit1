<template>
  <modal
    name="auth-modal"
    classes="auth-modal"
    height="350px"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? 'Войти' : 'Зарегистрироваться' }}</h3>
      <label>
        Email
        <input
          type="text"
          class="form-control"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        >
      </label>
      <label>
        Пароль
        <input
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model="form.password"
        >
      </label>
      <div class="actions">
        <a
          href="#"
          @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'"
        >
          {{ isSignInForm ? 'Регистрация' : 'Вход' }}
        </a>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Отмена
        </button>
        <button
          type="submit"
          class="btn btn-dark"
        >
          Подтвердить
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
  export default {
    name: 'auth-modal',
    data() {
      return {
        mode: 'signIn',
        form: {
          email: '',
          password: ''
        },
        errors: []
      }
    },
    computed: {
      isSignInForm() {
        return this.mode === 'signIn'
      }
    },
    mounted () {
      this.$modal.show('auth-modal')
    },
    methods: {
      changeUserState() {
        if (this.auth) {
          localStorage.removeItem('auth')
          this.$router.push({ name: 'main'})
        } else {
          localStorage.setItem('auth', true)
          this.auth = true
        }
      },
      close() {
        this.$emit('close')
      },
      formSubmit() {
        if (this.isSignInForm) {
          this.signIn()
        } else {
          this.signUp()
        }
      },
      async signIn() {
        try {
          const res = await fetch('http://localhost:3000/auth/sign_in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              email: this.form.email,
              password: this.form.password
            })
          })
          const data = await res.json()
          if (res.status === 200 || res.status === 201) {
            localStorage.setItem('user', JSON.stringify(data))
            this.$store.dispatch('user/setUser', data)
            this.$emit('close')
          } else {
            this.errors = data
            console.error(data)
          }
        } catch (error) {
          console.error(error)
        }
      },

      signUp() {}
    }
  }
</script>

<style lang="scss">
  .auth-modal {
    padding: 30px 40px;

    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      h3 {
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 600;
      }
      label {
        width: 100%;
        margin-bottom: 20px;
        color: #EB5804;
      }
      .actions {
        margin-top: auto;
        display: flex;
        align-items: baseline;
        a {
          color: #EB5804;
        }
        button {
          width: 130px;
          margin-left: 10px;
          &:first-of-type {
            margin-left: auto;
          }
        }
      }

      .form-control {
        width: 100%;
        border: 1px solid grey;
        border-radius: 5px;
        height: 35px;
        padding: 0 10px;
        margin-top: 7px;
      }

      .btn {
        font-weight: 400;
        height: 40px;
      }
    }
  }
</style>
