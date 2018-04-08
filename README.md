# 路径识别

- 绝对路径
- 相对路径

    从 require 或 import 所在的代码文件开始访问相对路径

- 模块路径

    webpack 类似 Node.js 先从 require 或 import 所在路径查找 node_modules 目录下是否存在相应模块，没有就往上级模块查找


# 模块识别
- 文件

    如果模块路径包含后缀，则直接访问相应文件，否则按照 `''`, `.js`，`.json` 的顺序查找

- 目录

    如果目录包含 `package.json`，则查找 `package.json` 的 `main` 字段，否则查找该路径下的 `index.js`

# 模块化方案
- CommonJS

    ```
    // 定义模块
    module.exports = '...';
    // 引入模块
    require('...');
    ```

- AMD

    ```
    // 定义模块
    define([...], function () {
      return ...;
    });
    // 引入模块
    require([...], function () {
      return ...;
    })
    ```

- ES6 Module

    ```
    // 定义模块
    export default ...;
    // 引入模块
    import '...';
    ```

# 安装
[Installation](https://webpack.js.org/guides/installation/)

- 本地安装：`npm install webpack webpack-cli --save-dev`
- 全局安装：`npm install webpack webpack-cli -g`

    不推荐

备注：Webpack 运行在 Node.js 中，推荐安装最新的 LTS 版本。

# 使用
- 新建项目：`mkdir webpack-demo && cd webpack-demo && npm init -y`
- 安装 webpack：`npm install --save-dev webpack webpack-cli`
- 查看帮助：`npx webpack --help`：
- 安装示例程序依赖模块：`npm install lodash --save`
- 编写示例代码

    - `./2.1-hello/app/index.js`
    - `./2.1-hello/index.html`

- 执行 webpack 打包构建：`npx webpack app/index.js -o dist/bundle.js --mode development`
- 在浏览器中打开 `index.html`，观察是否正确执行
- 分析打包文件

# 模块化
Webpack 默认配置只能加载 JavaScript，并且支持多种模块化方案。其他非 JavaScript 的静态资源一般都是使用特殊的加载器处理合并后生成相应的静态资源，然后再以链接或脚本的形式注入到 JavaScript 代码中（例如：CSS 相关的加载器可以将 CSS 文件转换为字符串，再通过 JavaScript 代码以 style 标签的形式注入到 HTML）。所以，这里主要讨论 JavaScript 的模块化方案，其他的静态资源需要根据具体加载器的处理机制来分析。



# module
Node：内部提供一个 Module 构建函数，所有模块都是 Module 的实例。

> - module.id 模块的识别符，通常是带有绝对路径的模块文件名。
> - module.filename 模块的文件名，带有绝对路径。
> - module.loaded 返回一个布尔值，表示模块是否已经完成加载。
> - module.parent 返回一个对象，表示调用该模块的模块。
> - module.children 返回一个数组，表示该模块要用到的其他模块。
> - module.paths：返回一个数组，表示模块查找路径
> - module.exports 表示模块对外输出的值。

Webpack：打包文件里也会在每个模块内部提供一个 module 实例。

- module.id：模块标识符使用数字表示
- module.filename：无
- module.loaded：同 CommonJS
- module.parent：无
- module.children：空？
- module.paths：空？
- module.exports：同 CommonJS
- module.deprecate：？
- module.webpackPolyfill：？

# require
- Node：require 命令的基本功能是，读入并执行一个 JavaScript 文件，然后返回该模块的exports 对象。如果没有发现指定模块，会报错。
- Webpack：会将 require 引入的模块打包在同一个文件中，客户端执行到 require 时，对应模块的代码已经在当前打包文件中，直接执行相应模块代码，返回模块输出值。如果没有发现指定模块，打包会报错。

## 模块加载规则
Node：根据参数的不同格式，require 命令去不同路径寻找模块

> - 如果参数字符串以 “/” 开头，则表示加载的是一个位于绝对路径的模块。比如，require('/home/marco/foo.js') 将加载 /home/marco/foo.js；
> - 如果参数字符串以 “./” 或 "../" 开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块。比如，require('./circle') 将加载当前脚本同一目录的 circle.js；
> - 如果参数字符串不以 “./“ 或 "../" 或 ”/“ 开头，则表示加载的是一个默认提供的核心模块（位于 Node 的系统安装目录中），或者一个位于各级 node_modules 目录的已安装模块（全局安装或局部安装） —— 先从当前目录的 node_modules 找，没有找到在递归往上层目录的 node_modules 找；

文件加载规则

> 如果指定的模块文件没有发现，会尝试为文件名添加 .js、.json、.node 后，再去搜索。.js 件会以文本格式的 JavaScript 脚本文件解析，.json 文件会以 JSON 格式的文本文件解析，.node 文件会以编译后的二进制文件解析。

目录加载规则

> require 发现参数字符串指向一个目录以后，会自动查看该目录的 package.json 文件，然后加载main 字段指定的入口文件。如果 package.json 文件没有 main 字段，或者根本就没有 package.json 文件，则会加载该目录下的 index.js 文件或 index.node 文件。

总结：webpack 的模块加载规则基本与 Node 相同，但需要注意以下几点

- Webpack 文件加载规则略微不同，但正常使用一般不需要关注；
- Webpack 需要配置加载器才能加载 .json 文件；
- ... 

## 模块缓存
第一次加载某个模块时，Node/Webpack 会缓存该模块 —— 第一次需要执行模块，然后缓存模块输出值。以后再加载该模块，就直接从缓存取出该模块的 module.exports 属性。

- `require.cache`：一个以 module.id 为 key，存储着已加载模块的对象；
- 可以使用 delete 操作删除缓存；

总结：Webpack 的模块缓存与 Node 差不多。

## 循环加载
如果发生模块的循环加载，即 A 加载 B，B 又加载 A，则 B 将加载 A 的不完整版本。

## 其他用法
Node

- `require.resolve(dependency: String)`：返回依赖模块的 id
- `require.main`：指向主模块（入口模块），即：`node xxx.js` 中的 xxx 模块
- `require.extensions`：根据文件的后缀名，调用不同的执行函数

Webpack

- `require.resolve(dependency: String)`：同 Node
- `require.main`：
- `require.extensions`：无
- `require.include(dependency: String)`：参数的指定的模块会与当前模块在打包在同一个文件中，但执行到此处代码时并不会执行模块代码，只有在真正引入的时候才会。具体用法参考 [require.include](http://webpack.github.io/docs/api-in-modules.html#require-include)
- `require.context(directory:String, includeSubdirs:Boolean /* optional, default true */, filter:RegExp /* optional */)`：参考 [require.context](http://webpack.github.io/docs/api-in-modules.html#require-context)
