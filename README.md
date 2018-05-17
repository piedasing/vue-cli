### vue-cli + Onsen UI

> 用vue搭配onsenui來製作手機優先(mobile first)的網頁

##### 安裝相關套件

###### 安裝 vue-cli
        npm install -g vue-cli
###### 安裝完成後，建立vue專案
        vue init webpack <projectname>
> 開啟專案，執行 npm start ，如果安裝正確，即可開啟 localhost
###### 安裝 onsenui
> 方法一:

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

>> cordov 版本:

        vue init OnsenUI/vue-cordova-webpack hello-world
>> pwa 版本:

        vue init OnsenUI/vue-pwa-webpack hello-world
>> 兩個都可以，我是用cordova 版本

###### 開始使用
> 開啟main.js，查看是否正確引入onsenui相關套件

![main.js](https://github.com/piedasing/vue-cli/blob/master/imgs/main.png)

> 在App.vue放上 navigator

![App.vue](https://github.com/piedasing/vue-cli/blob/master/imgs/app.png)

> data中pageStack設定的[Home]即為要顯示的首頁

> pageStack 要與 navigator 中的 page-stack 綁定(v-bind)，注意大小寫

> component元件則是以v-for來呼叫其他頁面的component
