import{d as u,e as d,_ as l,o as i,c as r,x as c,r as _,n as b}from"./framework.1dba41a0.js";const f=u({name:"Button",props:{type:{type:String,default:"default"},size:{type:String,default:"middle"},disabled:{type:Boolean},text:{type:Boolean,default:!1},bg:{type:Boolean,default:!1}},setup(e){const{type:s,size:n,disabled:o,text:a,bg:p}=e;return{getClass:d(()=>{const t=["pvue-button",`pvue-button--${s}`,`pvue-button--${n}`];return o&&t.push("pvue-button--disabled"),a&&t.push("pvue-button--text"),p&&t.push("pvue-button--bg"),t.join(" ")})}}});const m=["disabled"],g={class:"pvue-button__content"};function v(e,s,n,o,a,p){return i(),r("button",{disabled:e.disabled,class:b(e.getClass)},[c("span",g,[_(e.$slots,"default")])],10,m)}const C=l(f,[["render",v]]);export{C};