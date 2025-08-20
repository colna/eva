---
title: 开发
order: 2
---

# ECSP 开发

## 拉取项目

### 第一步

fork 仓库：https://git.in.zhihu.com/kfe/ecsp

### 第二步

clone 项目

```bash
# git clone git@git.in.zhihu.com:${name}/ecsp.git
$ git clone git@git.in.zhihu.com:zhangzheng01/ecsp.git

```

## 安装依赖

```bash
$ pnpm i
```

## 启动 app

执行 `pnpm start` + `app名` 命令，

```bash
$ pnpm start app-name
```

## 创建

### 创建 app

```bash
$ pnpm new

> ecsp@1.0.0 new /Users/zhihu/WORK/ecsp
> create
✔ 请输入文件夹名 … app
✔ 请选择需要的模板 › react-app
✔ Enter app name … new-app
✔ Enter chinese name … 新应用
⠋ Creating...
➤ /Users/zhihu/WORK/ecsp/apps/app/package.json                                      41++
➤ /Users/zhihu/WORK/ecsp/apps/app/jsconfig.json                                     7++
...
➤ /Users/zhihu/WORK/ecsp/apps/app/public/index.html                                 19++
➤ /Users/zhihu/WORK/ecsp/apps/app/public/favicon.ico                                1++

✔ Creat successfully
```

### 创建 package

```bash
$ pnpm new

> ecsp@1.0.0 new /Users/zhihu/WORK/ecsp
> create

✔ 请输入文件夹名 … package
✔ 请选择需要的模板 › package
✔ Enter app name …  new-package
⠋ Creating...
➤ /Users/zhihu/WORK/ecsp/packages/new-package/package.json 9++
➤ /Users/zhihu/WORK/ecsp/packages/new-package/src/index.js 4++

✔ Creat successfully
```

## 构建

### 构建全部

```bash
$ pnpm build
```

### 构建单 app

```bash
$ cd apps/app-name
$ pnpm build
```

### 构建单 packages

```bash
$ cd packages/packages-name
$ pnpm build
```
