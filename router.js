var Vue = require('vue');
module.exports = function(router){
    router.map({
        '/': {
            component: require('./page/page1.vue') // 同步方式载入的页面，模块会打包进main.js
        },
        '/inner':{
            component: function(resolve){
                require(['./page/page2.vue'],resolve); // 异步方式载入的页面，模块会单独打包并异步载入，无需更多配置
            }
        },
        '/inner/:id':{
            component: function(resolve){
                require(['./page/page3.vue'],resolve);
            }
        }
    });

};