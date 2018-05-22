<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 7. Vuex + Swiper
    Swiper(:items="mydata" :swiper="swiper")
</template>

<script>
import Swiper from './Swiper'
import { mapGetters } from 'vuex'

const swiper = {
  loop: true,
  direction: 'horizontal',
  effect: 'cubeflow', // 效果
  slidesPerView: 1,
  spaceBetween: 5,
  grabCursor: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  observer: true, // 修改swiper自己或子元素时，自动初始化swiper
  observeParents: true
}

export default {
  name: 'Page4',
  components: {
    Swiper
  },
  data () {
    return {
      data: [],
      swiper: swiper
    }
  },
  created () {
    this.$store.dispatch('actionAJAX')
  },
  computed: {
    ...mapGetters({
      mydata: 'getMydata'
    })
  }
}
</script>

<style scoped>

</style>
