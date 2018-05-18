<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 2
    Swiper(:items="data")
</template>

<script>
import Swiper from './Swiper'

const data = [
  {
    'title': 'first',
    'img': '123'
  },
  {
    'title': 'second',
    'img': '456'
  },
  {
    'title': 'third',
    'img': '789'
  }
]

export default {
  name: 'Page2',
  components: {
    Swiper
  },
  data () {
    return {
      data: data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
