# 记录

## Split CSS

正如在管理资源中最后的 加载 CSS 小节中所提到的，通常最好的做法是使用 ExtractTextPlugin 将 CSS 分离成单独的文件。在插件文档中有一些很好的实现例子。disable 选项可以和 `--env` 标记结合使用，以允许在开发中进行内联加载，推荐用于热模块替换和构建速度。

## CLI替代选项

以上描述也可以通过命令行实现。例如，`--optimize-minimize` 标记将在后台引用 UglifyJSPlugin。和以上描述的 DefinePlugin 实例相同，`--define process.env.NODE_ENV="'production'"` 也会做同样的事情。并且，`webpack -p` 将自动地调用上述这些标记，从而调用需要引入的插件。