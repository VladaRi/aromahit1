<template>
  <div class="main-default">
    <main-header @click="showModal"/>
    <div class="content">
      <router-view
        :showSuccessModalWindow2="showSuccessModalWindow2"
        @openSuccessModal2="showSuccessModalWindow2 = true"
        @closeSuccessModal2="showSuccessModalWindow2 = false"
        @clickOnCatalogBtn="showCatalogModal"
      />
    </div>
    <main-footer />
    <modal-window
      :showModalWindow="showModalWindow"
      @close="showModalWindow = false"
      :dscr="modalDscr"
      :showSuccessModalWindow="showSuccessModalWindow"
      @openSuccessModal="openSuccessModal"
      @closeSuccessModal="showSuccessModalWindow = false"
    />
  </div>
</template>

<script>
  import MainHeader from '../components/MainHeader'
  import MainFooter from '../components/MainFooter'
  import ModalWindow from '../components/ModalWindow/ModalLayout'
  export default {
    name: 'defaultLayout',
    components: { ModalWindow, MainFooter, MainHeader },
    data() {
      return {
        showModalWindow: false,
        showSuccessModalWindow: false,
        showSuccessModalWindow2: false,
        modalDscr: ''
      }
    },
    computed: {
      bodyPopupMode () {
        return this.showModalWindow || this.showSuccessModalWindow || this.showSuccessModalWindow2
      }
    },
    watch: {
      bodyPopupMode () {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
        let fixBlc = document.querySelectorAll('.fix-blc')
        document.querySelector('body').style.paddingRight = this.bodyPopupMode ? paddingOffset : 0
        document.querySelector('body').style.overflowY = this.bodyPopupMode ? 'hidden' : 'auto'

        fixBlc.forEach(el => el.style.marginRight = this.bodyPopupMode ? paddingOffset : 0)
      }
    },
    methods: {
      showModal() {
        this.showModalWindow = !this.showModalWindow
        this.modalDscr = 'Ми зателефонуємо Вам, щоб відповісти на всі Ваші питання'
      },
      showCatalogModal() {
        this.showModalWindow = !this.showModalWindow
        this.modalDscr = 'Для отримання каталогу парфюмерії заповніть форму'
      },
      openSuccessModal () {
        this.showSuccessModalWindow = true
        this.showModalWindow = false
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/main';

  .content {
    padding-top: 72px;

    @include r-max(1500) {
      padding-top: 62px;
    }

    @include r-max(480) {
      padding-top: 55px;
    }
  }
</style>