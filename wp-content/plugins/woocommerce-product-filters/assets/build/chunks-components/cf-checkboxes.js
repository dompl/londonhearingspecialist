"use strict";(self.webpackChunkwoocommerce_filters=self.webpackChunkwoocommerce_filters||[]).push([[6984],{5110:function(e,t,r){r.r(t);var a=r(7462),l=r(9307),s=r(9196),n=r(3026),c=r(385),u=r(2629),i=r(2819),o=r(5236),f=r(7536),d=r(7826),m=r.n(d),g=r(374),p=r(389),E=r(4271),h=r(9950);const v=WCF_Frontend,y=(0,E.zo)();t.default=e=>{let{name:t,value:r,setValue:d,options:w,group:_,...k}=e;const{watch:A}=(0,f.Gc)(),C="yes"===v.filter_num_products,{getGroup:b,getStoredValue:F,getInitialCounts:V,counts:S,prefilledValues:Z,setPrefilling:B}=(0,p.CR)(),G=F(_,t),O=A(t,G),[P,T]=(0,s.useState)(Array.isArray(G)?G:[]),[W,Y]=(0,s.useState)([]),q=b(_),x=!!(0,i.has)(q,"data."+k.facet.slug)&&(0,s.useMemo)((()=>q.data[k.facet.slug]),[q.data[k.facet.slug]]);if(!x)return(0,l.createElement)(l.Fragment,null,y.no_values_cf);(0,o.H)((()=>{const e=V(t);(0,i.has)(S,t)?Y(S[t]):Y(e)})),(0,s.useEffect)((()=>{let e=O;Array.isArray(e)||(0,i.isEmpty)(e)||(e=e.split(",")),(0,i.isEqual)(e,P)||T(Array.isArray(e)?m()(e):[])}),[O]),(0,s.useEffect)((()=>{(0,i.has)(Z,t)&&(B(!0),d(t,Z[t]),B(!1))}),[Z]);const z=e=>{var t;return null!==(t=W.find((t=>t.facet_value===e))?.counter)&&void 0!==t?t:0},H=e=>{let{value:t,label:r}=e;return(0,l.createElement)("div",null,(0,l.createElement)(n.Z,{checked:P.includes(t),labelPlacement:c.Oi.right,overrides:h.W9,onChange:e=>I(e.target.checked,t)},(0,u.decodeEntities)(r),C&&(0,l.createElement)("span",{className:"wcf-choices-counter"},"(",z(t),")")))},I=(e,r)=>{let a=P.filter((function(){return!0}));if(!0===e)a.push(r);else if(!1===e){var l=P.indexOf(r);a.splice(l,1)}T(a),(0,i.isEmpty)(a)?d(t,!1):(0,i.isEmpty)(a)||d(t,m()(a))};return(0,s.useEffect)((()=>(E.YB.on("filterToggled-"+t,(e=>{B(!0),d(t,e.value),B(!1)})),()=>{E.YB.remove("filterToggled-"+t)})),[]),(0,g.Z)("wcf-reset-filters",(()=>{B(!0),d(t,[]),T([]),B(!1)})),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{id:"wcf-databaseValues-container-"+t},(()=>{const e=[];return(0,i.forEach)(x,((t,r)=>{const a=z(t.value);if(!a||0===a)return!1;e.push(t)})),e})().map(((e,t)=>(0,l.createElement)(H,(0,a.Z)({key:t},e))))))}}}]);