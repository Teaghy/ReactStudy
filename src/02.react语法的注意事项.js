import React from 'react'   //创建组件 虚拟DOM元素 生命周期
import ReactDom from 'react-dom'   //放到页面上展示

// const mydiv=React.createElement('div',{id: 'mydiv',class: 'dv', title: '我是关宏荣'}, '这是一个div元素')

// const ghdiv=<div>my name is guanhongrong</div>

// ReactDom.render(ghdiv,document.getElementById('app'))let a=10

// const ghdiv=<div>my name is guanhongrong</div>

// ReactDom.render(<div>这是一个标签</div>,document.getElementById('app'))

// 当我们需要在JSX控制的区域内,写js表达式,则需要把js代码的表达式写到{}中
let a=5555555555555555555
let str="我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人我爱中国,我是中国人"
let boo= true
let title='999'
let arrStr=["路飞尚","索隆尚",'香吉士','乔巴']
const myarr=[]
arrStr.forEach(item =>{
    let temp=<h3 key={item}>{item}</h3>
    myarr.push(temp)
})
var result=arrStr.map(item =>{
    return item+'~~'
})
// console.log(result)
const h1=<h1>红红火火红红火火红红火火红红火火红红火火红红火火红红火火红红火火红红火火</h1>
let arr=[<h1>这是h1</h1>,<h2>这是h2</h2>,<h3>这是h3</h3>]
ReactDom.render(<div>这是一个标签{a+10}
<hr/>
{str}
<hr/>
{boo? '条件为真': '条件假的'} 
<p title={title}>这是p标签</p>
{h1}
{/*arr*/}
{myarr}
<hr/>
{arrStr.map(item=> <h1 key={item}>{item}</h1>)}
<hr/>
<p className="mycl">要是calssName</p>
<label htmlFor="ji">label标签</label>
</div>,document.getElementById('app'))
