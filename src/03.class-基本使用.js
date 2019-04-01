function Person(name,age) {
    this.name=name 
    this.age=age
}   
Person.info='aaaa' //静态属性
Person.prototype.say=function () {
    console.log('say~~~~~~~~~~~~~~~~~~~实例方法')
}
Person.show=function () {
    console.log('show~~~~~~~~~~~~~~~~~~~静态方法')
}
const p=new Person('zs',18) //实例 
console.log(p)
console.log(p.say)
console.log(p.show)
console.log(Person.show)


console.log('__________________________---------------')

class Animal{ 
    // 构造器
    constructor(name,age){ //实例属性
        this.name=name
        this.age=age
    }
    static info ="eee" //静态属性
    //实例方法
    jiao(){
        console.log('叫的可怕 实例方法')
    }
    //静态方法
    static show(){
        console.log('show静态方法')
    }
}
console.log(Animal)
const a1=new Animal('大黄',3)
console.log(a1)
console.log(a1.info)
a1.jiao()
console.log(Animal.info)
Animal.show()