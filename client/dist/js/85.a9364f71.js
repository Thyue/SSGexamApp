"use strict";(self["webpackChunkssg60th_d_exam_client"]=self["webpackChunkssg60th_d_exam_client"]||[]).push([[85],{7367:function(t,e,l){l.d(e,{A:function(){return w}});var n=l(6768),a=l(4232),i=l(5130);const s={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r=(0,n.Fv)('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),c=[r],o={class:"container"},u={class:"col-12"},d={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},h=(0,n.Lk)("use",{"xlink:href":"#check-circle-fill"},null,-1),k=[h],m={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Info:"},b=(0,n.Lk)("use",{"xlink:href":"#info-fill"},null,-1),E=[b],g={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:"},C=(0,n.Lk)("use",{"xlink:href":"#exclamation-triangle-fill"},null,-1),L=[C],T={class:"alert-heading d-inline m-1"},p=(0,n.Lk)("div",{class:"col-12"},[(0,n.Lk)("hr")],-1),f={class:"col-12"},y={key:0,class:"col-12 d-grid gap-2"},M={key:1,class:"col-6 d-grid gap-2"},v={key:2,class:"col-6 d-grid gap-2"};function S(t,e,l,r,h,b){return(0,n.uX)(),(0,n.CE)(n.FK,null,[((0,n.uX)(),(0,n.CE)("svg",s,c)),(0,n.Lk)("div",o,[(0,n.bo)((0,n.Lk)("div",{class:(0,a.C4)(["alert row",b.typeColor1]),role:"alert"},[(0,n.Lk)("div",u,[(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",d,k,512)),[[i.aG,"primary"===l.MSGTYPE]]),(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",m,E,512)),[[i.aG,"warning"===l.MSGTYPE]]),(0,n.bo)(((0,n.uX)(),(0,n.CE)("svg",g,L,512)),[[i.aG,"danger"===l.MSGTYPE]]),(0,n.Lk)("h4",T,(0,a.v_)(l.TITLE),1)]),p,(0,n.Lk)("div",f,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.TEXT,((t,e)=>((0,n.uX)(),(0,n.CE)("li",{key:e},(0,a.v_)(t),1)))),128))])]),"OKOnly"===l.MODE?((0,n.uX)(),(0,n.CE)("div",y,[(0,n.Lk)("button",{type:"button",class:(0,a.C4)(b.typeColor2),onClick:e[0]||(e[0]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,n.Q3)("",!0),"OKCancel"===l.MODE?((0,n.uX)(),(0,n.CE)("div",M,[(0,n.Lk)("button",{type:"button",class:(0,a.C4)(b.typeColor2),onClick:e[1]||(e[1]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,n.Q3)("",!0),"OKCancel"===l.MODE?((0,n.uX)(),(0,n.CE)("div",v,[(0,n.Lk)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:e[2]||(e[2]=e=>t.$emit("alertCheck",!0,"Cancel"))},"取消")])):(0,n.Q3)("",!0)],2),[[i.aG,t.$store.state.alertVisible]])])],64)}var D={name:":Alert",props:{MODE:String,MSGTYPE:String,TITLE:String,TEXT:Array},emits:["alertCheck"],data(){return{}},methods:{},computed:{typeColor1:function(){return"primary"===this.MSGTYPE?"alert-primary":"warning"===this.MSGTYPE?"alert-warning":"danger"===this.MSGTYPE?"alert-danger":void 0},typeColor2:function(){return"primary"===this.MSGTYPE?"btn btn-primary btn-sm":"warning"===this.MSGTYPE?"btn btn-warning btn-sm":"danger"===this.MSGTYPE?"btn btn-danger btn-sm":void 0}},watch:{}},G=l(1241);const I=(0,G.A)(D,[["render",S]]);var w=I},7085:function(t,e,l){l.r(e),l.d(e,{default:function(){return T}});var n=l(6768),a=l(4232),i=l(5130);const s={class:"container"},r=(0,n.Lk)("h2",{class:"text-center"},"帳戶管理",-1),c={class:"row"},o={class:"col-12"},u={class:"table"},d=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"UID"),(0,n.Lk)("td",null,"姓名"),(0,n.Lk)("td",null,"身分別"),(0,n.Lk)("td",null,"選擇")])],-1),h=["value"],k={class:"col-12 d-grid gap-2 my-2"};function m(t,e,l,m,b,E){const g=(0,n.g2)("Alert");return(0,n.uX)(),(0,n.CE)("div",s,[r,(0,n.Lk)("button",{class:"btn btn-outline-secondary btn-sm mb-3",type:"button",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},"返回上一頁"),(0,n.bF)(g,{MODE:b.MSG.MODE,MSGTYPE:b.MSG.TYPE,TITLE:b.MSG.TITLE,TEXT:b.MSG.TEXT,onAlertCheck:e[1]||(e[1]=(t,e)=>b.alertCheck={isClick:t,OKorCancel:e})},null,8,["MODE","MSGTYPE","TITLE","TEXT"]),(0,n.Lk)("div",c,[(0,n.Lk)("div",o,[(0,n.Lk)("table",u,[d,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(b.accountData,(t=>((0,n.uX)(),(0,n.CE)("tr",{class:(0,a.C4)("Admin"===t.ident?"table-danger":"User"===t.ident?"table-success":"Register"===t.ident?"table-warning":"table-secondary")},[(0,n.Lk)("td",null,(0,a.v_)(t.studentID),1),(0,n.Lk)("td",null,(0,a.v_)(t.name),1),(0,n.Lk)("td",null,(0,a.v_)("Admin"===t.ident?"管理者":"User"===t.ident?"使用者":"Register"===t.ident?"未審核":"停用"),1),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{class:"form-check-input",type:"radio",name:"userRadio",value:t.studentID,"onUpdate:modelValue":e[2]||(e[2]=t=>b.selectUID=t)},null,8,h),[[i.XL,b.selectUID]])])],2)))),256))])])]),(0,n.Lk)("div",k,[(0,n.Lk)("button",{class:"btn btn-primary btn-lg",type:"button",onClick:e[3]||(e[3]=t=>E.selectDeal())},"執行")])])])}l(4114);var b=l(9325),E=l(7367),g={name:"AccountManage",components:{Alert:E.A},data(){return{MSG:{MODE:"",TYPE:"",TITLE:"",TEXT:[]},alertCheck:!1,funcNum:-1,accountData:[],selectUID:""}},methods:{selectDeal(){if(""!==this.selectUser){const t=this.accountData.find((t=>t.studentID===this.selectUID));this.$store.commit("SET_ACCOUNT_EDIT",t),b.A.push("/accountEdit")}else this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=1,this.MSG.TYPE="warning",this.MSG.TITLE="系統警告",this.MSG.TEXT=["請選擇使用者。"]},hideAlert(){this.$store.commit("SET_ALERT_VISIBLE",!1),this.alertVisible=!1}},created(){this.$http.get("api/accountManage/getUsers").then((t=>{this.accountData=t.data.data.sort(((t,e)=>t.studentID-e.studentID))})).catch((t=>{console.log(t)}))},mounted(){},computed:{alertVisible:{get(){return this.$store.state.alertVisible},set(t){this.$store.commit("SET_ALERT_VISIBLE",t)}}},watch:{alertCheck:function(t){if(t.isClick)if("OK"===t.OKorCancel){if(0===this.funcNum)return;1===this.funcNum&&this.hideAlert()}else"Cancel"===t.OKorCancel&&this.hideAlert()}}},C=l(1241);const L=(0,C.A)(g,[["render",m]]);var T=L}}]);
//# sourceMappingURL=85.a9364f71.js.map