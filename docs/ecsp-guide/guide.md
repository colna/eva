---
title: 快速上手
order: 0
---

# 快速上手

## 环境准备

首先得有 node，并确保 node 版本是 16 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows)）

mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 node。

```
$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0
```

然后需要包管理工具。node 默认包含 npm，但也可以选择其他方案，

- [pnpm](https://pnpm.io/installation), Eva 团队推荐
- [Yarn](https://yarnpkg.com/getting-started/install)

安装 pnpm。

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
$ pnpm -v
7.3.0
```

## 创建项目

### 创建 MultiRepo 项目

先找个地方建个空目录。

```bash
$ mkdir my-multirepo-app && cd my-multirepo-app
# 施工中。。。👷，命令待开发。。。⚠️
```

### 创建 MonoRepo 项目

先找个地方建个空目录。

```bash
$ mkdir my-monorepo-app && cd my-monorepo-app
# 施工中。。。👷，命令待开发。。。⚠️
```

## 下一步

恭喜你！你已经创建好 ECSP 项目了，马上前往 [开发](/guide/guide) 学习如何使用启动并开发项目吧 🎉
