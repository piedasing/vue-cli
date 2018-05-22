// 存放 state 與 mutation 函式
import * as types from './mutations_type.js'
// import Vue from 'vue'

// state
export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ],
  mydata: []
}

// 這邊簡單做一個 todo 的流水 key
// 預設值是 todos 的長度
let todoKey = state.todos.length

// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state, num) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.count += parseInt(num)
    console.log('INCREASE', num, 'state?', state.count)
  },
  [types.DECREASE] (state, num) {
    state.count -= parseInt(num)
    console.log('DECREASE', num, 'state?', state.count)
  },
  [types.COUNT_RESET] (state) {
    // 歸零，將 state 設定為 0
    state.count = 0
    console.log('COUNT_RESET - state?', state.count)
  },
  // --- todo list ---
  [types.ADD_TODO] (state, newTodo) {
    // todos 是一個 Array 所以 push 一個同結構的 Object
    state.todos.push({
      key: todoKey, // 流水 key
      content: newTodo, // 新 todo 的內容
      done: false // 預設是未做完
    })
    // 流水 key +1
    todoKey++
  },
  // --- MyVuex ---
  [types.MY_API_SUCCESS] (state, mydata) {
    // 收到資料改變 state
    state.mydata = mydata
    console.log(state.mydata)
  }
}
