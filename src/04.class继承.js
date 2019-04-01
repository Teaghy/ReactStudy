// console.log('人类')
class Person {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    say(){
        console.log('say hello world')
    }
}

//extends 实现继承
class American extends Person {
    // constructor(name,age){
    //     this.name=name
    //     this.age=age
    // }

}
const a1=new American('Jack',20)
console.log(a1);
a1.say()
class Chinese extends Person {
    // constructor(name,age){
    //     this.name=name
    //     this.age=age
    // }
}
const c1 =new Chinese('张三',18)
console.log(c1);