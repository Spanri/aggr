(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{233:function(t,n,e){var content=e(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("23693414",content,!0,{sourceMap:!1})},268:function(t,n,e){"use strict";var o=e(233);e.n(o).a},269:function(t,n,e){(n=t.exports=e(39)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Ubuntu&display=swap);",""]),n.push([t.i,"*[data-v-332f67c3]{font-family:Ubuntu,serif}button[data-v-332f67c3]:hover{cursor:pointer}[data-v-332f67c3]::-webkit-input-placeholder{color:#373737}[data-v-332f67c3]::-moz-placeholder{color:#373737}[data-v-332f67c3]:-ms-input-placeholder{color:#373737}[data-v-332f67c3]::-ms-input-placeholder{color:#373737}[data-v-332f67c3]::placeholder{color:#373737}*[data-v-332f67c3],[data-v-332f67c3]:after,[data-v-332f67c3]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0}.signup2__button[data-v-332f67c3]{margin-bottom:50px!important}.signup2__button+.signup2__button[data-v-332f67c3]{margin-left:15px}",""])},299:function(t,n,e){"use strict";e.r(n);var o={name:"Signup2",components:{Dropdown:function(){return Promise.all([e.e(1),e.e(2)]).then(e.bind(null,303))},Button:function(){return e.e(0).then(e.bind(null,297))}},data:function(){return{status:"",statuses:[{text:"Учусь в 11 классе"},{text:"Учусь в классе меньше 11"}]}},methods:{onSubmit:function(){this.$emit("next",{phase:"Signup3",isAdd:!0,data:{status:this.status.text}})},onPrev:function(){this.$emit("next",{phase:"Signup1",isAdd:!1,data:{}})}}},r=(e(268),e(10)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"signup2",on:{submit:function(n){return n.preventDefault(),t.onSubmit(n)}}},[e("p",{staticClass:"input-block__title"},[t._v("Кто вы?")]),t._v(" "),e("Dropdown",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{flow:"horizontal",items:t.statuses},model:{value:t.status,callback:function(n){t.status=n},expression:"status"}},[t._v("\n\t\tasd "+t._s(t.status.text)+"\n\t")]),t._v(" "),e("Button",{staticClass:"signup2__button signup2__button_prev",attrs:{type:"button",themeType:!0,size:"large"},on:{click:function(n){return t.onPrev()}}},[t._v("\n\t\tНАЗАД\n\t")]),t._v(" "),e("Button",{staticClass:"signup2__button signup2__button_next",attrs:{type:"submit",themeType:!0,size:"large"}},[t._v("\n\t\tДАЛЕЕ\n\t")]),t._v(" "),e("v-dialog")],1)}),[],!1,null,"332f67c3",null);n.default=component.exports}}]);