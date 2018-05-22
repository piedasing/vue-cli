<template lang="pug">
  .swiper-container
    .swiper-wrapper
      .swiper-slide.room_container(v-for="(item, i) in items")
        .cover(:style="bgcss(i)")
          h3 {{item.name}}
          font-awesome-icon.times(:icon="['fas', 'times']")
        .info
          h5 {{item.eng}}
            .icons
              span(v-if="item.equipment.breakfast")
                font-awesome-icon(:icon="['fas', 'coffee']")
              span(v-if="item.equipment.bathtub")
                font-awesome-icon(:icon="['fas', 'bath']")
              span(v-if="item.equipment.wifi")
                font-awesome-icon(:icon="['fas', 'wifi']")
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
  created () {
    this.bgcss()
  },
  mounted () {
    new Swiper('.swiper-container', this.swiper_init)
  },
  methods: {
    bgcss (i) {
      return {
        'background-image': "url('" + this.items[i].cover + "')"
      }
    }
  }
}
</script>

<style lang="sass">
  .room_container
    padding: 30px 0
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3)
    &:hover
      .cover
        background-size: 110% auto
  .cover
    width: 100%
    height: 150px
    background-color: #EEE
    position: relative
    background-size: cover
    background-position: center center
    background-size: 100% auto
    transition: 0.5s
    h3
      position: absolute
      bottom: 10px
      font-size: 20px
      padding: 5px 10px
      background-color: #fff
    .times
      position: absolute
      right: 3px
      top: 3px
      font-size: 20px
      color: white
      background-color: #000
      cursor: pointer
      transition: 0.5s
      &:hover
        color: red
  .info
    padding: 10px
    position: absolute
    bottom: 0
    h5
      font-size: 14px
    .icons
      display: inline-block
      margin-left: 10px
      span
        margin-right: 5px
        opacity: 0.8
</style>
