<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 5. CtoF
    .btn-container
      .mybtn(@click="push('CtoF')") Page CtoF
</template>

<script>
export default {
  name: 'Page5',
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
<style scoped>

</style>
