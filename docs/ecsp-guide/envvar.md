---
title: 环境变量
order: 3
---

# 环境变量

## .env.development

开发环境变量配置文件

```
PROXY_SERVER_REMOTE=http://km.dev.zhihu.com
PROXY_SERVER_ZHIHU=https://www.zhihu.com
PROXY_SERVER_APIZHIHU=https://api.zhihu.com
REACT_APP_REMOTE=https://crm.zhihu.com
PROXY_COOKIE=
DISABLE_DLL=true
```

## .env.development.local

本地开发环境变量配置文件，**优先级高于.env.development**

```
REACT_APP_REMOTE=https://ecsp--box-00000--crm-zhihu-com.zpres.zhihu.com
PROXY_COOKIE=
PUBLIC_URL=
PORT=7777
DISABLE_ESLINT_PLUGIN=true
DISABLE_DLL=true
```

## .env.production

线上环境变量配置文件

```
REACT_APP_BASENAME=/apps/education-affairs
REACT_APP_REMOTE=/
NODE_ENV=production
DISABLE_ESLINT_PLUGIN=true
GENERATE_SOURCEMAP=false
```

## 变量描述

<table>
  <tr>
    <th style="width:250px;">变量名</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>REACT_APP_REMOTE</td>
    <td>本地调试代理用环境变量</td>
  </tr>
  <tr>
    <td>PROXY_COOKIE</td>
    <td>测试环境需要将线上测试环境 cookie 复制到这里</td>
  </tr>
  <tr>
    <td>DISABLE_DLL</td>
    <td>关闭 DLL 功能，因项目中存在 zhihuhybrid 依赖重复启动问题，所以需要先关闭此功能</td>
  </tr>
  <tr>
    <td>DISABLE_ESLINT_PLUGIN</td>
    <td>关闭 webpack-eslint-plugin 插件功能，lint 报错时不会弹出 ErrorBoundary 页面</td>
  </tr>
  <tr>
    <td>NODE_ENV</td>
    <td>环境变量</td>
  </tr>
  <tr>
    <td>REACT_APP_BASENAME</td>
    <td>应用在线上的 base 路由，例如https://crm.zhihu.com/apps/education-affairs/workbench/board 中的`/apps/education-affairs`</td>
  </tr>
  <tr>
    <td>PORT</td>
    <td>本地开发端口号</td>
  </tr>
   <tr>
    <td>PUBLIC_URL</td>
    <td>资源地址</td>
  </tr>
</table>
