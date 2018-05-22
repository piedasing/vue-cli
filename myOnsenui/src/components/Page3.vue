<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 3
    .btn-container
      .mybtn(@click="push('Page1')") Page1
      .mybtn(@click="push('Page2')") Page2

</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

</style>
