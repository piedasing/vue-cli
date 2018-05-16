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

