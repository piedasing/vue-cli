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
