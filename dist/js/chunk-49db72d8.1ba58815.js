(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49db72d8"],{"1a33":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"list"}},[s("h2",[t._v("List")]),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field s6 col"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],ref:"select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose status of tasks")]),s("option",{attrs:{value:"Active"}},[t._v("Active")]),s("option",{attrs:{value:"Overdue"}},[t._v("Overdue")]),s("option",{attrs:{value:"Completed"}},[t._v("Completed")])]),s("label")])]),t.filter?s("button",{staticClass:"btn btn-small",on:{click:function(e){t.filter=null}}},[t._v("Show all")]):t._e(),t.tasks.length?s("table",[t._m(0),s("tbody",t._l(t.displayTasks,(function(e,a){return s("tr",{key:e.id,staticClass:"tableGroup"},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(new Date(e.date).toLocaleDateString()))]),s("td",{staticClass:"cutTd"},[s("div",{staticClass:"textCut"},[t._v(t._s(e.description))])]),s("td",[t._v(t._s(e.status))]),s("td",{staticClass:"noLine"},[s("router-link",{staticClass:"btn btn-small",staticStyle:{background:"#883ca3"},attrs:{tag:"button",to:"/task/"+e.id}},[t._v(" Open ")])],1)])})),0)]):s("h3",{staticStyle:{"text-align":"center"}},[t._v("No tasks")])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"tableGroup"},[s("th",[t._v("#")]),s("th",[t._v("Title")]),s("th",[t._v("Date")]),s("th",[t._v("Description")]),s("th",[t._v("Status")]),s("th",[t._v("Open")])])])}],i=(s("4de4"),{name:"List",components:{},data:function(){return{filter:null}},computed:{tasks:function(){return this.$store.getters.tasks},displayTasks:function(){var t=this;return this.tasks.filter((function(e){return!t.filter||e.status===t.filter}))}},mounted:function(){window.M.FormSelect.init(this.$refs.select)}}),l=i,r=(s("c8ab"),s("2877")),o=Object(r["a"])(l,a,n,!1,null,"0e82e18c",null);e["default"]=o.exports},5880:function(t,e,s){},c8ab:function(t,e,s){"use strict";var a=s("5880"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-49db72d8.1ba58815.js.map