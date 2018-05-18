<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.center {{title}}
    .grid-container
      .grid-item
        i.fa.fa-bell(@click="push('Page1')")
      .grid-item
        i.fa.fa-address-book(@click="push('Page2')")
      .grid-item
        i.fa.fa-twitter(@click="push('Page3')")
      .grid-item
        i.fa.fa-calendar(@click="push('Page4')")
      .grid-item
        i.fa.fa-comment(@click="push('Page5')")
      .grid-item
        i.fa.fa-music(@click="push('Page6')")
</template>

<script>
import Page1 from './Page1'
import Page2 from './Page2'

export default {
  name: 'Home',
  components: {
    Page1, Page2
  },
  data () {
    return {
      title: 'Welcome to My Vue.js App'
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    }
  }
}
</script>

<style lang="sass">

</style>
