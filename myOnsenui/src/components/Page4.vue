<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 4
    Swiper(:items="data" :swiper="swiper")
</template>

<script>
import Swiper from './Swiper'

const swiper = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 5,
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
const dataUrl = 'https://raw.githubusercontent.com/piedasing/json_test/master/json/document.json'

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
    this.getData()
  },
  methods: {
    getData () {
      var _this = this
      $.ajax({
        url: dataUrl,
        type: 'GET',
        async: false,
        success: function (res) {
          console.log(res)
          _this.data = JSON.parse(res)
        },
        error: function (xhr) {
          console.log('抓取失敗')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
