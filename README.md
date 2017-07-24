# bicycle-pack
🚲 bicycle-pack, a simple and extendable pack scheme based on webpack.

## 功能(feature):

* 轻松拥有多入口开发（打包时可指定入口）

* 一键生成基础配置

* 打包配置脚本结构清晰，易修改，易扩展

* 可打包app内置页

## 用法(usage):

```
npm install bicycle-cli -g

mkdir my-project

cd my-project

bicycle

//create ok !

yarn && yarn run dev/build index/[your entry dir name]
```

## 开发目录结构(directory structure)
```
src
├── ... 可共用资源(common js/css/img/font)
└── entry  多入口开发目录(entrys)
    ├── index  index入口
    │   ├── index.html
    │   └── index.js
    └── list   list入口
        ├── index.html
        └── index.js
```

## 注意(notice):
```
多入口开发时，入口名称由entry下的文件夹名称确定
入口文件必须为index.html
入口js必须为index.js
```
