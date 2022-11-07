<template>
  <div v-show="showSuccessModalWindow" class="modal-layout modal-layout__success" @click="overlayListener($event)" >
    <div class="modal-layout__content-wrap">
      <div class="modal-layout__content">
        <img src="~@/assets/img/icons/close.svg" @click="$emit('closeSuccessModal')" class="close-icon">
        <span class="title">{{ title }}</span>
        <span class="blc-subtitle">{{ dscr }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccessModal',
    props: {
      showSuccessModalWindow: false,
      title: {
        default: ''
      },
      dscr: {
        default: ''
      },
    },
    methods: {
      overlayListener (e) {
        if (!e.target.closest('.modal-layout__content')) {
          this.$emit('closeSuccessModal')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal-layout__success {
  .title,
  .blc-subtitle {
    display: block;
    text-align: center;
  }
}
</style>