<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.left
        v-ons-back-button back
      div.center Page 6. Vuex
    .container
      h2 count:
        span.count {{count}}
      .set Set number:
        input(type="number" v-model="num")
        br
        button(@click="actionIncrease(num)") +{{num}}
        button(@click="actionDecrease(num)") -{{num}}
        button(@click="actionCountReset") 歸零
    hr
    .container
      h2 Todo List:
      input(
        type="text"
        placeholder="add Todo..."
        v-model="newTodo"
        @keyup.enter="actionAddTodo"
      )
      button(@click="actionAddTodo") add Todo
      ul
        li(v-for="(todo, index) in todos")
          span {{todo.content}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Page6',
  data () {
    return {
      num: 1,
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
      todos: 'getTodos'
    })
  },
  methods: {
    ...mapActions([
      // --- Count ---
      'actionIncrease',
      'actionDecrease',
      'actionCountReset',
      // ---Todo List---
      'addTodo'
    ]),
    actionAddTodo () {
      // 方法一、使用
      // this.addTodo( this.newTodo )
      // 方法二、不需要先引入 action 可以直接呼叫（調用）。
      // 使用 this.$store.dispatch( action(String), value );
      this.$store.dispatch('addTodo', this.newTodo)

      // add後，清除 data 中 input 的 value
      this.newTodo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
