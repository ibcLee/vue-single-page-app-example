var Vue = require('vue');
var VueRouter = require('vue-router')
Vue.use(VueRouter);
var router = new VueRouter({
    history:true,
    hashbang:false // url = html5mode
});
require("./router.js")(router); // custom business router

var rootScope = require('./page/root.vue'); // this is the rootframe
router.start(rootScope,'body');