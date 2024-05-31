"use strict";(self["webpackChunkssg60th_d_exam_client"]=self["webpackChunkssg60th_d_exam_client"]||[]).push([[712],{7367:function(t,e,i){i.d(e,{A:function(){return w}});var s=i(6768),l=i(4232),n=i(5130);const o={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r=(0,s.Fv)('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),a=[r],u={class:"container"},c={class:"col-12"},h={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},d=(0,s.Lk)("use",{"xlink:href":"#check-circle-fill"},null,-1),m=[d],p={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Info:"},b=(0,s.Lk)("use",{"xlink:href":"#info-fill"},null,-1),E=[b],k={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:"},T=(0,s.Lk)("use",{"xlink:href":"#exclamation-triangle-fill"},null,-1),g=[T],G={class:"alert-heading d-inline m-1"},f=(0,s.Lk)("div",{class:"col-12"},[(0,s.Lk)("hr")],-1),L={class:"col-12"},C={key:0,class:"col-12 d-grid gap-2"},M={key:1,class:"col-6 d-grid gap-2"},y={key:2,class:"col-6 d-grid gap-2"};function S(t,e,i,r,d,b){return(0,s.uX)(),(0,s.CE)(s.FK,null,[((0,s.uX)(),(0,s.CE)("svg",o,a)),(0,s.Lk)("div",u,[(0,s.bo)((0,s.Lk)("div",{class:(0,l.C4)(["alert row",b.typeColor1]),role:"alert"},[(0,s.Lk)("div",c,[(0,s.bo)(((0,s.uX)(),(0,s.CE)("svg",h,m,512)),[[n.aG,"primary"===i.MSGTYPE]]),(0,s.bo)(((0,s.uX)(),(0,s.CE)("svg",p,E,512)),[[n.aG,"warning"===i.MSGTYPE]]),(0,s.bo)(((0,s.uX)(),(0,s.CE)("svg",k,g,512)),[[n.aG,"danger"===i.MSGTYPE]]),(0,s.Lk)("h4",G,(0,l.v_)(i.TITLE),1)]),f,(0,s.Lk)("div",L,[(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.TEXT,((t,e)=>((0,s.uX)(),(0,s.CE)("li",{key:e},(0,l.v_)(t),1)))),128))])]),"OKOnly"===i.MODE?((0,s.uX)(),(0,s.CE)("div",C,[(0,s.Lk)("button",{type:"button",class:(0,l.C4)(b.typeColor2),onClick:e[0]||(e[0]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,s.Q3)("",!0),"OKCancel"===i.MODE?((0,s.uX)(),(0,s.CE)("div",M,[(0,s.Lk)("button",{type:"button",class:(0,l.C4)(b.typeColor2),onClick:e[1]||(e[1]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,s.Q3)("",!0),"OKCancel"===i.MODE?((0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:e[2]||(e[2]=e=>t.$emit("alertCheck",!0,"Cancel"))},"取消")])):(0,s.Q3)("",!0)],2),[[n.aG,t.$store.state.alertVisible]])])],64)}var v={name:":Alert",props:{MODE:String,MSGTYPE:String,TITLE:String,TEXT:Array},emits:["alertCheck"],data(){return{}},methods:{},computed:{typeColor1:function(){return"primary"===this.MSGTYPE?"alert-primary":"warning"===this.MSGTYPE?"alert-warning":"danger"===this.MSGTYPE?"alert-danger":void 0},typeColor2:function(){return"primary"===this.MSGTYPE?"btn btn-primary btn-sm":"warning"===this.MSGTYPE?"btn btn-warning btn-sm":"danger"===this.MSGTYPE?"btn btn-danger btn-sm":void 0}},watch:{}},I=i(1241);const O=(0,I.A)(v,[["render",S]]);var w=O},3712:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var s=i(6768),l=i(5130);const n={class:"container"},o=(0,s.Lk)("h2",{class:"text-center"},"題庫管理-題組修改",-1),r={class:"row"},a={class:"col-12"},u={class:"form-floating mb-3"},c=(0,s.Lk)("label",{for:"questionGroupIDInput"},"題組號",-1),h={class:"form-floating mb-3"},d=(0,s.Lk)("label",{for:"questionGroupNameInput"},"題組名",-1),m=(0,s.Lk)("option",{value:"true"},"上線",-1),p=(0,s.Lk)("option",{value:"false"},"停用",-1),b=[m,p],E={class:"col-12 d-grid gap-2 my-2"},k={class:"row"},T={class:"col-12 d-grid gap-2 my-2"};function g(t,e,i,m,p,g){const G=(0,s.g2)("Alert");return(0,s.uX)(),(0,s.CE)("div",n,[o,(0,s.Lk)("button",{class:"btn btn-outline-secondary btn-sm mb-3",type:"button",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},"返回上一頁"),(0,s.bF)(G,{MODE:p.MSG.MODE,MSGTYPE:p.MSG.TYPE,TITLE:p.MSG.TITLE,TEXT:p.MSG.TEXT,onAlertCheck:e[1]||(e[1]=(t,e)=>p.alertCheck={isClick:t,OKorCancel:e})},null,8,["MODE","MSGTYPE","TITLE","TEXT"]),(0,s.Lk)("div",r,[(0,s.Lk)("div",a,[(0,s.Lk)("div",u,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",name:"questionGroupIDInput","onUpdate:modelValue":e[2]||(e[2]=t=>p.questionGroup.QGID=t),placeholder:"題組號",disabled:""},null,512),[[l.Jo,p.questionGroup.QGID]]),c]),(0,s.Lk)("div",h,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",name:"questionGroupNameInput","onUpdate:modelValue":e[3]||(e[3]=t=>p.questionGroup.subject=t),placeholder:"題組名",disabled:""},null,512),[[l.Jo,p.questionGroup.subject]]),d]),(0,s.bo)((0,s.Lk)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example","onUpdate:modelValue":e[4]||(e[4]=t=>p.questionGroup.status=t)},b,512),[[l.u1,p.questionGroup.status]])]),(0,s.Lk)("div",E,[(0,s.Lk)("button",{class:"btn btn-primary btn-lg",type:"button",onClick:e[5]||(e[5]=t=>g.sendEdit())},"執行")])]),(0,s.Lk)("div",k,[(0,s.Lk)("div",T,[(0,s.Lk)("button",{class:"btn btn-danger btn-lg",type:"button",onClick:e[6]||(e[6]=t=>g.deleteQuestion())},"刪除題組")])])])}i(9325);var G=i(7367),f={name:"QuestionEdit",components:{Alert:G.A},data(){return{MSG:{MODE:"",TYPE:"",TITLE:"",TEXT:[]},alertCheck:!1,funcNum:0,questionGroup:{QGID:"",subject:"",status:""}}},methods:{sendEdit(){this.questionGroup.status="true"===this.questionGroup.status,this.$http.post("api/questionManage/modifyQuestionGroup",this.questionGroup).then((t=>{this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=1,this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=["已修改完成！"]})).catch((t=>{console.log(t)}))},deleteQuestion(){this.alertVisible=!0,this.MSG.MODE="OKCancel",this.funcNum=2,this.MSG.TYPE="danger",this.MSG.TITLE="系統警告",this.MSG.TEXT=["是否要刪除題庫？"]},hideAlert(){this.$store.commit("SET_ALERT_VISIBLE",!1),this.alertVisible=!1}},created(){this.questionGroup=this.$store.state.questGroupEdit},mounted(){this.$store.commit("SET_QUEST_GROUP_EDIT",{})},computed:{alertVisible:{get(){return this.$store.state.alertVisible},set(t){this.$store.commit("SET_ALERT_VISIBLE",t)}}},watch:{alertCheck:function(t){if(t.isClick)if("OK"===t.OKorCancel){if(0===this.funcNum)return;1===this.funcNum?(this.hideAlert(),this.$router.go(-1)):2===this.funcNum?(this.hideAlert(),this.$http.post("api/questionManage/deleteQuestionGroup",this.questionGroup).then((t=>{this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=3,this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=["已刪除完成！"]})).catch((t=>{console.log(t)}))):3===this.funcNum&&(this.hideAlert(),this.$router.go(-1))}else"Cancel"===t.OKorCancel&&(this.$store.commit("SET_ALERT_VISIBLE",!1),this.alertCheck=!1)}}},L=i(1241);const C=(0,L.A)(f,[["render",g]]);var M=C}}]);
//# sourceMappingURL=712.95069c4d.js.map