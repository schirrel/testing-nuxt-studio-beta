import{d as v,ak as m,r as h,J as y,b as s,c as o,K as i,f as _,e,F as f,ai as k,p as C,i as g,t as x,k as S}from"./entry.0df47e7e.js";const n=t=>(C("data-v-40588e6c"),t=t(),g(),t),b={key:0,class:"copied"},w=n(()=>e("div",{class:"scrim"},null,-1)),B=n(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",b,I)):_("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,x(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):_("",!0)]))}});const E=S(q,[["__scopeId","data-v-40588e6c"]]);export{E as default};
