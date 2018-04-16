# wwebpack官方Model

## 注意事项

1. 当在 windows 中通过调用路径去调用 webpack 时，必须使用反斜线()。例如 `node_modules\.bin\webpack --config webpack.config.js`
2. 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 `--config` 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。

## script

```json
  "test0": "webpack", //如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
  "test1": "npx webpack src\\index.js --output dist\\bundle.js",
  "test2": "npx webpack --config webpack.config.js" //使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
```