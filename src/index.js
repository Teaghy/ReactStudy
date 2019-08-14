import React from 'react'   //创建组件 虚拟DOM元素 生命周期
import ReactDom from 'react-dom'   //放到页面上展示

//  const mydiv=React.createElement('div',{id: 'mydiv',class: 'dv', title: '我是关宏荣'}, '这是一个div元素')
//  const dv=React.createElement('div',{id: 'box',class: 'dv', title: '我是关宏荣2号'}, '这是一个div2元素',mydiv)

 const ghdiv=<div>my name is guanhongrong</div>

// ReactDom.render(ghdiv,document.getElementById('app'))let a=10

// const ghdiv=<div>my name is guanhongrong</div>

// ReactDom.render(<div>这是一个标签</div>,document.getElementById('app'))

// 当我们需要在JSX控制的区域内,写js表达式,则需要把js代码的表达式写到{}中
// let a=5555555555555555555
// let str="我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人"
// let boo= true
// let title='999'
// let arrStr=["路飞尚","索隆尚",'香吉士','乔巴']
// const myarr=[]
// arrStr.forEach(item =>{
//     let temp=<h3 key={item}>{item}</h3>
//     myarr.push(temp)
// })
// var result=arrStr.map(item =>{
//     return item+'~~'
// })
// // console.log(result)
// const h1=<h1>红红火火红红火火红红火火红红火火红红火火红红火火红红火火红红火火红红火火</h1>
// let arr=[<h1>这是h1</h1>,<h2>这是h2</h2>,<h3>这是h3</h3>]
// import Hello from '@/components/Hello'
// import '@/03.class-基本使用'
 //import '@/04.class继承'
//注解dev

const user ={
    name:'大黄',
    age: 3,
    gender: '熊'
}
var users={
    phone: '456899',
    ...user
}
ReactDom.render(ghdiv,document.getElementById('app'))
