import{o as d,c as u,t as l,n as v,a as r,p as y,b as k,w as x,v as E,d as f,r as h,F as N,e as S,f as F,g as B,h as g}from"./vendor.45669907.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};$();var _=(t,e)=>{const n=t.__vccOpts||t;for(const[c,s]of e)n[c]=s;return n};const G={name:"EsHeader",props:{title:{type:String,default:"es-header"},bgcolor:{type:String,default:"#007BFF"},color:{type:String,default:"#ffffff"},fsize:{type:Number,default:12}}};function I(t,e,n,c,s,o){return d(),u("div",{class:"header-container",style:v({color:n.color,backgroundColor:n.bgcolor,fontSize:n.fsize+"px"})},l(n.title),5)}var L=_(G,[["render",I],["__scopeId","data-v-10be2bda"]]);const w={name:"EsFooter",props:{amount:{type:Number,default:0},total:{type:Number,default:0},isfull:{type:Boolean,default:!1}},emits:["fullChange"],methods:{onCheckBoxChange(t){this.$emit("fullChange",t.target.checked)}}},p=t=>(y("data-v-75cf953d"),t=t(),k(),t),A={class:"footer-container"},q={class:"custom-control custom-checkbox"},O=["checked"],z=p(()=>r("label",{class:"custom-control-label",for:"fullCheck"},"\u5168\u9009 ",-1)),H=p(()=>r("span",null,"\u5408\u8BA1\uFF1A",-1)),R={class:"amount"},M=["disabled"];function P(t,e,n,c,s,o){return d(),u("div",A,[r("div",q,[r("input",{type:"checkbox",class:"custom-control-input",id:"fullCheck",checked:n.isfull,onChange:e[0]||(e[0]=(...a)=>o.onCheckBoxChange&&o.onCheckBoxChange(...a))},null,40,O),z]),r("div",null,[H,r("span",R,"\uFFE5"+l(n.amount.toFixed(2)),1)]),r("button",{type:"button",class:"btn btn-primary",disabled:n.total===0}," \u7ED3\u7B97("+l(n.total)+") ",9,M)])}var D=_(w,[["render",P],["__scopeId","data-v-75cf953d"]]);const U={name:"EsCounter",watch:{number(t){const e=parseInt(t);if(isNaN(e)||e<1){this.number=1;return}if(String(t).indexOf(".")!==-1){this.number=e;return}this.$emit("numChange",this.number)}},props:{num:{type:Number,default:0},min:{type:Number,default:NaN}},data(){return{number:this.num}},emits:["numChange"],methods:{onSubClick(){!isNaN(this.min)&&this.number-1<this.min||(this.number-=1)},onAddClick(){this.number+=1}}},V={class:"counter-container"};function K(t,e,n,c,s,o){return d(),u("div",V,[r("button",{type:"button",class:"btn btn-light btn-sm",onClick:e[0]||(e[0]=(...a)=>o.onSubClick&&o.onSubClick(...a))}," - "),x(r("input",{type:"number",class:"form-control form-control-sm ipt-num","onUpdate:modelValue":e[1]||(e[1]=a=>s.number=a)},null,512),[[E,s.number,void 0,{number:!0,lazy:!0}]]),r("button",{type:"button",class:"btn btn-light btn-sm",onClick:e[2]||(e[2]=(...a)=>o.onAddClick&&o.onAddClick(...a))}," + ")])}var T=_(U,[["render",K],["__scopeId","data-v-31511640"]]);const j={name:"EsGoods",components:{EsCounter:T},props:{id:{type:[String,Number],required:!0},thumb:{type:String,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0},count:{type:Number,required:!0},checked:{type:Boolean,required:!0}},emits:["stateChange","countChange"],methods:{onCheckBoxChange(t){this.$emit("stateChange",{id:this.id,value:t.target.checked})},getNumber(t){this.$emit("countChange",{id:this.id,value:t})}}},J={class:"goods-container"},Q={class:"left"},W={class:"custom-control custom-checkbox"},X=["id","checked"],Y=["for"],Z=["src"],ee={class:"right"},te={class:"top"},oe={class:"bottom"},ne={class:"price"},se={class:"count"};function re(t,e,n,c,s,o){const a=h("EsCounter");return d(),u("div",J,[r("div",Q,[r("div",W,[r("input",{type:"checkbox",class:"custom-control-input",id:n.id,checked:n.checked,onChange:e[0]||(e[0]=(...m)=>o.onCheckBoxChange&&o.onCheckBoxChange(...m))},null,40,X),r("label",{class:"custom-control-label",for:n.id},[r("img",{src:n.thumb,alt:"\u5546\u54C1\u56FE\u7247",class:"thumb"},null,8,Z)],8,Y)])]),r("div",ee,[r("div",te,">"+l(n.title),1),r("div",oe,[r("div",ne,"\uFFE5"+l(n.price.toFixed(2)),1),r("div",se,[f(a,{num:n.count,min:1,onNumChange:o.getNumber},null,8,["num","onNumChange"])])])])])}var ae=_(j,[["render",re],["__scopeId","data-v-6d874b1b"]]);const ce={name:"MyApp",components:{EsHeader:L,EsFooter:D,EsGoods:ae},data(){return{goodslist:[]}},methods:{async getGoodsList(){const{data:t}=await this.$http.get("/api/cart");if(t.status!==200)return alert("\u8BF7\u6C42\u5546\u54C1\u5217\u8868\u6570\u636E\u5931\u8D25\uFF01");this.goodslist=t.list},onFullStateChange(t){this.goodslist.forEach(e=>e.goods_state=t)},onGoodsStateChange(t){const e=this.goodslist.find(n=>n.id===t.id);e&&(e.goods_state=t.value)},onGoodsCountChange(t){const e=this.goodslist.find(n=>n.id===t.id);e&&(e.goods_count=t.value)}},computed:{amount(){let t=0;return this.goodslist.filter(e=>e.goods_state).forEach(e=>{t+=e.goods_price*e.goods_count}),t},total(){let t=0;return this.goodslist.filter(e=>e.goods_state).forEach(e=>t+=e.goods_count),t}},created(){this.getGoodsList()}},ie={class:"app-container"},de=r("h1",null,"App\u6839\u7EC4\u4EF6",-1),ue=r("hr",null,null,-1);function le(t,e,n,c,s,o){const a=h("EsHeader"),m=h("EsGoods"),C=h("EsFooter");return d(),u("div",ie,[de,ue,f(a,{title:"\u8D2D\u7269\u8F66\u6848\u4F8B"}),(d(!0),u(N,null,S(s.goodslist,i=>(d(),F(m,{key:i.id,id:i.id,thumb:i.goods_img,title:i.goods_name,price:i.goods_price,count:i.goods_count,checked:i.goods_state,onStateChange:o.onGoodsStateChange,onCountChange:o.onGoodsCountChange},null,8,["id","thumb","title","price","count","checked","onStateChange","onCountChange"]))),128)),f(C,{total:o.total,amount:o.amount,onFullChange:o.onFullStateChange},null,8,["total","amount","onFullChange"])])}var _e=_(ce,[["render",le]]);const b=B(_e);g.defaults.baseURL="https://www.escook.cn";b.config.globalProperties.$http=g;b.mount("#app");
