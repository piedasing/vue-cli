<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 3. Push another Page
    .btn-container
      .mybtn(@click="push('Page1')") Page1
      .mybtn(@click="push('Page2')") Page2
      .mybtn(@click="push('Page3')") Page3
      .mybtn(@click="push('Page4')") Page4
      .mybtn(@click="push('Page5')") Page5
      .mybtn(@click="push('Page6')") Page6

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
