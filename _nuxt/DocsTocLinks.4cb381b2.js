import{r as i,a0 as f,ah as h,ad as g,d as b,u as y,b as u,c as v,F as k,ai as x,n as p,e as B,t as C,K as H,aj as S,Y as A,f as T,k as q}from"./entry.0df47e7e.js";const D=()=>{const c=i(),t=i([]),a=i([]),d=e=>e.forEach(o=>{const s=o.target.id;o.isIntersecting?t.value.push(s):t.value=t.value.filter(r=>r!==s)}),l=e=>e.forEach(o=>{c.value.observe(o)});return f(t,(e,o)=>{e.length===0?a.value=o:a.value=e},{deep:!0}),h(()=>c.value=new IntersectionObserver(d)),g(()=>{var e;return(e=c.value)==null?void 0:e.disconnect()}),{visibleHeadings:t,activeHeadings:a,updateHeadings:l}},L={class:"docs-toc-links"},M=["href","onClick"],$=b({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(c,{emit:t}){const a=y(),{activeHeadings:d,updateHeadings:l}=D();setTimeout(()=>{l([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(s){a.push(`#${s}`),t("move",s)}function o(s){t("move",s)}return(s,r)=>{const m=w;return u(),v("ul",L,[(u(!0),v(k,null,x(c.links,n=>(u(),v("li",{key:n.text,class:p([`depth-${n.depth}`])},[B("a",{href:`#${n.id}`,class:p([H(d).includes(n.id)&&"active"]),onClick:S(_=>e(n.id),["prevent"])},C(n.text),11,M),n.children?(u(),A(m,{key:0,links:n.children,onMove:r[0]||(r[0]=_=>o(_))},null,8,["links"])):T("",!0)],2))),128))])}}});const w=q($,[["__scopeId","data-v-bba730fd"]]);export{w as default};
