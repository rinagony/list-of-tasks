(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64c8"],{"1d21":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",attrs:{id:"task"}},[t.task?e("div",{staticClass:"col s6 offset-s3"},[e("h1",[t._v(t._s(t.task.title))]),e("form",{on:{submit:function(s){return s.preventDefault(),t.submitHandler(s)}}},[e("div",{ref:"chipsf",staticClass:"chips"}),e("div",{staticClass:"input-field"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",staticStyle:{"min-height":"150px"},attrs:{id:"description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),e("label",{attrs:{for:"description"}},[t._v("Description")]),e("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),e("input",{ref:"datepicker",attrs:{type:"text"}}),"completed"!=t.task.status?e("div",[e("button",{staticClass:"btn",staticStyle:{"margin-right":"1rem",background:"#883ca3"},attrs:{type:"submit"}},[t._v("Refresh")]),e("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:t.completeTask}},[t._v("Complete the task")])]):t._e()])]):e("h1",[t._v("Task not found")])])},a=[],n=(e("a4d3"),e("e01a"),{name:"Task",components:{},computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},mounted:function(){this.description=this.task.description,this.chips=window.M.Chips.init(this.$refs.chips,{placeholder:"Task tags",data:this.task.tags}),this.date=window.M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((function(){window.M.updateTextFields()}),0)},data:function(){return{description:"",chips:null,date:null}},methods:{submitHandler:function(){this.$store.dispatch("updateTask",{id:this.task.id,description:this.description,date:this.date.date}),this.$router.push("/list")},completeTask:function(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/list")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}}),r=n,o=e("2877"),d=Object(o["a"])(r,i,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b64c8.a47722b9.js.map