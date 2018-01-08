'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _store = require('common/js/store.js');

var _store2 = _interopRequireDefault(_store);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _goodsDetail = require('./goodsDetail.vue');

var _goodsDetail2 = _interopRequireDefault(_goodsDetail);

var _goods = require('components/goods/goods.vue');

var _goods2 = _interopRequireDefault(_goods);

var _goodsDetail3 = require('components/goodsDetail/goodsDetail.vue');

var _goodsDetail4 = _interopRequireDefault(_goodsDetail3);

var _goodsComment = require('components/goodsComment/goodsComment.vue');

var _goodsComment2 = _interopRequireDefault(_goodsComment);

require('common/stylus/index.styl');

require('common/css/reset.css');

require('common/css/animate.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
_vue2.default.use(_vueRouter2.default); // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueJsonp2.default);
_vue2.default.use(_vueLazyload2.default);
var routes = [{ path: '*', component: _goods2.default }, { path: '/goods/:id', component: _goods2.default }, { path: '/goodsDetail/:id', component: _goodsDetail4.default }, { path: '/goodsComment/:id', component: _goodsComment2.default }];
// 创建路由
var router = new _vueRouter2.default({
  routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new _vue2.default({
  template: '<GoodsDetail/>',
  components: { GoodsDetail: _goodsDetail2.default },
  store: _store2.default,
  router: router,
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=goodsDetail.js.map