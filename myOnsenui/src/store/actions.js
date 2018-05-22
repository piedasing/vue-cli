// 存放 action 函式
// import Vue from 'vue'
// import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }, num) => {
  console.log('actionIncrease')
  commit(types.INCREASE, num)
}

export const actionDecrease = ({ commit }, num) => {
  console.log('actionDecrease')
  commit(types.DECREASE, num)
}

export const actionCountReset = ({ commit }) => {
  console.log('actionCountReset')
  commit(types.COUNT_RESET)
}

export const addTodo = ({ commit }, newTodo) => {
  // 直接將 newTodo 傳遞給 mutation
  commit(types.ADD_TODO, newTodo)
}
const dataUrl = 'https://raw.githubusercontent.com/piedasing/json_test/master/json/document.json'

export const actionAJAX = ({ commit }) => {
  $.ajax({
    url: dataUrl,
    type: 'GET',
    async: false,
    success: function (response) {
      // console.log(res)
      const str = JSON.parse(response)
      commit(types.MY_API_SUCCESS, str)
    },
    error: function (xhr) {
      console.log('抓取失敗')
    }
  })
}
