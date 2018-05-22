> 延續 vue + Onsen UI，再添加 Swiper (可滑動的輪播圖)

#### 安裝 Swiper

        npm install swiper --save

#### 在想要使用 Swiper 的頁面引入，或是另外創建一個 Swiper.vue

        import Swiper from 'swiper'
        import 'swiper/dist/css/swiper.min.css'
        
![Swiper.vue](https://github.com/piedasing/vue-cli/blob/swiper/imgs/swiper/swiper.png "Swiper.vue")

#### 在 mounted 中初始化 Swiper

        new Swiper('.swiper-container', {
           loop: true,
           slidesPerView: 3,
           spaceBetween: 15,
           pagination: {
             el: '.swiper-pagination',
             clickable: true
           },
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev'
           }
         })

#### 在 template 中，添加 Swiper 作用的區域
> '.swiper-container' 要跟初始化的class名稱一樣，結構如下:

        .swiper-container
          .swiper-wrapper
            .swiper-slide Slide1
            .swiper-slide Slide2
            .swiper-slide Slide3
                  .
                  .
                  .
          .swiper-pagination  //optional
          .swiper-button-prev  //optional
          .swiper-button-next  //optional
          .swiper-scrollbar  //optional

> '.swiper-slide':輪播圖的內容

> '.swiper-pagination'、'.swiper-button-prev/next'、'.swiper-scrollbar':是輪播圖的元件可選擇要不要用

> page參考:

![Page.vue](https://github.com/piedasing/vue-cli/blob/swiper/imgs/swiper/page1.png "Page.vue")

> 如果有使用 webpack 的 eslint 套件，會遇到 'no-new' 的錯誤，只要到 eslintrc.js內新增
        
        rules:{
          'no-new': 0
        }

>> 以上步驟結束即可完成 Swiper 的運作

> 但是，隨著 Slide 的頁面越來越多，撰寫上也越來越複雜，會變得不好製作及編排頁面

#### 修改

> 將上面的 Page 頁面改成呼叫 Swiper 這個 component

> 藉由 Swiper 使用 props 接收參數，就可以達到簡單管理，又能輕鬆在不同頁面中產生不同內容的輪播圖

> Page 改成:

![Page.vue](https://github.com/piedasing/vue-cli/blob/swiper/imgs/swiper/page2.png "Page.vue")

> Swiper:

![Swiper.vue](https://github.com/piedasing/vue-cli/blob/swiper/imgs/swiper/swiper.png "Swiper.vue")

***

##### 0522新增

> 透過ajax撈取json資料，再傳入Swiper產生輪播圖

> 首先，要先了解怎麼透過ajax撈資料

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

* dataUrl是要去撈的資料所存放的url
* 撈取成功就會將撈出來的資料存回來vue的data中
* 使用created呼叫這個ajax function，就可以在vue渲染網頁前完成撈取，如果是用mounted，就會導致渲染後才撈取資料，Swiper的分頁就會出問題(因為不知道資料有幾筆)

***

> 完整程式如下:

![Page4.vue]( "Page4.vue")

* 除了用ajax撈取資料外，Swiper的初始化參數也需要新增以下兩行
* 當Swiper有變動時，就會重新初始化

        observer: true,
        observeParents: true
        

