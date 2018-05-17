### vue-cli + Onsen UI

> 用 vue 搭配 onsenui 來製作手機優先(mobile first)的網頁

##### 安裝相關套件

###### 安裝 vue-cli
        npm install -g vue-cli
        
###### 安裝 onsenui
> 方法一: 建立vue專案

        vue init webpack <projectname>
> 開啟專案，執行 npm start ，如果安裝正確，即可開啟 localhost

> 安裝 onsenui相關套件

        npm install onsenui vue-onsenui --save-dev
        
>> 安裝完要在main.js將onsenui的相關css與js引入

        // Webpack CSS import
        import 'onsenui/css/onsenui.css';
        import 'onsenui/css/onsen-css-components.css';
        
        // JS import
        import Vue from 'vue';
        import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
        
        Vue.use(VueOnsen);
        
> 方法二:

>> cordova 版本:

        vue init OnsenUI/vue-cordova-webpack hello-world
>> pwa 版本:

        vue init OnsenUI/vue-pwa-webpack hello-world
>> 兩個都可以，我是用cordova 版本

###### 如果有要用 pug 以及 sass，不需要的話可以忽略

        npm install pug pug-loader pug-filters --save
        
        npm install sass sass-loader node-sass --save

###### 開始使用
> 開啟main.js，查看是否正確引入onsenui相關套件

![main.js](https://github.com/piedasing/vue-cli/blob/master/imgs/main.png "main.js")

***

> 打開 App.vue，放上換頁最重要的元件 navigator

![App.vue](https://github.com/piedasing/vue-cli/blob/master/imgs/app.png "App.vue")

1. data中pageStack設定的[Home]即為要顯示的首頁
2. pageStack 要與 navigator 中的 page-stack 綁定(v-bind)，注意大小寫
3. component tag 則是用(v-for)來顯示存放在 pageStack 的 page
4. @push-page="onPush" 則是監聽(v-on)是否有 push-page 這個事件發生
5. :key 是綁定 page 的 name ，如果沒有給key，那麼Osen UI就不會執行換頁<!!!很重要!!!>

***

> 接下來換寫 Home.vue

![Home.vue](https://github.com/piedasing/vue-cli/blob/master/imgs/home.png "Home.vue")

> 這個頁面就依照需求放置需要的東西就可以了，但是有一個很重要的重點!!!!

> template底下，須以 v-ons-page 為最外層元素，如果不是的話， navigator 就會找不到

> 假如跟我一樣放置按鈕來切換頁面的話，記得要監聽(v-on)點擊事件，並透過 $emit 發送事件，讓 App.vue 接收

> 接收後，就會將發送事件的 Page 參數 push 到 pageStack，就可以換頁囉!

***

> 其他要切換的Page頁面

![Page1.vue](https://github.com/piedasing/vue-cli/blob/master/imgs/page.png "Page1.vue")

> 記得也是要把v-ons-page放在最外層

> 最後再加上一點 css 裝飾一下就完成拉~~
