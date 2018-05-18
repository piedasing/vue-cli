<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button Home
      div.center Page 3
    p(style="text-align: center") This is the page3

</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
