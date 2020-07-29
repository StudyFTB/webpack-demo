import '@/style/main.css';

((item) => {
    console.log(item)
})("这是es6语法");

class A{
    constructor(a){
        console.log(a);
    }
    b=1
}
let aa = new A("这是es7类的语法");
console.log(aa.b)

console.log(process.env.NODE_ENV);
