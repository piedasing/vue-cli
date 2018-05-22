<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 1. Carousel
    .swiper-container
      .swiper-wrapper
        .swiper-slide Slide1
        .swiper-slide Slide2
        .swiper-slide Slide3
        .swiper-slide Slide1
        .swiper-slide Slide2
        .swiper-slide Slide3
        .swiper-slide Slide1
        .swiper-slide Slide2
        .swiper-slide Slide3
        .swiper-slide Slide1
        .swiper-slide Slide2
        .swiper-slide Slide3
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
      .swiper-scrollbar

</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
