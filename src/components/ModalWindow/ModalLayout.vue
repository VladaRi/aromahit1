<template>
  <div>
    <div class="modal-layout" @click="overlayListener($event)" v-show="showModalWindow">
      <div class="modal-layout__content-wrap">
        <div class="modal-layout__content">
          <img src="~@/assets/img/icons/close.svg" @click="$emit('close')" class="close-icon">
          <span v-if="title" class="title">{{ title }}</span>
          <span class="blc-subtitle">{{ dscr }}</span>
          <form @submit.prevent="submit" class="fieldset" ref="form">
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
            <button type="submit" class="btn" :class="{'in-process' : btnIsSendingForm}">Зателефонуйте мені</button>
          </form>
        </div>
      </div>
    </div>
    <success-modal
      :showSuccessModalWindow="showSuccessModalWindow"
      @closeSuccessModal="$emit('closeSuccessModal')"
      :title="successModalTitle"
      :dscr="successModalDscr"
    />
  </div>

</template>

<script>
  import StyledInput from '../StyledInput'
  import { required } from 'vuelidate/lib/validators'
  import emailjs from '@emailjs/browser';
  import SuccessModal from './SuccessModal'

  export default {
    name: 'ModalWindow',
    components: { SuccessModal, StyledInput },
    props: {
      showModalWindow: false,
      showSuccessModalWindow: false,
      title: {
        default: ''
      },
      dscr: {
        default: ''
      },
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
      overlayListener (e) {
        if (!e.target.closest('.modal-layout__content')) {
          this.$emit('close')
        }
      },
      submit() {
        // console.log('submit!')
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
              this.$emit('openSuccessModal')
            }, (error) => {
              // console.log('FAILED...', error.text);
              this.successModalTitle = 'Упс...'
              this.successModalDscr = 'Щось пішло не так, спробуйте повторити заявку пізніше'
              this.$emit('openSuccessModal')
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

</style>