"use strict";(self["webpackChunkssg60th_d_exam_client"]=self["webpackChunkssg60th_d_exam_client"]||[]).push([[196],{8755:function(t,e,a){a.d(e,{A:function(){return X}});var l=a(6768),s=a(5130),n=a(4232);const i={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r=(0,l.Fv)('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),o=[r],c={class:"container"},u={class:"alert-background"},d={class:"col-12"},h={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},m=(0,l.Lk)("use",{"xlink:href":"#check-circle-fill"},null,-1),k=[m],E={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Info:"},f=(0,l.Lk)("use",{"xlink:href":"#info-fill"},null,-1),p=[f],b={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:"},L=(0,l.Lk)("use",{"xlink:href":"#exclamation-triangle-fill"},null,-1),C=[L],g={class:"alert-heading d-inline m-1"},T=(0,l.Lk)("div",{class:"col-12"},[(0,l.Lk)("hr")],-1),w={class:"col-12"},x={key:0,class:"col-12 d-grid gap-2"},v={key:1,class:"col-6 d-grid gap-2"},M={key:2,class:"col-6 d-grid gap-2"};function S(t,e,a,r,m,f){return(0,l.uX)(),(0,l.CE)(l.FK,null,[((0,l.uX)(),(0,l.CE)("svg",i,o)),(0,l.Lk)("div",c,[(0,l.bo)((0,l.Lk)("div",u,null,512),[[s.aG,t.$store.state.alertVisible]]),(0,l.bo)((0,l.Lk)("div",{class:(0,n.C4)(["alert row",f.typeColor1]),role:"alert"},[(0,l.Lk)("div",d,[(0,l.bo)(((0,l.uX)(),(0,l.CE)("svg",h,k,512)),[[s.aG,"primary"===a.MSGTYPE]]),(0,l.bo)(((0,l.uX)(),(0,l.CE)("svg",E,p,512)),[[s.aG,"warning"===a.MSGTYPE]]),(0,l.bo)(((0,l.uX)(),(0,l.CE)("svg",b,C,512)),[[s.aG,"danger"===a.MSGTYPE]]),(0,l.Lk)("h4",g,(0,n.v_)(a.TITLE),1)]),T,(0,l.Lk)("div",w,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.TEXT,((t,e)=>((0,l.uX)(),(0,l.CE)("li",{key:e},(0,n.v_)(t),1)))),128))])]),"OKOnly"===a.MODE?((0,l.uX)(),(0,l.CE)("div",x,[(0,l.Lk)("button",{type:"button",class:(0,n.C4)(f.typeColor2),onClick:e[0]||(e[0]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,l.Q3)("",!0),"OKCancel"===a.MODE?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.Lk)("button",{type:"button",class:(0,n.C4)(f.typeColor2),onClick:e[1]||(e[1]=e=>t.$emit("alertCheck",!0,"OK"))},"確定",2)])):(0,l.Q3)("",!0),"OKCancel"===a.MODE?((0,l.uX)(),(0,l.CE)("div",M,[(0,l.Lk)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:e[2]||(e[2]=e=>t.$emit("alertCheck",!0,"Cancel"))},"取消")])):(0,l.Q3)("",!0)],2),[[s.aG,t.$store.state.alertVisible]])])],64)}var y={name:":Alert",props:{MODE:String,MSGTYPE:String,TITLE:String,TEXT:Array},emits:["alertCheck"],data(){return{}},methods:{},computed:{typeColor1:function(){return"primary"===this.MSGTYPE?"alert-primary":"warning"===this.MSGTYPE?"alert-warning":"danger"===this.MSGTYPE?"alert-danger":void 0},typeColor2:function(){return"primary"===this.MSGTYPE?"btn btn-primary btn-sm":"warning"===this.MSGTYPE?"btn btn-warning btn-sm":"danger"===this.MSGTYPE?"btn btn-danger btn-sm":void 0}},watch:{}},D=a(1241);const I=(0,D.A)(y,[["render",S]]);var X=I},3196:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});a(4114);var l=a(6768),s=a(4232),n=a(5130);const i={class:"container"},r=(0,l.Lk)("h2",{class:"text-center"},"測驗開始",-1),o={class:"row"},c={class:"col-12"},u={key:0},d=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{colspan:"2",class:"h2 text-center"},"是非")],-1),h=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{class:"h4"},"#"),(0,l.Lk)("td",{class:"h4"},"題目")],-1),m=["id"],k={class:"fw-bolder"},E=["id","onUpdate:modelValue"],f=(0,l.Lk)("option",{value:""},null,-1),p=(0,l.Lk)("option",{value:"O"},"O",-1),b=(0,l.Lk)("option",{value:"X"},"X",-1),L=[f,p,b],C={class:"fw-bold d-inline"},g={key:1},T=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{colspan:"2",class:"h2 text-center"},"單選")],-1),w=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{class:"h4"},"#"),(0,l.Lk)("td",{class:"h4"},"題目")],-1),x=["id"],v={class:"fw-bold"},M={class:"form-check form-check-inline p-0"},S=["name","id","value","onUpdate:modelValue"],y=["for"],D={key:2},I=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{colspan:"2",class:"h2 text-center"},"多選")],-1),X=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{class:"h3"},"#"),(0,l.Lk)("td",{class:"h3"},"題目")],-1),Q=["id"],G={class:"fw-bold"},O={class:"form-check form-check-inline p-0"},_=["name","id","value","onUpdate:modelValue"],A=["for"],K={class:"col-6 d-grid gap-2 my-2"},P={class:"col-6 d-grid gap-2 my-2"};function Y(t,e,a,f,p,b){const Y=(0,l.g2)("Alert");return(0,l.uX)(),(0,l.CE)("div",i,[r,(0,l.bF)(Y,{MODE:p.MSG.MODE,MSGTYPE:p.MSG.TYPE,TITLE:p.MSG.TITLE,TEXT:p.MSG.TEXT,onAlertCheck:e[0]||(e[0]=(t,e)=>p.alertCheck={isClick:t,OKorCancel:e})},null,8,["MODE","MSGTYPE","TITLE","TEXT"]),(0,l.Lk)("div",o,[(0,l.Lk)("div",c,[0!==this.examData.TFQ.length?((0,l.uX)(),(0,l.CE)("table",u,[d,h,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(p.examData.TFQ,((t,e)=>((0,l.uX)(),(0,l.CE)("tr",{id:t.QID,style:(0,s.Tr)(e%2==0?"background-color: #d3fcff;":"background-color: #cfffcf;")},[(0,l.Lk)("td",k,(0,s.v_)(e+1),1),(0,l.Lk)("td",null,[(0,l.bo)((0,l.Lk)("select",{id:"tf"+e,"onUpdate:modelValue":e=>t.answer=e},L,8,E),[[n.u1,t.answer]]),(0,l.Lk)("label",C,(0,s.v_)(t.content),1)])],12,m)))),256))])):(0,l.Q3)("",!0),0!==this.examData.SCQ.length?((0,l.uX)(),(0,l.CE)("table",g,[T,w,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(p.examData.SCQ,((t,e)=>((0,l.uX)(),(0,l.CE)("tr",{id:t.QID,style:(0,s.Tr)(e%2==0?"background-color: #d3fcff;":"background-color: #cfffcf;")},[(0,l.Lk)("td",null,(0,s.v_)(e+1),1),(0,l.Lk)("td",null,[(0,l.Lk)("p",v,(0,s.v_)(t.content),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.options,((a,i)=>((0,l.uX)(),(0,l.CE)("div",M,[(0,l.bo)((0,l.Lk)("input",{class:"d-inline",type:"radio",name:"s"+e,id:"s"+e+i,value:t.options[i],"onUpdate:modelValue":e=>t.answer=e},null,8,S),[[n.XL,t.answer]]),(0,l.Lk)("label",{class:"d-inline",for:"s"+e+i},(0,s.v_)(t.options[i]),9,y)])))),256))])],12,x)))),256))])):(0,l.Q3)("",!0),0!==this.examData.MCQ.length?((0,l.uX)(),(0,l.CE)("table",D,[I,X,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(p.examData.MCQ,((t,e)=>((0,l.uX)(),(0,l.CE)("tr",{id:t.QID,style:(0,s.Tr)(e%2==0?"background-color: #d3fcff;":"background-color: #cfffcf;")},[(0,l.Lk)("td",null,(0,s.v_)(e+1),1),(0,l.Lk)("td",null,[(0,l.Lk)("p",G,(0,s.v_)(t.content),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.options,((a,i)=>((0,l.uX)(),(0,l.CE)("div",O,[(0,l.bo)((0,l.Lk)("input",{class:"d-inline",type:"checkbox",name:"m"+e,id:"m"+e+i,value:t.options[i],"onUpdate:modelValue":e=>t.answer=e},null,8,_),[[n.lH,t.answer]]),(0,l.Lk)("label",{class:"d-inline",for:"m"+e+i},(0,s.v_)(t.options[i]),9,A)])))),256))])],12,Q)))),256))])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",K,[(0,l.Lk)("button",{class:"btn btn-secondary btn-lg",type:"button",onClick:e[1]||(e[1]=e=>t.$router.push("/examLobby"))},"返回大廳")]),(0,l.Lk)("div",P,[(0,l.Lk)("button",{class:"btn btn-primary btn-lg",type:"button",onClick:e[2]||(e[2]=(...t)=>b.sendResult&&b.sendResult(...t))},"我考完了！")])])])}var F=a(8755),V={name:"Exam",components:{Alert:F.A},data(){return{MSG:{MODE:"",TYPE:"",TITLE:"",TEXT:[]},alertCheck:!1,funcNum:0,examData:{TFQ:[],SCQ:[],MCQ:[]}}},methods:{sendResult(){this.alertVisible=!0,this.MSG.MODE="OKCancel",this.funcNum=1,this.MSG.TYPE="primary",this.MSG.TITLE="確認交卷",this.MSG.TEXT=["學長，你要確餒!"]},hideAlert(){this.$store.commit("SET_ALERT_VISIBLE",!1),this.alertVisible=!1}},created(){this.examData=this.$store.state.examination},mounted(){this.$store.commit("SET_EXAMINATION",{})},computed:{alertVisible:{get(){return this.$store.state.alertVisible},set(t){this.$store.commit("SET_ALERT_VISIBLE",t)}}},watch:{alertCheck:function(t){if(t.isClick)if("OK"===t.OKorCancel){if(0===this.funcNum)return;if(-1===this.funcNum)this.hideAlert();else if(-2===this.funcNum)this.hideAlert(),this.$router.go(-1);else if(1===this.funcNum){this.examData.TFQ.forEach((t=>{t.answer===t.correct&&(t.result=!0),t.weight=""===t.answer?0:t.answer===t.correct?this.examData.isRandom?1.5:.8:-1})),this.examData.SCQ.forEach((t=>{t.answerIndex=t.options.indexOf(t.answer)+1,0===t.answerIndex&&(t.answerIndex=""),t.answer===t.correct&&(t.result=!0),t.weight=""===t.answer?0:t.answer===t.correct?this.examData.isRandom?1.5:.8:-1})),this.examData.MCQ.forEach((t=>{t.answerIndex=[],t.answer.forEach((e=>{t.answerIndex.push(t.options.indexOf(e)+1)})),t.answerIndex.sort(((t,e)=>t-e)),t.answer.sort().toString()===t.correct.sort().toString()&&(t.result=!0),t.weight=0===t.answer.length?0:t.answer.sort().toString()===t.correct.sort().toString()?this.examData.isRandom?1.5:.8:-1})),this.hideAlert();const t={exam_QGID_list:this.examData.exam_QGID_list,TFQ:this.examData.TFQ.map((t=>({QID:t.QID,weight:t.weight}))),SCQ:this.examData.SCQ.map((t=>({QID:t.QID,weight:t.weight}))),MCQ:this.examData.MCQ.map((t=>({QID:t.QID,weight:t.weight})))};this.$http.post("api/questionExam/saveExamResult",t).then((t=>{this.$store.commit("SET_EXAMINATION",this.examData),this.$router.push("/examResult")})).catch((t=>{this.alertVisible=!0,this.MSG.MODE="OKOnly",this.funcNum=-1,this.MSG.TYPE="danger",this.MSG.TITLE="系統錯誤",this.MSG.TEXT=[],this.MSG.TEXT.push(t)}))}}else"Cancel"===t.OKorCancel&&this.hideAlert()}}},$=a(1241);const N=(0,$.A)(V,[["render",Y]]);var R=N}}]);
//# sourceMappingURL=196.caf39210.js.map