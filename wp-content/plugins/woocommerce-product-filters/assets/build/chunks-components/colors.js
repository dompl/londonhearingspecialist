"use strict";(self.webpackChunkwoocommerce_filters=self.webpackChunkwoocommerce_filters||[]).push([[9385],{4095:function(e,t,l){l.r(t);var s=l(7462),r=l(9307),o=l(9196),a=l(3026),n=l(385),c=l(9470),i=l(1524),u=l(2819),f=l(5236),m=l(7536),p=(l(5736),l(374)),d=l(9950),h=l(389),g=l(4271),E=l(4184),y=l.n(E),w=l(7826),_=l.n(w);const C=WCF_Frontend,b=(0,g.zo)();t.default=e=>{let{name:t,value:l,setValue:E,group:w,facet:G,...k}=e;const v="yes"===C.filter_num_products,{getGroup:A,getStoredValue:x,getInitialCounts:z,counts:Z,prefilledValues:B,setPrefilling:N}=(0,h.CR)(),P=A(w).data[G.slug],{watch:S}=(0,m.Gc)(),V=x(w,t),q=S(t,V),[F,I]=(0,o.useState)(Array.isArray(V)?V:[]),[O,R]=(0,o.useState)([]),T=!!(0,u.has)(G,"options.colors_show_labels")&&(0,g.K1)(G.options.colors_show_labels);let Y=!0===T?2:5;T||!0!==v||(Y=3);const H=!0===T?"scale400":"scale600",K={display:"flex",alignItems:"center"},W=k.layout;T&&"horizontal"===W?Y=1:T||"horizontal"!==W||(Y=3);const j=(e,l)=>{let s=F.filter((function(){return!0}));if(!0===e)s.push(l);else if(!1===e){var r=F.indexOf(l);s.splice(r,1)}I(s),E(t,s)};return(0,f.H)((()=>{const e=z(t);(0,u.has)(Z,t)?R(Z[t]):R(e)})),(0,o.useEffect)((()=>{let e=q;Array.isArray(e)||(e=[]),(0,u.isEqual)(e,F)||I(Array.isArray(e)?_()(e):[])}),[q]),(0,o.useEffect)((()=>{(0,u.has)(B,t)&&!(0,u.isEqual)(B[t],q)&&(0,u.isEmpty)(q)&&(N(!0),E(t,B[t].map(Number)),N(!1))}),[B]),(0,o.useEffect)((()=>{"horizontal"!==W&&(0,h.BB)(R,t)}),[]),(0,o.useEffect)((()=>(g.YB.on("filterToggled-"+t,(e=>{N(!0),E(t,e.value),N(!1)})),()=>{g.YB.remove("filterToggled-"+t)})),[]),(0,p.Z)("wcf-reset-filters",(()=>{N(!0),E(t,[]),I([]),N(!1)})),(0,u.isEmpty)(P)||(0,u.isEmpty)(O)?(0,r.createElement)("span",{className:"wcf-no-options-label"},b.no_options):(0,r.createElement)(c.Z,{flexGridColumnCount:Y,flexGridColumnGap:H,flexGridRowGap:H,className:"wcf-colors-grid"},P.map(((e,t)=>{let{name:l,color:o,term_id:c}=e;const f=(0,u.isEmpty)(o)?"#ccc":o;let m=0;const p=O.find((e=>e.term_id===""+c));if(m=p?.counter||0,0===m)return;const h=y()("wcf-choices-counter",{"with-label":!0===T});return(0,r.createElement)(i.ZP,(0,s.Z)({key:t},K),(0,r.createElement)(a.Z,{checked:F.includes(c),labelPlacement:n.Oi.right,overrides:(0,d.Gv)(f,"horizontal"===W&&!T,F.includes(c)),onChange:e=>j(e.target.checked,c)},!0===T&&l,v&&(0,r.createElement)("span",{className:h},"(",m,")")))})))}}}]);