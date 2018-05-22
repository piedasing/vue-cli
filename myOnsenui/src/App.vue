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
import Begin from './components/Begin'
import CallComponent from './components/CallComponent'
import PushPages from './components/PushPages'
import UseAJAX from './components/UseAJAX'
import GotoCtoF from './components/GotoCtoF'
import VuexPractice from './components/VuexPractice'
import CtoF from './components/CtoF'
import MyVuex from './components/MyVuex'
import Page8 from './components/Page8'

export default {
  name: 'App',
  components: {
    Home,
    Begin,
    CallComponent,
    PushPages,
    UseAJAX,
    GotoCtoF,
    VuexPractice,
    CtoF,
    MyVuex,
    Page8
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
