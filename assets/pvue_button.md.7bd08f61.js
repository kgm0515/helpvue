import{B as p,o as r,c,x as n,D as a,z as l,a as s,N as e}from"./chunks/framework.1dba41a0.js";const y=n("h1",{id:"介绍",tabindex:"-1"},[s("介绍 "),n("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")],-1),D=n("p",null,"按钮组件，用于触发操作。",-1),F=n("h2",{id:"按钮类型",tabindex:"-1"},[s("按钮类型 "),n("a",{class:"header-anchor",href:"#按钮类型","aria-label":'Permalink to "按钮类型"'},"​")],-1),d={class:"children-space10"},i=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">默认按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">danger</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="文字按钮" tabindex="-1">文字按钮 <a class="header-anchor" href="#文字按钮" aria-label="Permalink to &quot;文字按钮&quot;">​</a></h2>`,2),u={class:"children-space10"},C=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文字按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">bg</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文字按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2>`,2),h={class:"children-space10"},g=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">禁用按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">禁用按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="按钮大小" tabindex="-1">按钮大小 <a class="header-anchor" href="#按钮大小" aria-label="Permalink to &quot;按钮大小&quot;">​</a></h2>`,2),A={class:"children-space10"},_=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">禁用按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">middle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PvueButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">large</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PvueButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><p>PvueButton props</p><table><thead><tr><th>参数</th><th style="text-align:center;">说明</th><th style="text-align:right;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>type</td><td style="text-align:center;">类型: <code>default</code>,<code>primary</code>,<code>info</code>,<code>success</code>,<code>warning</code>,<code>danger</code></td><td style="text-align:right;">string</td><td style="text-align:right;">default</td></tr><tr><td>size</td><td style="text-align:center;">尺寸: <code>small</code>,<code>middle</code>,<code>large</code></td><td style="text-align:right;">string</td><td style="text-align:right;">middle</td></tr><tr><td>disabled</td><td style="text-align:center;">是否可点击</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>text</td><td style="text-align:center;">是否是文字按钮</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>bg</td><td style="text-align:center;">是文字按钮否是有背景</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><p>PvueButton Events</p><table><thead><tr><th>参数</th><th style="text-align:center;">说明</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>click</td><td style="text-align:center;">点击按钮时触发，在 <code>loading</code> 或 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td style="text-align:right;">event: Event</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>PvueButton Slots</p><table><thead><tr><th>插槽名</th><th style="text-align:center;">说明</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>default</td><td style="text-align:center;">按钮内容</td><td style="text-align:right;">-</td></tr></tbody></table>`,11),f=JSON.parse('{"title":"button按钮","description":"","frontmatter":{"title":"button按钮","lang":"en-US"},"headers":[],"relativePath":"pvue/button.md","lastUpdated":1679964377000}'),v={name:"pvue/button.md"},m=Object.assign(v,{setup(b){const o=()=>console.log(12);return(P,q)=>{const t=p("PvueButton");return r(),c("div",null,[y,D,F,n("div",d,[a(t,null,{default:l(()=>[s("默认按钮")]),_:1}),a(t,{type:"primary",onClick:o},{default:l(()=>[s("primary")]),_:1}),a(t,{type:"success"},{default:l(()=>[s("success")]),_:1}),a(t,{type:"info"},{default:l(()=>[s("info")]),_:1}),a(t,{type:"warning"},{default:l(()=>[s("warning")]),_:1}),a(t,{type:"danger"},{default:l(()=>[s("danger")]),_:1})]),i,n("div",u,[a(t,{type:"default",text:!0},{default:l(()=>[s("文字按钮")]),_:1}),a(t,{type:"warning",text:!0,bg:!0},{default:l(()=>[s("文字按钮")]),_:1})]),C,n("div",h,[a(t,{type:"default",disabled:""},{default:l(()=>[s("禁用按钮")]),_:1}),a(t,{type:"danger",disabled:""},{default:l(()=>[s("禁用按钮")]),_:1})]),g,n("div",A,[a(t,{size:"small"},{default:l(()=>[s("small")]),_:1}),a(t,{size:"middle"},{default:l(()=>[s("middle")]),_:1}),a(t,{size:"large"},{default:l(()=>[s("large")]),_:1})]),_])}}});export{f as __pageData,m as default};
