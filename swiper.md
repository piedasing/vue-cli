> 延續 vue + Onsen UI，再添加 Swiper (可滑動的輪播圖)

#### 安裝 Swiper

        npm install swiper --save

#### 在想要使用 Swiper 的頁面引入，或是創立一個 Swiper.vue

        import Swiper from 'swiper'
        import 'swiper/dist/css/swiper.min.css'

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

#### 在 html 中，添加 Swiper 作用的區域
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








