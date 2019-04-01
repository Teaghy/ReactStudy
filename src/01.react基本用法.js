//假设 main.js 是我们的入口文件
// console.log('ooo1111k')
import React from 'react'   //创建组件 虚拟DOM元素 生命周期
import ReactDom from 'react-dom'   //放到页面上展示


const myh1 = React.createElement('h1',{
    id: 'myh1',
    title: '关宏荣'
} , '这是一个大大的H1')
const mydiv=React.createElement('div', null , myh1)

ReactDom.render(mydiv,document.getElementById('app'))