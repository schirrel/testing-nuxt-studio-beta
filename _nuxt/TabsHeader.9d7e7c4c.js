import{d as b,r as l,a0 as m,b as a,c as s,F as v,ai as g,e as u,f as x,$ as y,n as k,t as I,p as T,i as S,R as $,k as C}from"./entry.0df47e7e.js";const w=t=>(T("data-v-1a44e4b9"),t=t(),S(),t),B={class:"tabs-header"},H=["onClick"],N=w(()=>u("span",{class:"tab"},null,-1)),R=[N],U=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,c)=>{_("update:activeTabIndex",c),$(()=>o(e.target))};return m(n,e=>{e&&setTimeout(()=>{o(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",B,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:k([t.activeTabIndex===i?"active":"not-active"]),onClick:f=>h(f,i)},I(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},R,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const F=C(U,[["__scopeId","data-v-1a44e4b9"]]);export{F as default};
