function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{X3zk:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginPageModule",(function(){return h}));var o,i,c,r=e("ofXK"),a=e("TEn/"),s=e("3Pt+"),l=e("tyNb"),u=e("fXoL"),f=e("up+p"),g=e("ej43"),p=[{path:"",component:(o=function(){function n(t,e){_classCallCheck(this,n),this.googlePlus=t,this.authService=e,this.userData={}}return _createClass(n,[{key:"loginUser",value:function(){var n=this;this.googlePlus.login({}).then((function(t){n.userData=t,n.authService.login(t)})).catch((function(t){return n.userData="Error ".concat(JSON.stringify(t))}))}}]),n}(),o.\u0275fac=function(n){return new(n||o)(u.Jb(f.a),u.Jb(g.a))},o.\u0275cmp=u.Db({type:o,selectors:[["app-login"]],decls:4,vars:1,consts:[[3,"fullscreen"],["id","container"],[3,"click"]],template:function(n,t){1&n&&(u.Mb(0,"ion-content",0),u.Mb(1,"div",1),u.Mb(2,"ion-button",2),u.Tb("click",(function(){return t.loginUser()})),u.dc(3,"Sign in with Google"),u.Lb(),u.Lb(),u.Lb()),2&n&&u.Zb("fullscreen",!0)},directives:[a.c,a.b],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]}),o)}],b=((c=function n(){_classCallCheck(this,n)}).\u0275mod=u.Hb({type:c}),c.\u0275inj=u.Gb({factory:function(n){return new(n||c)},imports:[[l.i.forChild(p)],l.i]}),c),h=((i=function n(){_classCallCheck(this,n)}).\u0275mod=u.Hb({type:i}),i.\u0275inj=u.Gb({factory:function(n){return new(n||i)},imports:[[r.b,s.a,a.h,b]]}),i)}}]);