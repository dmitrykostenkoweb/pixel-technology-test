(function(e){function t(t){for(var c,r,s=t[0],o=t[1],l=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3daa":function(e,t,n){"use strict";n("594a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i={class:"main",id:"app"};function a(e,t,n,a,r,s){var o=Object(c["o"])("main-content");return Object(c["j"])(),Object(c["f"])("div",i,[Object(c["h"])(o)])}var r=n("ade3"),s={class:"list__wrapper paper"},o={class:"list__sort-panel"},l=["disabled"],d=["disabled"],u={class:"page__wrapper"},p=["onClick"];function b(e,t,n,i,a,b){var j=Object(c["o"])("med-item"),O=Object(c["o"])("my-dialog"),f=Object(c["o"])("list"),g=Object(c["o"])("spinner");return Object(c["j"])(),Object(c["f"])("div",s,[Object(c["h"])(O,{class:"dialog",show:a.dialogVisible,"onUpdate:show":t[0]||(t[0]=function(e){return a.dialogVisible=e})},{default:Object(c["q"])((function(){return[(Object(c["j"])(!0),Object(c["f"])(c["a"],null,Object(c["m"])(a.newMedicine,(function(e){return Object(c["j"])(),Object(c["d"])(j,{key:e.id,med:e},null,8,["med"])})),128))]})),_:1},8,["show"]),Object(c["g"])("div",o,[Object(c["g"])("button",{onClick:t[1]||(t[1]=function(){return b.fetchPatients&&b.fetchPatients.apply(b,arguments)}),class:"btn"},"All"),Object(c["g"])("button",{disabled:a.myDisabled30,onClick:t[2]||(t[2]=function(){return b.sortOver30&&b.sortOver30.apply(b,arguments)}),class:"btn"}," powyżej 30 ",8,l),Object(c["g"])("button",{disabled:a.myDisabled63,onClick:t[3]||(t[3]=function(){return b.sortUnder63&&b.sortUnder63.apply(b,arguments)}),class:"btn"}," poniżej 63 ",8,d)]),Object(c["h"])(c["b"],{name:"list"},{default:Object(c["q"])((function(){return[a.isListLoading?(Object(c["j"])(),Object(c["d"])(g,{key:1})):(Object(c["j"])(),Object(c["d"])(f,{key:0,class:"list",patients:a.patients,newMedicine:a.newMedicine,onShow:b.findMedicineId},null,8,["patients","newMedicine","onShow"]))]})),_:1}),Object(c["g"])("div",u,[(Object(c["j"])(!0),Object(c["f"])(c["a"],null,Object(c["m"])(a.totalPage,(function(e){return Object(c["j"])(),Object(c["f"])("button",{key:e,class:Object(c["i"])(["page btn",Object(r["a"])({" current-page":a.page===e,hide:1==a.myDisabled30},"hide",1==a.myDisabled63)]),onClick:function(t){return b.changePage(e)}},Object(c["p"])(e),11,p)})),128))])])}var j=n("1da1"),O=(n("d3b7"),n("159b"),n("caad"),n("2532"),n("a434"),n("d81d"),n("4de4"),n("96cf"),n("bc3a")),f=n.n(O),g=function(e){return Object(c["l"])("data-v-3d27a45a"),e=e(),Object(c["k"])(),e},v={class:"wrapper"},m=g((function(){return Object(c["g"])("h2",null,"Patient List",-1)})),h={class:"list"};function y(e,t,n,i,a,r){var s=Object(c["o"])("pat-item");return Object(c["j"])(),Object(c["f"])("div",v,[m,Object(c["g"])("div",h,[(Object(c["j"])(!0),Object(c["f"])(c["a"],null,Object(c["m"])(n.patients,(function(t){return Object(c["j"])(),Object(c["d"])(s,{class:"paper list__item",pat:t,newMedicine:n.newMedicine,key:t.id,onShow:function(n){return e.$emit("show",t)}},null,8,["pat","newMedicine","onShow"])})),128))])])}n("99af"),n("b0c0");var w={class:"item__wrapper"},k={class:"item-row"},_=Object(c["g"])("p",{class:"key"},"Full Name :",-1),M={class:"value"},P={class:"item-row"},x=Object(c["g"])("p",{class:"key"},"Adress:",-1),D={class:"value"},S={class:"item-row"},L=Object(c["g"])("p",{class:"key"},"Phone:",-1),C={class:"value",href:"{{ pat.phoneNumber }}"},I={class:"item-row"},A=Object(c["g"])("p",{class:"key"},"Age:",-1),q={class:"value"},T={class:"item-row"},N=Object(c["g"])("p",{class:"key"},"Gender:",-1),R={class:"value"};function E(e,t,n,i,a,r){return Object(c["j"])(),Object(c["f"])("div",w,[Object(c["g"])("div",k,[_,Object(c["g"])("p",M,Object(c["p"])("".concat(n.pat.name," ").concat(n.pat.lastName)),1)]),Object(c["g"])("div",P,[x,Object(c["g"])("p",D,Object(c["p"])('"'.concat(n.pat.adress,'"')),1)]),Object(c["g"])("div",S,[L,Object(c["g"])("a",C,Object(c["p"])(n.pat.phoneNumber),1)]),Object(c["g"])("div",I,[A,Object(c["g"])("p",q,Object(c["p"])("".concat(n.pat.age," years")),1)]),Object(c["g"])("div",T,[N,Object(c["g"])("p",R,Object(c["p"])(n.pat.gender),1)]),Object(c["g"])("button",{class:"btn",onClick:t[0]||(t[0]=function(t){return e.$emit("show",n.pat)}),type:"button"}," Show Medicines ")])}var U={components:{},name:"PatItem",props:{pat:{type:Object,required:!0},newMedicine:{type:Array,required:!1}},data:function(){return{}}},V=n("6b0d"),$=n.n(V);const F=$()(U,[["render",E]]);var J=F,z={name:"List",components:{PatItem:J},props:{patients:{type:Array,required:!0},newMedicine:{type:Array,required:!0}},data:function(){return{}},computed:{},methods:{}};n("75a9");const B=$()(z,[["render",y],["__scopeId","data-v-3d27a45a"]]);var G=B;function H(e,t,n,i,a,r){return n.show?(Object(c["j"])(),Object(c["f"])("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=Object(c["r"])((function(){return r.hideDialog&&r.hideDialog.apply(r,arguments)}),["stop"]))},[Object(c["g"])("div",{onClick:t[0]||(t[0]=Object(c["r"])((function(){}),["stop"])),class:"dialog__content paper"},[Object(c["n"])(e.$slots,"default",{},void 0,!0)])])):Object(c["e"])("",!0)}var K={name:"MyDialog",components:{},props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}}};n("abd7");const Q=$()(K,[["render",H],["__scopeId","data-v-914b268c"]]);var W=Q,X=Object(c["g"])("hr",{style:{"border-top":"3px dashed #bbb"}},null,-1),Y={class:"item__wrapper"},Z={class:"item-row"},ee=Object(c["g"])("p",{class:"key"},"Med Name :",-1),te={class:"value"},ne={class:"item-row"},ce=Object(c["g"])("p",{class:"key"},"Unit:",-1),ie={class:"value"},ae={class:"item-row"},re=Object(c["g"])("p",{class:"key"},"Strength:",-1),se={class:"value"},oe={class:"item-row"},le=Object(c["g"])("p",{class:"key"},"Form:",-1),de={class:"value"},ue={class:"item-row"},pe=Object(c["g"])("p",{class:"key"},"ExpDate:",-1),be={class:"value"},je=Object(c["g"])("hr",{style:{"border-top":"3px dashed #bbb"}},null,-1);function Oe(e,t,n,i,a,r){return Object(c["j"])(),Object(c["f"])("div",null,[X,Object(c["g"])("div",Y,[Object(c["g"])("div",Z,[ee,Object(c["g"])("p",te,Object(c["p"])("".concat(n.med.medicationName)),1)]),Object(c["g"])("div",ne,[ce,Object(c["g"])("p",ie,Object(c["p"])('"'.concat(n.med.unit,'"')),1)]),Object(c["g"])("div",ae,[re,Object(c["g"])("p",se,Object(c["p"])(n.med.strength),1)]),Object(c["g"])("div",oe,[le,Object(c["g"])("p",de,Object(c["p"])("".concat(n.med.form)),1)]),Object(c["g"])("div",ue,[pe,Object(c["g"])("p",be,Object(c["p"])(n.med.expDate),1)])]),je])}var fe={name:"MedItem",props:{med:{type:Object,required:!0}},data:function(){return{}}};const ge=$()(fe,[["render",Oe]]);var ve=ge,me={class:"loadingio-spinner-spin-7utejk0tka"},he=Object(c["g"])("div",{class:"ldio-njrzo5dgax"},[Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")]),Object(c["g"])("div",null,[Object(c["g"])("div")])],-1),ye=[he];function we(e,t,n,i,a,r){return Object(c["j"])(),Object(c["f"])("div",me,ye)}var ke={name:"Spinner"};n("3daa");const _e=$()(ke,[["render",we]]);var Me=_e,Pe={components:{List:G,MyDialog:W,MedItem:ve,Spinner:Me},name:"MainContent",data:function(){return{patients:[],allPatients:[],medicine:[],newMedicine:[],isListLoading:!1,dialogVisible:!1,page:1,limit:10,totalPage:0,myDisabled30:!1,myDisabled63:!1,heightScren:1e3}},mounted:function(){this.fetchPatients(),this.fetchMedicine(),this.fetchAllPatients()},methods:{fetchPatients:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isListLoading=!0,t.next=4,f.a.get("https://cerber.pixel.com.pl/api/patients",{params:{_page:e.page,_limit:e.limit}});case 4:n=t.sent,e.totalPage=Math.ceil(n.headers["x-total-count"]/e.limit),e.patients=n.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),alert("Error ".concat(t.t0));case 12:return t.prev=12,e.isListLoading=!1,e.myDisabled30=!1,e.myDisabled63=!1,t.finish(12);case 17:case"end":return t.stop()}}),t,null,[[0,9,12,17]])})))()},fetchMedicine:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://cerber.pixel.com.pl/api/medicine");case 3:n=t.sent,e.medicine=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),alert("Error ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchAllPatients:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://cerber.pixel.com.pl/api/patients");case 3:n=t.sent,e.allPatients=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),alert("Error ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},findMedicineId:function(e){var t=this,n=[];this.medicine.forEach((function(t){var c=t.patientIds,i=t.id;if(c.includes(e.id)){var a=i;n.push(a)}})),this.newMedicine.splice(0,100),n.map((function(e){for(var n=0;n<t.medicine.length;n++)t.medicine[n].id==e&&t.newMedicine.push(t.medicine[n])})),this.dialogVisible=!0,this.scrollToTop()},changePage:function(e){this.page=e,this.fetchPatients()},sortOver30:function(){this.patients=this.allPatients.filter((function(e){return e.age>30})),this.myDisabled30=!0,this.myDisabled63=!1},sortUnder63:function(){this.patients=this.allPatients.filter((function(e){return e.age<63})),this.myDisabled63=!0,this.myDisabled30=!1},scrollToTop:function(){window.scrollTo(0,0)}},computed:{},watch:{}};n("d421");const xe=$()(Pe,[["render",b],["__scopeId","data-v-40d4ea20"]]);var De=xe,Se={name:"App",components:{MainContent:De}};n("9f34");const Le=$()(Se,[["render",a]]);var Ce=Le;Object(c["c"])(Ce).mount("#app")},5887:function(e,t,n){},"594a":function(e,t,n){},"623f":function(e,t,n){},"75a9":function(e,t,n){"use strict";n("a363")},"9f34":function(e,t,n){"use strict";n("5887")},a363:function(e,t,n){},abd7:function(e,t,n){"use strict";n("c05c")},c05c:function(e,t,n){},d421:function(e,t,n){"use strict";n("623f")}});
//# sourceMappingURL=app.d14457f8.js.map