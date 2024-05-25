"use strict";(self["webpackChunkssg60th_d_exam_client"]=self["webpackChunkssg60th_d_exam_client"]||[]).push([[802],{2204:function(t,e,l){l.d(e,{A:function(){return I}});var n=l(6768),s=l(4232),a=l(5130);const i={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},o=(0,n.Fv)('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),r=[o],c={class:"container"},u={class:"col-12"},d={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},h=(0,n.Lk)("use",{"xlink:href":"#check-circle-fill"},null,-1),m=[h],p={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Info:"},b=(0,n.Lk)("use",{"xlink:href":"#info-fill"},null,-1),E=[b],k={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:"},g=(0,n.Lk)("use",{"xlink:href":"#exclamation-triangle-fill"},null,-1),T=[g],L={class:"alert-heading d-inline m-1"},M=(0,n.Lk)("div",{class:"col-12"},[(0,n.Lk)("hr")],-1),y={class:"col-12"},f=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary btn-sm"},"取消",-1),v=[f];function C(t,e,l,o,h,b){return(0,n.uX)(),(0,n.CE)(n.FK,null,[((0,n.uX)(),(0,n.CE)("svg",i,r)),(0,n.Lk)("div",c,[(0,n.bo)((0,n.Lk)("div",{class:(0,s.C4)(["alert row",b.typeColor1]),role:"alert"},[(0,n.Lk)("div",u,[(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",d,m,512)),[[a.aG,"primary"===l.MSGTYPE]]),(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",p,E,512)),[[a.aG,"warning"===l.MSGTYPE]]),(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",k,T,512)),[[a.aG,"danger"===l.MSGTYPE]]),(0,n.Lk)("h4",L,(0,s.v_)(l.TITLE),1)]),M,(0,n.Lk)("div",y,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.TEXT,((t,e)=>((0,n.uX)(),(0,n.CE)("li",{key:e},(0,s.v_)(t),1)))),128))])]),"OKOnly"===l.MODE?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"col-12 d-grid gap-2",onClick:e[0]||(e[0]=(...t)=>b.hideAlert&&b.hideAlert(...t))},[(0,n.Lk)("button",{type:"button",class:(0,s.C4)(b.typeColor2)},"確定",2)])):(0,n.Q3)("",!0),"OKCancel"===l.MODE?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"col-6 d-grid gap-2",onClick:e[1]||(e[1]=e=>t.$emit("alertCheck",!0))},[(0,n.Lk)("button",{type:"button",class:(0,s.C4)(b.typeColor2)},"確定",2)])):(0,n.Q3)("",!0),"OKCancel"===l.MODE?((0,n.uX)(),(0,n.CE)("div",{key:2,class:"col-6 d-grid gap-2",onClick:e[2]||(e[2]=(...t)=>b.hideAlert&&b.hideAlert(...t))},v)):(0,n.Q3)("",!0)],2),[[a.aG,t.$store.state.alertVisible]])])],64)}var S={name:":Alert",props:{MODE:String,MSGTYPE:String,TITLE:String,TEXT:Array},emits:["alertCheck"],data(){return{}},methods:{hideAlert(){this.$store.commit("SET_ALERT_VISIBLE",!1)}},computed:{typeColor1:function(){return"primary"===this.MSGTYPE?"alert-primary":"warning"===this.MSGTYPE?"alert-warning":"danger"===this.MSGTYPE?"alert-danger":void 0},typeColor2:function(){return"primary"===this.MSGTYPE?"btn btn-primary btn-sm":"warning"===this.MSGTYPE?"btn btn-warning btn-sm":"danger"===this.MSGTYPE?"btn btn-danger btn-sm":void 0}}},G=l(1241);const x=(0,G.A)(S,[["render",C]]);var I=x},8802:function(t,e,l){l.r(e),l.d(e,{default:function(){return I}});var n=l(6768),s=l(5130);const a={class:"container"},i=(0,n.Lk)("h2",{class:"text-center"},"帳戶管理-編輯",-1),o={class:"row"},r={class:"col-12"},c={class:"form-floating mb-3"},u=(0,n.Lk)("label",{for:"studentIDInput"},"學號",-1),d={class:"form-floating mb-3"},h=(0,n.Lk)("label",{for:"userNameInput"},"名稱",-1),m={class:"form-floating mb-3"},p=(0,n.Lk)("label",{for:"accountInput"},"帳號",-1),b=(0,n.Lk)("option",{value:"Admin"},"管理者",-1),E=(0,n.Lk)("option",{value:"User"},"使用者",-1),k=(0,n.Lk)("option",{value:"Register"},"未審核",-1),g=(0,n.Lk)("option",{value:"Stop"},"停用",-1),T=[b,E,k,g],L={class:"col-12 d-grid gap-2 my-2"},M={class:"col-12 d-grid gap-2 my-2"},y={class:"col-12 d-grid gap-2 my-2"};function f(t,e,l,b,E,k){const g=(0,n.g2)("Alert");return(0,n.uX)(),(0,n.CE)("div",a,[i,(0,n.Lk)("button",{class:"btn btn-outline-secondary btn-sm mb-3",type:"button",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},"返回上一頁"),(0,n.bF)(g,{MODE:E.MSG.MODE,MSGTYPE:E.MSG.TYPE,TITLE:E.MSG.TITLE,TEXT:E.MSG.TEXT,onAlertCheck:e[1]||(e[1]=t=>E.alertCheck=t)},null,8,["MODE","MSGTYPE","TITLE","TEXT"]),(0,n.Lk)("div",o,[(0,n.Lk)("div",r,[(0,n.Lk)("div",c,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",name:"studentIDInput","onUpdate:modelValue":e[2]||(e[2]=t=>E.user.studentID=t),placeholder:"學號",disabled:""},null,512),[[s.Jo,E.user.studentID]]),u]),(0,n.Lk)("div",d,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",name:"userNameInput","onUpdate:modelValue":e[3]||(e[3]=t=>E.user.name=t),placeholder:"名稱",disabled:""},null,512),[[s.Jo,E.user.name]]),h]),(0,n.Lk)("div",m,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",name:"accountInput","onUpdate:modelValue":e[4]||(e[4]=t=>E.user.account=t),placeholder:"帳號",disabled:""},null,512),[[s.Jo,E.user.account]]),p]),(0,n.bo)((0,n.Lk)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example","onUpdate:modelValue":e[5]||(e[5]=t=>E.user.ident=t)},T,512),[[s.u1,E.user.ident]])]),(0,n.Lk)("div",L,[(0,n.Lk)("button",{class:"btn btn-success btn-lg",type:"button",onClick:e[6]||(e[6]=e=>k.sendEdit(t.studentID,t.userName,t.account,t.ident))},"確認修改")])]),(0,n.Lk)("div",M,[(0,n.Lk)("button",{class:"btn btn-warning btn-lg",type:"button",onClick:e[7]||(e[7]=(...t)=>k.resetExamExp&&k.resetExamExp(...t))},"重置學習紀錄")]),(0,n.Lk)("div",y,[(0,n.Lk)("button",{class:"btn btn-danger btn-lg",type:"button",onClick:e[8]||(e[8]=(...t)=>k.deleteUser&&k.deleteUser(...t))},"刪除帳戶")])])}var v=l(9325),C=l(2204),S={name:"AccountEdit",components:{Alert:C.A},data(){return{MSG:{MODE:"",TYPE:"",TITLE:"",TEXT:[]},alertCheck:!1,user:{studentID:"",name:"",account:"",ident:""}}},methods:{sendEdit(){this.$http.post("api/accountManage/modifyUser",this.user).then((t=>{200===t.data.code&&(this.alertVisible=!0,this.MSG.MODE="OKOnly",this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=["已修改完成！"])})).catch((t=>{console.log(t)}))},resetExamExp(){this.$http.post("api/accountManage/resetExamExp",this.user).then((t=>{200===t.data.code?(this.alertVisible=!0,this.MSG.MODE="OKOnly",this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=["已重置完成！"]):console.log(t.data.code)})).catch((t=>{console.log(t)}))},deleteUser(){this.$http.post("api/accountManage/deleteUser",this.user).then((t=>{200===t.data.code&&(this.alertVisible=!0,this.MSG.MODE="OKOnly",this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=["已刪除完成！"]),setTimeout((()=>{this.alertVisible=!1,v.A.go(-1)}),1e3)})).catch((t=>{console.log(t)}))}},mounted(){this.user=this.$store.state.accountEdit},computed:{alertVisible:{get(){return this.$store.state.alertVisible},set(t){this.$store.commit("SET_ALERT_VISIBLE",t)}}},watch:{}},G=l(1241);const x=(0,G.A)(S,[["render",f]]);var I=x}}]);
//# sourceMappingURL=802.8ec7d02e.js.map