<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.center {{title}}
    .grid-container
      .grid-item(@click="push('Page1')")
        font-awesome-icon(:icon="['fas', 'bell']")
      .grid-item(@click="push('Page2')")
        font-awesome-icon(:icon="['fas', 'address-book']")
      .grid-item(@click="push('Page3')")
        font-awesome-icon(:icon="['fab', 'twitter']")
      .grid-item(@click="push('Page4')")
        font-awesome-icon(:icon="['fas', 'calendar']")
      .grid-item(@click="push('Page5')")
        font-awesome-icon(:icon="['fas', 'comment']")
      .grid-item(@click="push('Page6')")
        font-awesome-icon(:icon="['fas', 'music']")
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
