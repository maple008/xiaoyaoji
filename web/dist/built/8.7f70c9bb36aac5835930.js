webpackJsonp([8],{34:function(t,e,n){var s,i;s=n(35),i=n(36),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},35:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),u=s(i);e["default"]={data:function(){return{user:u["default"].user()}}}},36:function(t,e){t.exports=' <div class="db-relation cb"> <h1>关联账户</h1><br/> <p class=db-rel-desc>通过关联账户的绑定，您可以使用相关的授权账号登录小幺鸡服务。您也可以通过这些社会化服务，<br/>及时获取小幺鸡服务的信息。</p> <ul> <li class=ta-c> <i class="iconfont icon-github"></i> <p>Github</p> <input type=button class="btn btn-default" value=关联Github v-if=!user.bindGithub> <input type=button class="btn btn-info" value=取消关联 v-else> </li> <li class=ta-c> <i class="iconfont icon-weibo"></i> <p>微博</p> <input type=button class="btn btn-default" value=关联微博 v-if=!user.bindWeibo> <input type=button class="btn btn-info" value=取消关联 v-else> </li> <li class=ta-c> <i class="iconfont icon-qq"></i> <p>QQ</p> <input type=button class="btn btn-default" value=关联QQ v-if=!user.bindQQ> <input type=button class="btn btn-info" value=取消关联 v-else> </li> </ul> </div> '}});