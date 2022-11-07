<template>
  <div>
    <div class="form-blc">
      <img src="~@/assets/img/icons/about-us-lavender-icon.svg" class="lavender-icon">
      <div id="form-blc" class="wrap">
        <div class="main-content">
          <span class="title">Залишилися питання?</span>
          <span class="blc-subtitle">Ми зателефонуємо Вам для уточнення всіх деталей</span>
          <form @submit.prevent="submit" ref="form" class="fieldset">
            <styled-input
              v-model="user.name"
              :label="'Ваше ім’я'"
              :haveError="haveNameError"
              :name="'user_name'"
            />
            <styled-input
              v-model="user.phone"
              :type="'tel'"
              :label="'Ваш телефон'"
              :mask="'+38# (##) ### ## ##'"
              :haveError="haveTelError"
              :name="'user_phone'"
            />
            <button :class="{'in-process' : btnIsSendingForm}" type="submit" class="btn">Зателефонуйте мені</button>
          </form>
        </div>
        <div class="pic-side">
          <div class="img-wrap"><img src="~@/assets/img/contact-us.jpg" class="img"></div>
        </div>
        <div class="bg-color"></div>
      </div>
    </div>
    <success-modal
      :title="successModalTitle"
      :dscr="successModalDscr"
      :showSuccessModalWindow="showSuccessModalWindow2"
      @closeSuccessModal="$emit('closeSuccessModal2')"
    />
  </div>
</template>

<script>
  import StyledInput from './StyledInput'
  import { required } from 'vuelidate/lib/validators'
  import emailjs from '@emailjs/browser';
  import SuccessModal from './ModalWindow/SuccessModal'

  export default {
    name: 'FormBlc',
    components: { SuccessModal, StyledInput },
    props: {
      showSuccessModalWindow2: false
    },
    data () {
      return {
        user: {},
        haveNameError: false,
        haveTelError: false,
        btnIsSendingForm: false,
        successModalTitle: 'Дякуємо вашу заявку отримано',
        successModalDscr: 'Наші менеджери зателефонують Вам найближчим часом'
      }
    },
    validations: {
      user: {
        name: { required },
        phone: { required }
      }
    },
    methods: {
      submit() {
        console.log('submit!')
        this.$v.$touch()
        this.haveNameError = this.$v.user.name.$error
        this.haveTelError = this.$v.user.phone.$error
        if (this.$v.$invalid) {
          // console.log('error!')
          setTimeout(() => {
            this.haveNameError = false
            this.haveTelError = false
          }, 1500)
        } else {
          this.btnIsSendingForm = true //template_2rgux8o
          emailjs.sendForm('service_ggbua74', 'template_6yg1iol', this.$refs.form, 'kht9Rb_8Iw5oQBJrH')
            .then((result) => {
              // console.log('SUCCESS!', result.text);
              this.$emit('openSuccessModal2')
            }, (error) => {
              console.log('FAILED...', error.text);
              this.successModalTitle = 'Упс...'
              this.successModalDscr = 'Щось пішло не так, спробуйте повторити заявку пізніше'
              this.$emit('openSuccessModal2')
            })
            .finally(()=> {
              this.user.name = ''
              this.user.phone = ''
              this.btnIsSendingForm = false
            })
          // console.log('ok!')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.form-blc {
  .lavender-icon {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;

    @include r-max(900) {
      margin-top: 50px;
    }
  }

  .main-content {
    padding-left: 100px;

    @include r-max(1800) {
      padding-left: 50px;
    }

    @include r-max(1500) {
      padding-left: 70px;
    }

    @include r-max(1200) {
      padding-left: 0;
    }

    @include r-max(900) {
      margin: 0 auto;
    }
  }

  .title {
    display: block;
    padding-bottom: 15px;
  }

  .fieldset {
    width: 670px;
    max-width: 100%;
    padding-top: 30px;

    .styled-input {
      padding-bottom: 25px;

      @include r-max(480) {
        padding-bottom: 15px;
      }
    }

    .btn {
      display: flex;
      width: 100%;
      max-width: 350px;
      height: 50px;
      align-items: center;
      font-weight: 700;
      font-size: 19px;
      color: #fff;
      text-transform: uppercase;
      justify-content: center;
      font-family: "Cormorant", sans-serif;
      background-color: $txt-color-brown;
      border-radius: 5px;
      border: none;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.36);
      transition: all .25s ease-in;
      cursor: pointer;

      &:hover {
        box-shadow: none;
      }

      &.in-process {
        cursor: default;
        background-color: #9f9f9f;
        font-size: 0;
        box-shadow: none;

        &:after {
          position: absolute;
          content: '';
          background-image: url("~@/assets/img/icons/spinner.svg");
          width: 30px;
          height: 30px;
          background-size: contain;
          background-repeat: no-repeat;
          -webkit-animation:spin 4s linear infinite;
          -moz-animation:spin 4s linear infinite;
          animation:spin 4s linear infinite;
        }
      }

      @include r-max(1500) {
        font-size: 17px;
      }

      @include r-max(900) {
        height: 40px;
        font-size: 14px;
        margin: 0 auto;
        box-shadow: none;
      }
    }

    @include r-max(1500) {
      width: 500px;
    }

    @include r-max(900) {
      width: 100%;
    }
  }

  .pic-side {
    padding-left: 30px;

    .img {
      max-height: 630px;
      object-fit: contain;

      &-wrap {
        position: relative;
        display: inline-block;
        margin-right: 2vw;
        font-size: 0;

        &:before {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 1;
          content: '';
          background-color: rgba(61, 40, 0, 0.2);
        }

        @include r-max(1500) {
          margin-right: 0;
        }
      }

      @include r-max(1100) {
        max-width: 100%;
      }
    }

    @include r-max(900) {
      display: none;
    }
  }

  .bg-color {
    position: absolute;
    width: 47vw;
    top: 90px;
    right: 0;
    height: 550px;
    background-color: $brown-light;
    opacity: .5;
    z-index: -1;

    @include r-max(1800) {
      width: 800px;
    }

    @include r-max(1100) {
      top: 8vw;
      width: 65vw;
      height: 50vw;
    }

    @include r-max(900) {
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }
  }
}
</style>