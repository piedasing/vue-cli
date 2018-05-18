<template lang="pug">
  v-ons-page
    .swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="item in items")
          p {{item.title}}
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
  props: ['items'],
  data () {
    return {

    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="sass">

</style>
