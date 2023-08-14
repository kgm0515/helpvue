---
title: 测试静态资源加载
editLink: false
footer: false
sidebar: false
aside: true
lastUpdated: false
---

# title - {{ $frontmatter.title }}

这里讲解静态资源在 markdown 中的使用 {class="自定义类名"}

## 加载静态资源

md 语法加载图片

<div class="flex flex-col sm:flex-row">

![An image](/img/rabit.jpeg)  {class="w-full sm:flex-2/5 md:flex-1/4"}

唐宋八大家，又称为“唐宋散文八大家”，是唐代和宋代八位散文家的合称，分别为唐代韩愈、柳宗元和宋代欧阳修、苏洵、苏轼、苏辙、王安石、曾巩八位。其中韩愈、柳宗元是唐代古文运动的领袖，欧阳修、三苏（苏轼、苏辙、苏洵）等四人是宋代古文运动的核心人物，王安石、曾巩是临川文学的代表人物。他们先后掀起的古文革新浪潮，使诗文发展的陈旧面貌焕然一新。
明初朱右选韩、柳等人文为《八先生文集》，遂起用八家之名，实始于此。明中叶唐顺之所纂《文编》中，唐宋文也仅取八家。明末茅坤承二人之说，选辑了《唐宋八大家文钞》共 164 卷，此书在旧时流传甚广，“唐宋八大家”之名也随之流行。自明人标举唐宋八家后，治古文者皆以八家为宗。通行《唐宋八大家文钞》164 卷，有明万历刻本及清代书坊刻本。清代魏源有《纂评唐宋八大家文读本》8 卷。
八大家中苏家父子兄弟有三人，人称“三苏”，分别为苏洵、苏轼、苏辙，又有“一门三学士”之誉。故可用“韩柳欧王曾三苏”概括。

</div>

img 标签加载图片

<div class="flex justify-start flex-wrap">
  <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 el:w-1/4">
  <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 el:w-1/4">
  <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 el:w-1/4">
  <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 el:w-1/4">
  <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 el:w-1/4">
</div>