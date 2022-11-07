<template>
  <div>
    <main-banner @click="$emit('clickOnCatalogBtn')" />
    <about-us />
    <catalog
      @click="$emit('clickOnCatalogBtn')"
    />
    <our-benefits />
    <cooperation/>
    <form-blc
      :showSuccessModalWindow2="showSuccessModalWindow2"
      @openSuccessModal2="$emit('openSuccessModal2')"
      @closeSuccessModal2="$emit('closeSuccessModal2')"
    />
  </div>
</template>

<script>
  import MainBanner from '../components/MainBanner'
  import AboutUs from '../components/AboutUs'
  import Catalog from '../components/Catalog'
  import OurBenefits from '../components/OurBenefits'
  import Cooperation from '../components/Cooperation'
  import FormBlc from '../components/FormBlc'
  export default {
    name: 'HomePage',
    components: { FormBlc, Cooperation, OurBenefits, Catalog, AboutUs, MainBanner },
    props: {
      showSuccessModalWindow2: false
    }
  }
</script>

<style scoped>

</style>