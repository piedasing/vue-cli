<template lang="pug">
  #app
    v-ons-navigator(
      swipeable
      :page-stack="pageStack"
    )
      component(
        v-for="page in pageStack"
        @push-page="onPush"
        :is="page"
        :key="page.name"
        :page-stack="pageStack"
      )
</template>

<script>
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'

export default {
  name: 'App',
  components: {
    Home, Page1, Page2, Page3, Page4, Page5, Page6
  },
  data () {
    return {
      pageStack: [Home]
    }
  },
  methods: {
    onPush (value) {
      this.pageStack.push(value)
      console.log(this.pageStack)
    }
  }
}
</script>

<style lang="sass">

</style>
