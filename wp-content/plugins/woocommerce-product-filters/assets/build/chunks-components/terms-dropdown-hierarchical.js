"use strict";(self.webpackChunkwoocommerce_filters=self.webpackChunkwoocommerce_filters||[]).push([[769],{8136:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var l=n(9307),r=n(9196),a=n(598),s=n(2819),o=function(){return o=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},i=n(5236),c=n(4548),u=n(7536),f=n(374),d=n(9950),p=n(389),h=n(4271),m=n(4184),g=n.n(m),b=n(4376);const y=WCF_Frontend,v=(0,h.zo)(),E=e=>{let{slug:t,term:n,handleChildrenSelection:r,hasValue:s,map:o,layout:i,searchable:c,getOptionLabel:u,label:f,getPlaceholder:p}=e;const h=s(n.depth+1)?o[n.depth+1]:null;return(0,l.createElement)(a.Z,{key:t,options:n.children,value:h,onChange:e=>r(e.value),overrides:"horizontal"===i?d.Rd:d.Hz,noResultsMsg:v.no_results,searchable:c,clearable:!1,placeholder:p(n.children,h,v.select_option),getOptionLabel:u})};var k=e=>{let{name:t,value:n,setValue:m,options:k,group:w,...C}=e;const{watch:O,resetField:_}=(0,u.Gc)(),{layout:A}=(y.filter_num_products,C),{getGroup:M,getStoredValue:S,getInitialCounts:j,counts:F,prefilledValues:V,setPrefilling:z,submittedValues:L}=(0,p.CR)(),[R,B]=(0,r.useState)([]),[P,H]=(0,r.useState)([]),Z=(0,b.Lm)()<960,G=M(w),T=!!(0,s.has)(G,"data."+C.facet.slug)&&(0,r.useMemo)((()=>G.data[C.facet.slug]),[G.data[C.facet.slug]]);if(!T)return(0,l.createElement)(l.Fragment,null,v.no_terms);const[U,{set:Y,setMultiple:I,has:N,remove:W,removeMultiple:q,removeAll:x}]=function(e){var t=(0,r.useState)({}),n=t[0],l=t[1],a=(0,r.useCallback)((function(e,t){l((function(n){var l;return o(o({},n),((l={})[e]=t,l))}))}),[]),s=(0,r.useCallback)((function(e){return void 0!==n[e]}),[n]),i=(0,r.useCallback)((function(e){l((function(t){return o(o({},t),e)}))}),[]),c=(0,r.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];l((function(t){for(var n=o({},t),l=0,r=e;l<r.length;l++)delete n[r[l]];return n}))}),[l]),u=(0,r.useCallback)((function(e){l((function(t){var n=o({},t);return delete n[e],n}))}),[l]),f=(0,r.useCallback)((function(){l((function(e){var t=o({},e);for(var n in t)delete t[n];return t}))}),[l]);return[n,{has:s,remove:u,removeAll:f,removeMultiple:c,set:a,setMultiple:i}]}(),D=S(w,t),J=O(t,D);(0,i.H)((function(){const e=j(t);(0,s.has)(F,t)?H(F[t]):H(e)}));const K=e=>{let{option:t}=e;return(0,l.createElement)(l.Fragment,null,t.label)},Q=(e=>{const t=[];return(0,s.isEmpty)(P)?[]:((0,s.forEach)(e,((e,n)=>{t.push(e)})),t)})(T),X=g()("wcf-dropdown-wrapper","wcf-hierarchical-dropdown",{"is-active":!(0,s.isEmpty)(R)}),$=y.searchable_mobile,ee=e=>{const t=e[0];if(t){const e=te([t]),n=t.depth;!(0,s.isEmpty)(e)&&Array.isArray(e)&&(0,s.forEach)(U,((e,t)=>{e.depth>=n&&W(e.depth)})),Y(t.depth,t)}},te=e=>{let t=[];return e.map((e=>(e.children&&e.children.length&&(t=[...t,...e.children]),e))).concat(t.length?te(t):t)},ne=(e,t,n)=>{let l=null;return(0,s.isEmpty)(e)?l=v.no_options:(0,s.isEmpty)(t)&&!(0,s.isEmpty)(e)&&(l=n),(0,s.isEmpty)(e)&&!(0,s.isEmpty)(t)&&t.children&&(l=null),l};(0,c.l)((()=>{let e=U[Object.keys(U).pop()];m(t,e.id)}),[U]);const le=(e,t)=>{if(e.id===t)return[e.slug];if(e.children||Array.isArray(e)){let n=Array.isArray(e)?e:e.children;for(let l of n){let n=le(l,t);if(n)return e.id&&n.unshift(e.slug),n}}};return(0,r.useEffect)((()=>{const e=J;if((0,s.isUndefined)(e)||!1===e)B([]);else if(!(0,s.isUndefined)(e)&&!1!==e){const t=(0,h.w8)(T,e);if(t?.id){const e=le(T,t.id);if(!(0,s.isEmpty)(e)){const t={};e.map(((e,n)=>{const l=(0,h.w8)(T,e);l&&(t[l.depth]=l)})),(0,s.isEmpty)(t)||I(t)}B([t])}}}),[J]),(0,r.useEffect)((()=>{if((0,s.has)(V,t)){const e=(0,h.w8)(T,V[t].toString());if(!(0,s.isEmpty)(e)){const t=le(T,e.id);if(!(0,s.isEmpty)(t)){const e={};t.map(((t,n)=>{const l=(0,h.w8)(T,t);l&&(e[l.depth]=l)})),(0,s.isEmpty)(e)||I(e)}}}}),[V]),(0,r.useEffect)((()=>((0,p.BB)(H,t),h.YB.on("filterToggled-"+t,(e=>{m(t,[]),_(t),B("")})),()=>{h.YB.remove("filterToggled-"+t)})),[]),(0,f.Z)("wcf-reset-filters",(()=>{z(!0),m(t,!1),B(""),z(!1)})),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:X},(0,l.createElement)(a.Z,{options:Q,value:U[Object.keys(U)[0]],onChange:e=>(e=>{x();const t=e[0];t&&Y(t.depth,t)})(e.value),searchable:Z&&$,overrides:"horizontal"===A?d.Rd:d.Hz,noResultsMsg:v.no_results,clearable:!1,placeholder:ne(Q,U[Object.keys(U)[0]],C.label),getOptionLabel:K,disabled:(0,s.isEmpty)(Q)}),(()=>{const e=[];return Object.keys(U).forEach((function(t){const n=t,r=U[t];r?.children&&e.push((0,l.createElement)(E,{key:n,slug:n,term:r,hasValue:N,map:U,handleChildrenSelection:ee,layout:A,searchable:Z&&$,getOptionLabel:K,label:C.label,getPlaceholder:ne}))})),e})()))}}}]);