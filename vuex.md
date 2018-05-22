### Vuex

> 用途: 管理 Vue 組件間的參數傳遞

#### 運作流程

> action ----> commit ----> mutation

* 透過 action 觸發， 用 commit 與 mutation 溝通
* mutation 接收到 commit 後，做邏輯或資料運算改變 state
* 只有 mutation 可以改變 state ，其他都不能改變!!
* action 可以處理非同步事件， mutation 只能處理同步
* 非同步的事件由 action 去處理的話，就可以保證到了 mutation 的資料都是即時的，計算後的狀態也是現在進行式

#### 安裝

    npm install vuex --save

#### 使用
    
> 首先，先在 src 底下創建 store 資料夾，並在裡面分別建立

* index.js
* action.js
* getters.js
* mutations_type.js
* mutations.js

***

* index.js

> 將其他檔案 import 進來，並將模式設定成嚴格(禁止直接修改state)

![index.js](https://github.com/piedasing/vue-cli/blob/swiper/imgs/vuex/index.png "index.js")

***

* actions.js

> 用類似事件觸發的方式，觸發後執行該 commit，並將參數帶到 mutations.js 做運算

![actions.js](https://github.com/piedasing/vue-cli/blob/swiper/imgs/vuex/actions.png "actions.js")

***

* getters.js

> 存放 getter 函式，只負責取 state 供元件使用

![getters.js](https://github.com/piedasing/vue-cli/blob/swiper/imgs/vuex/getters.png "getters.js")

***

* mutations.js

> 做完運算後，改變 state

![mustations.js](https://github.com/piedasing/vue-cli/blob/swiper/imgs/vuex/mutations.png "mutation.js")

***

* mutations_type.js

> 存放 mutation key

![mutations_type.js](https://github.com/piedasing/vue-cli/blob/swiper/imgs/vuex/mutation_type.png "mutations_type.js")

***





