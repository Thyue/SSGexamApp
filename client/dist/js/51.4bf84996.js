"use strict";(self["webpackChunkssg60th_d_exam_client"]=self["webpackChunkssg60th_d_exam_client"]||[]).push([[51],{8755:function(t,s,e){e.d(s,{A:function(){return A}});var i=e(6768),n=e(5130),l=e(4232);const a={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r=(0,i.Fv)('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),c=[r],o={class:"container"},h={class:"alert-background"},u={class:"col-12"},d={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},T=(0,i.Lk)("use",{"xlink:href":"#check-circle-fill"},null,-1),E=[T],b={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Info:"},m=(0,i.Lk)("use",{"xlink:href":"#info-fill"},null,-1),g=[m],M={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:"},k=(0,i.Lk)("use",{"xlink:href":"#exclamation-triangle-fill"},null,-1),p=[k],S={class:"alert-heading d-inline m-1"},C=(0,i.Lk)("div",{class:"col-12"},[(0,i.Lk)("hr")],-1),y={class:"col-12"},G={key:0,class:"col-12 d-grid gap-2"},L={key:1,class:"col-6 d-grid gap-2"},f={key:2,class:"col-6 d-grid gap-2"};function v(t,s,e,r,T,m){return(0,i.uX)(),(0,i.CE)(i.FK,null,[((0,i.uX)(),(0,i.CE)("svg",a,c)),(0,i.Lk)("div",o,[(0,i.bo)((0,i.Lk)("div",h,null,512),[[n.aG,t.$store.state.alertVisible]]),(0,i.bo)((0,i.Lk)("div",{class:(0,l.C4)(["alert row",m.typeColor1]),role:"alert"},[(0,i.Lk)("div",u,[(0,i.bo)(((0,i.uX)(),(0,i.CE)("svg",d,E,512)),[[n.aG,"primary"===e.MSGTYPE]]),(0,i.bo)(((0,i.uX)(),(0,i.CE)("svg",b,g,512)),[[n.aG,"warning"===e.MSGTYPE]]),(0,i.bo)(((0,i.uX)(),(0,i.CE)("svg",M,p,512)),[[n.aG,"danger"===e.MSGTYPE]]),(0,i.Lk)("h4",S,(0,l.v_)(e.TITLE),1)]),C,(0,i.Lk)("div",y,[(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.TEXT,((t,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s},(0,l.v_)(t),1)))),128))])]),"OKOnly"===e.MODE?((0,i.uX)(),(0,i.CE)("div",G,[(0,i.Lk)("button",{type:"button",class:(0,l.C4)(m.typeColor2),onClick:s[0]||(s[0]=s=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,i.Q3)("",!0),"OKCancel"===e.MODE?((0,i.uX)(),(0,i.CE)("div",L,[(0,i.Lk)("button",{type:"button",class:(0,l.C4)(m.typeColor2),onClick:s[1]||(s[1]=s=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,i.Q3)("",!0),"OKCancel"===e.MODE?((0,i.uX)(),(0,i.CE)("div",f,[(0,i.Lk)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:s[2]||(s[2]=s=>t.$emit("alertCheck",!0,"Cancel"))},"取消")])):(0,i.Q3)("",!0)],2),[[n.aG,t.$store.state.alertVisible]])])],64)}var X={name:":Alert",props:{MODE:String,MSGTYPE:String,TITLE:String,TEXT:Array},emits:["alertCheck"],data(){return{}},methods:{},computed:{typeColor1:function(){return"primary"===this.MSGTYPE?"alert-primary":"warning"===this.MSGTYPE?"alert-warning":"danger"===this.MSGTYPE?"alert-danger":void 0},typeColor2:function(){return"primary"===this.MSGTYPE?"btn btn-primary btn-sm":"warning"===this.MSGTYPE?"btn btn-warning btn-sm":"danger"===this.MSGTYPE?"btn btn-danger btn-sm":void 0}},watch:{}},O=e(1241);const w=(0,O.A)(X,[["render",v]]);var A=w},1051:function(t,s,e){e.r(s),e.d(s,{default:function(){return m}});e(4114);var i=e(6768);const n={class:"container"},l=(0,i.Lk)("h2",{class:"text-center"},"系統管理",-1),a={class:"row"},r={class:"col-6 d-grid gap-2 my-2"},c={class:"col-6 d-grid gap-2 my-2"},o={class:"col-12 d-grid gap-2 my-2"},h={class:"col-12 d-grid gap-2 my-2"};function u(t,s,e,u,d,T){const E=(0,i.g2)("Alert");return(0,i.uX)(),(0,i.CE)("div",n,[l,(0,i.Lk)("button",{class:"btn btn-outline-secondary btn-sm mb-3",type:"button",onClick:s[0]||(s[0]=s=>t.$router.go(-1))},"返回上一頁"),(0,i.bF)(E,{MODE:d.MSG.MODE,MSGTYPE:d.MSG.TYPE,TITLE:d.MSG.TITLE,TEXT:d.MSG.TEXT,onAlertCheck:s[1]||(s[1]=(t,s)=>d.alertCheck={isClick:t,OKorCancel:s})},null,8,["MODE","MSGTYPE","TITLE","TEXT"]),(0,i.Lk)("div",a,[(0,i.Lk)("div",r,[(0,i.Lk)("button",{class:"btn btn-success btn-lg",type:"button",onClick:s[2]||(s[2]=s=>t.$router.push("/accountManage"))},"帳戶管理")]),(0,i.Lk)("div",c,[(0,i.Lk)("button",{class:"btn btn-primary btn-lg",type:"button",onClick:s[3]||(s[3]=s=>t.$router.push("/questionManage"))},"題庫管理")]),(0,i.Lk)("div",o,[(0,i.Lk)("button",{class:"btn btn-info btn-lg",type:"button",onClick:s[4]||(s[4]=s=>t.$router.push("/countDownEdit"))},"設定倒數時間")]),(0,i.Lk)("div",h,[(0,i.Lk)("button",{class:"btn btn-danger btn-lg",type:"button",onClick:s[5]||(s[5]=(...t)=>T.resetDB&&T.resetDB(...t))},"資料庫初始化")])])])}var d=e(8755),T={name:"SystemManage",components:{Alert:d.A},data(){return{MSG:{MODE:"",TYPE:"",TITLE:"",TEXT:[]},alertCheck:!1,funcNum:0}},methods:{resetDB(){this.alertVisible=!0,this.MSG.MODE="OKCancel",this.funcNum=1,this.MSG.TYPE="warning",this.MSG.TITLE="系統提示",this.MSG.TEXT=["確定要資料庫初始化？"]},hideAlert(){this.$store.commit("SET_ALERT_VISIBLE",!1),this.alertVisible=!1}},mounted(){},computed:{alertVisible:{get(){return this.$store.state.alertVisible},set(t){this.$store.commit("SET_ALERT_VISIBLE",t)}}},watch:{alertCheck:function(t){if(t.isClick)if("OK"===t.OKorCancel){if(0===this.funcNum)return;-1===this.funcNum?this.hideAlert():-2===this.funcNum?(this.hideAlert(),this.$router.go(-1)):1===this.funcNum?this.$http.post("api/systemManage/resetDatabase").then((t=>{200===t.data.code?(this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=2,this.MSG.TYPE="primary",this.MSG.TITLE="系統提示",this.MSG.TEXT=[],this.MSG.TEXT=this.MSG.TEXT.concat(t.data.msg),this.MSG.TEXT=["資料庫初始化。","請重新登入。"]):(this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=-1,this.MSG.TYPE="danger",this.MSG.TITLE="系統錯誤",this.MSG.TEXT=[],this.MSG.TEXT=this.MSG.TEXT.concat(t.data.msg),""!==t.data.sys&&this.MSG.TEXT.push(t.data.sys))})).catch((t=>{this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=-1,this.MSG.TYPE="danger",this.MSG.TITLE="系統錯誤",this.MSG.TEXT=[],this.MSG.TEXT=this.MSG.TEXT.concat(res.data.msg),""!==res.data.sys&&this.MSG.TEXT.push(res.data.sys)})):2===this.funcNum&&(this.hideAlert(),this.$router.push("/"))}else"Cancel"===t.OKorCancel&&this.hideAlert()}}},E=e(1241);const b=(0,E.A)(T,[["render",u]]);var m=b}}]);
//# sourceMappingURL=51.4bf84996.js.map