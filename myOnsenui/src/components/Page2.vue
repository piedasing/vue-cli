<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 2
    Swiper(:items="data" :swiper="swiper")
    Swiper(:items="data" :swiper="swiper")
</template>

<script>
import Swiper from './Swiper'

const data = [
  {
    'name': 'first',
    'cover': '123'
  },
  {
    'name': 'second',
    'cover': '456'
  },
  {
    'name': 'third',
    'cover': '789'
  }
]

const swiper = {
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
}

export default {
  name: 'Page2',
  components: {
    Swiper
  },
  data () {
    return {
      data: data,
      swiper: swiper
    }
  }
}
</script>

<style>

</style>
