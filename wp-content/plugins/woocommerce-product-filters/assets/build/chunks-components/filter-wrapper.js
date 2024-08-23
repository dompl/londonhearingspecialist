"use strict";(self.webpackChunkwoocommerce_filters=self.webpackChunkwoocommerce_filters||[]).push([[5447],{2121:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(9307),o=n(9196),c=n(4184),r=n.n(c),s=n(2629),i=n(2819),a=n(7462),d=e=>{let{variation:t="up",...n}=e;return"down"===t?(0,l.createElement)("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},n),(0,l.createElement)("path",{d:"M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"})):(0,l.createElement)("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},n),(0,l.createElement)("path",{d:"M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3 54.6 342.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z"}))},u=n(389);const f=WCF_Frontend;var m=e=>{let{name:t,type:n,layout:c,mobile:a,children:m,facet:w,...p}=e;const g=p?.widget;let v="yes"===f.toggle_filters;const h=f.toggle_default_status;let E=!0;v&&"closed"===h&&(E=!1),"count"===n&&(v=!1,E=!0);const{shouldFilterBeHidden:y}=(0,u.CR)(),[b,_]=(0,o.useState)(E),k=!!w?.slug&&y(w.slug,w.filter_by),C=r()("wcf-filter",n,{"wcf-hidden":!b&&v&&"horizontal"!==c||k,"should-toggle":v,"is-mobile":a,"is-disabled":k});return g?(0,l.createElement)("div",{className:C},!(0,i.isEmpty)(t)&&(0,l.createElement)("div",{className:"wcf-widget-toggle",onClick:()=>v&&_(!b)},(0,l.createElement)("h4",{className:"wcf-filter-title"},(0,s.decodeEntities)(t),v&&(0,l.createElement)(d,{variation:b?"up":"down"}))),(0,l.createElement)("div",{className:"inside-filter"},m)):(0,l.createElement)("div",{className:C},"horizontal"!==c&&!(0,i.isEmpty)(t)&&(0,l.createElement)("p",{className:"wcf-filter-title",onClick:()=>v&&_(!b)},(0,l.createElement)("span",null,(0,s.decodeEntities)(t)),v&&(0,l.createElement)(d,{variation:b?"up":"down"})),(0,l.createElement)("div",{className:"inside-filter"},m))}},3406:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(9307),o=n(5998),c=n(374),r=n(4376),s=n(907),i=n(4184),a=n.n(i),d=n(2819);let u=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");var f=n(9950),m=n(389),w=n(4271);const p=WCF_Frontend;var g=e=>{let{facet:t,content:n,popoverPosition:i}=e;const[g,v]=(0,l.useState)(!1),[h,E]=(0,l.useState)(!1),{getStoredValues:y,shouldFilterBeHidden:b}=(0,m.CR)(),{filter_by:_,options:k}=t,{filter_type:C}=k,F=(0,r.Lm)()<600;(0,l.useEffect)((()=>{if("instant"!==p.filter_mode||["colors"].includes(_)||["checkboxes","labels","images"].includes(C))return;const e=m.Gd.subscribe((e=>e.isFiltering),(e=>{!1===e&&v(!1)}));return()=>{e()}}),[]),(0,l.useEffect)((()=>{g&&(0,w._S)("#wcf-pop-container-"+t.slug).then((e=>{const n=document.querySelector("#wcf-pop-container-"+t.slug+" .wcf-popover-body");e.clientWidth>250?(E(!0),n.style.width=e.clientWidth+"px"):E(!1)}))}),[g]),(0,l.useEffect)((()=>{if(!F)return;const e=document.querySelector(".wcf-loop-template");g?e.classList.add("wcf-disable-mobile-nav"):e.classList.remove("wcf-disable-mobile-nav")}),[g]);const N=b(t.slug,t.filter_by),S=(0,s.q)(N),x=a()("wcf-horizontal-popover",{"is-active":(0,d.has)(y(),t.slug),"is-disabled":N}),B=a()("wcf-popover-holder","holder-"+_,{"is-large":h}),z=(0,l.useRef)();return(0,c.Z)("wcf-sorter-triggered",(()=>{v(!1)})),(0,c.Z)("wcf-dropdown-opened",(e=>{e.detail.facet!==t.slug&&v(!1)})),!0===S&&N||null===S&&N?null:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(o.Z,{content:()=>n,returnFocus:!1,autoFocus:!1,renderAll:!0,placement:i,mountNode:document.getElementById("wcf-pop-container-"+t.slug),ignoreBoundary:!1,overrides:f.M_,isOpen:!N&&g,onClick:()=>!N&&v(!g),onClickOutside:()=>v(!1),onEsc:()=>v(!1)},(0,l.createElement)("div",{ref:z,id:"wcf-popover-"+u(),className:x,tabIndex:0,role:"button",onKeyDown:e=>(e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key||"Spacebar"===e.key||40===e.which||13===e.which||32===e.which){e.preventDefault(),!N&&v(!g);const n=new CustomEvent("wcf-dropdown-opened",{detail:{facet:t.slug}});window.dispatchEvent(n)}})(e)},t.name)),(0,l.createElement)("div",{id:"wcf-pop-container-"+t.slug,className:B}))}}}]);