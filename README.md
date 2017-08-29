##准备
```
npm init -y
npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 style-loader css-loader less-loader less file-loader url-loader html-webpack-plugin -D
npm install react react-dom -S

.gitignore
node_modules
.idea
npm-debug.log
```
##配置文件
1. .babelrc
2. webpack.config.js

## 组件功能划分
1. 先确定好组件要实现的功能和最终封装好的结果
2. 组件物理拆分,最终引入至组件.js