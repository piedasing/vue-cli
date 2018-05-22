<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page CtoF
    .fahrenheit
      p 華氏(°F): {{CtoF}}
    .celsius
      p 攝氏(°C):
      input(type="number" v-model="celsius")
</template>

<script>
export default {
  name: 'CtoF',
  data () {
    return {
      celsius: 0
    }
  },
  computed: {
    CtoF () {
      return this.celsius * 9 / 5 + 32
    }
  }
}
</script>

<style lang="sass">

</style>
