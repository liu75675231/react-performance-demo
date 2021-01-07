## 如何运行
yarn install

yarn run dev

打开:http://localhost:3000

## demo所在目录
都再src/example目录下，此目录下

memo.js 使用memo和不使用memo时渲染次数的差别

pureComponent.js pureComponent的浅比较的原理（源码）以及mobx中对于shouldComponentUpdate（observerSCU）的实现源码

render.js 使用箭头函数和非箭头函数渲染次数的对比

shouldComponentUpdate.js 实现自定义的shouldComponentUpdate钩子，用来更好的理解shouldComponent的原理

useCallback.js 使用useCallback和不使用useCallback在执行次数的区别

whyupdate.js 实现了useWhyDidYouUpdate的钩子，以及如何用它在开发环境中检测组件渲染次数，以及哪些组件导致了组件的渲染

## 如何使用
想要使用看哪个demo，就吧对应的js文件用import导入到src/App.js中
