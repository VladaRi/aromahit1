<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>

</template>

<script>
  import MainHeader from '../components/MainHeader'
  import { mapActions } from 'vuex'

  export default {
    name: 'FilmsLayout',
    components: { MainHeader },
    methods: {
      ...mapActions({
        loadReactions: 'reactions/loadReactions'
      }),
    },
    created () {
      this.loadReactions(1000)
      // this.$store.dispatch('loadReactions', 1000)
    }
  }
</script>

<style scoped>

</style>