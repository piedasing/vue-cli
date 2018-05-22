<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.center {{title}}
    .grid-container
      .grid-item(@click="push('Begin')")
        font-awesome-icon(:icon="['fas', 'bell']")
      .grid-item(@click="push('CallComponent')")
        font-awesome-icon(:icon="['fas', 'address-book']")
      .grid-item(@click="push('PushPages')")
        font-awesome-icon(:icon="['fab', 'twitter']")
      .grid-item(@click="push('UseAJAX')")
        font-awesome-icon(:icon="['fas', 'calendar']")
      .grid-item(@click="push('GotoCtoF')")
        font-awesome-icon(:icon="['fas', 'comment']")
      .grid-item(@click="push('VuexPractice')")
        font-awesome-icon(:icon="['fas', 'music']")
      .grid-item(@click="push('MyVuex')")
        font-awesome-icon(:icon="['fab', 'vuejs']")
      .grid-item(@click="push('Page8')")
        font-awesome-icon(:icon="['fab', 'android']")
</template>

<script>
export default {
  name: 'Home',
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
