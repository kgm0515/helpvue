import{d as u,e as d,_ as D,o as t,c as l,x as s,r as y,n as F,u as _,F as h,K as C,D as g,z as v,t as c,b as m,N as r,a as o}from"./chunks/framework.fbfede03.js";const b=u({name:"Button",props:{type:{type:String,default:"default"},size:{type:String,default:"middle"},round:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(a){return{getClass:d(()=>{const e=["pvue-button"];return e.push(`pvue-button--${a.type}`),e.push(`pvue-button--${a.size}`),a.round&&e.push("pvue-button--round"),a.ghost&&e.push("pvue-button--ghost"),a.link&&e.push("pvue-button--link"),a.disabled&&e.push("pvue-button--disabled"),e})}}}),A=["disabled"],f=s("div",{class:"pvue-button__board"},[s("div",{class:"pvue-button__backg"}),s("div",{class:"pvue-button__edge"})],-1),k={class:"pvue-button__main"};function T(a,n,e,i,p,E){return t(),l("button",{class:F(a.getClass),disabled:a.disabled},[f,s("div",k,[y(a.$slots,"default")])],10,A)}const S=D(b,[["render",T]]),P=r("",6),V=s("h2",{id:"input",tabindex:"-1"},[o("Input "),s("a",{class:"header-anchor",href:"#input","aria-label":'Permalink to "Input"'},"​")],-1),q=s("div",null,[s("p",null,[s("code",null,"{{ This will be displayed as-is }}")])],-1),B=s("h2",{id:"access-to-site-page-data-using-components",tabindex:"-1"},[o("Access to Site & Page Data & Using Components "),s("a",{class:"header-anchor",href:"#access-to-site-page-data-using-components","aria-label":'Permalink to "Access to Site & Page Data & Using Components"'},"​")],-1),x=r("",2),N=JSON.parse('{"title":"在 Markdown 中使用 vue","description":"","frontmatter":{"title":"在 Markdown 中使用 vue","lang":"en-US"},"headers":[],"relativePath":"guide/useVue.md","lastUpdated":1679990101000}'),w={name:"guide/useVue.md"},I=Object.assign(w,{setup(a){const{page:n}=_();return(e,i)=>(t(),l("div",null,[P,(t(),l(h,null,C(3,p=>s("div",null,c(p),1)),64)),V,q,B,g(S,null,{default:v(()=>[o("haha")]),_:1}),s("pre",null,c(m(n)),1),x]))}});export{N as __pageData,I as default};