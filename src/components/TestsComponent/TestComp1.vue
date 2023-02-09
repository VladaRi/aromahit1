<template>
  <div>
    <!---->
    <!--<input @input="$emit('input', $event.target.value)">-->
    <input v-model="inputTxt">
    <button @click="$emit('click', inputTxt)">Find</button>
  </div>
</template>

<script>
  export default {
    name: 'TestComp1',
    data() {
      return {
        inputTxt: '',
        cdcd: '123'
      }
    }
  }
</script>

<style lang="scss" scoped>
input {
  height: 35px;
  padding: 0 10px;
}

button {
  height: 35px;
  width: 50px;
}
</style>