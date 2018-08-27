## Inspiration

YJWeather 是一款简单天气预报应用，项目基于 React 框架。

之前一直在捣鼓Vue，所以很久没碰React了，所以项目还是为了熟练一下React整体开发流程。该应用只是简单地实现了天气展示功能，并没有做太多的其他功能，有些功能还在开发当中，有时间会继续开发。

将React和Vue相比较，明显感觉到Vue的会简单一些。公司的产品是一套管理系统，非常适合MVVM模式开发，业务和数据很复杂。但是Vue的双向绑定很大程度上减轻了数据变化时对DOM的操作。

其实于我而言，开发用什么框架都不重要，框架只是途径，真正重要的点应该放在业务、体验和优化上。


## Framework
- 使用`axios`实现网络请求
- 使用`react-redux`实现数据缓存，`redux`相对比较重。实际项目应该
- 使用`react-router-dom`实现路由切换


## 功能
- [x] 实时天气
- [x] 逐小时天气
- [x] 最近3天的天气
- [ ] 城市管理
- [ ] 热点新闻


## install & run
- Clone this repo `git clone https://github.com/zyj7815/YJWeather-React.git`
- cd `YJWeather-React`
- run `npm install`
- `npm start`