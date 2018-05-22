<template lang="pug">
  .swiper-container
    .swiper-wrapper
      .swiper-slide(v-for="item in items")
        p {{item.name}}
    .swiper-pagination
    .swiper-button-prev
    .swiper-button-next
    .swiper-scrollbar
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Swiper',
  props: {
    items: Array,
    swiper: Object
  },
  data () {
    return {
      swiper_init: this.swiper
    }
  },
  mounted () {
    new Swiper('.swiper-container', this.swiper_init)
  }
}
</script>

<style lang="sass">

</style>
