---
title: 参与贡献
order: 2
---

# 参与贡献

❤️ Loving Zhihu/Zhixuetang FE and want to get involved? Thanks!

## 环境准备

### Node.js 和 pnpm

开发 Eva 需要 Node.js 16+ 和 `pnpm` v7+。

推荐使用 `nvm` 管理 Node.js，避免权限问题的同时，还能够随时切换当前使用的 Node.js 的版本。在 Windows 系统下的开发者可以使用 `nvm-windows`。

在 pnpm 的官网选择一种方式安装即可。

### Clone 项目

```shell
$ git clone git@git.in.zhihu.com:kfe/ecsp.git
$ cd eva
```

### 安装依赖

```shell
 pnpm i
```

如果需要使用 example 调试文件请修改 `pnpm-workspace.yaml` 后，再执行`pnpm i`

```diff
packages:
  - 'packages/**'
  - 'scripts/**'
  - '!packages/**/compiled/**'
  - 'docs/**'
+ - 'examples/**'
recursive-install: false

```

### 开发 Eva

#### 启动 example

```shell
# cd examples/${examples名}
$ cd examples/library
$ pnpm start
```

#### 新增 example

`暂时请cv其他example进行新增～`

```
control C + control V 其他example
```

### 构建 Eva

#### 构建 packages

```shell
pnpm build
```

#### 构建 example

```shell
$ cd examples/library
$ pnpm build
```

### 参与 Eva 文档开发

#### 配置导航栏

进入 docs 文件

```shell
$ cd docs/.dumirc.ts
```

修改`.dumirc`文件中，`themeConfig`下，增加`nav`

```js
import { defineConfig } from 'dumi'

export default defineConfig({
  themeConfig: {
    nav: [
      {
        title: '介绍',
        link: '/intro'
      }
    ]
  }
})
```

#### 增加文档

进入 docs/docs 文件

```shell
$ cd docs/docs
```

如果是新增`nav`则创建同名文件夹（文件名需要为英文）<br/>
具体请参考`docs/docs/intro/intro`
