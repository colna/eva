---
title: 设计思路
order: 2
---

# 设计思路

Eva 在诞生过程中，尝试了很多技术与策略。这些方案沉淀下来，就成为指引我们如何做好企业级框架的思路。

设计思路包括：

1. 面向的对象
2. 面对的问题
3. 架构策略
4. 技术选型：

- 包管理工具
- package 构建工具
- app 构建工具
- monorepo 工具

5. 包管理工具
6. package 构建优化
7. app 构建优化
8. monorepo 构建优化
9. all in one
10. CI/CD

## 面向的对象 & 问题

现存主要问题
由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)，维护成本与开发成本不匹配：

多团队维护，变更影响范围不可控
随着项目的体积变大，编译的速度变长，研发效率降低
项目变大，系统的复杂度也会随之变大，可维护性越来越低，重构成本越来越大（增量构建、antd、webpack 升级等）
CRA 拓展性差，技术局限 [现代 web 发展趋势-问卷调查 2021](https://zhuanlan.zhihu.com/p/403206195)
案例一：会员侧的改动导致教育应用出现问题，教育侧问题排查困难，难以定位，从问题反馈到定位问题 MR 历时 1 天.

[2022-W41 教育前端周报](https://wiki.in.zhihu.com/pages/viewpage.action?pageId=368635474)

案例二： NG 入口配置修改，导致入口导航页面崩溃（ecom.in.zhihu.com），影响项目内所有团队。

## all in one

<img decoding="async" src="https://picx.zhimg.com/v2-eecfa4da968df349977b4c51e82ade7c.png?source=6a64a727" width="50%"/>

技术收敛对团队而言尤其重要，他包含两层含义，1）技术栈收敛 2）依赖收敛。技术栈收敛指社区那么多技术栈，每个技术方向都有非常多选择，比如数据流应该就不下 100 种，开发者应该如何选择；收敛了技术栈之后还需要收敛依赖，团队中，开发者的项目不应该有很多细碎的依赖，每一个依赖都附带着升级成本。

我们希望开发者依赖 Eva 之后就无需关心 babel、webpack、postcss、react、react-router,redux 等依赖，而依赖 `@kfe/eva` 之后无需再关心开发中台项目的依赖和技术栈。

### 插件和插件集

<img decoding="async" src="https://picx.zhimg.com/v2-544b6da1eb651da7b007cde63155d336.png?source=6a64a727" width="100%"/>

Eva 提供了一套模块化、可扩展的体系架构，并支持灵活的插件机制和成熟的应用架构理念，使得框架变得更加灵活和易于扩展。所有的插件被集成在`@kfe/eva-plugins`可以单独使用，也可以从`@kfe/eva`中引入使用

```js
import {Link,compose,useHistory,withUrlQuery,App,...} from '@kfe/eva'
```
