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
console.log(aa.b);

(() => new Promise((resolve,reject) => {
    resolve(1);
}))().then(res => {
    console.log(res);
})

console.log(process.env.NODE_ENV);

'@babel/plugin-transform-runtime' -D // 把es6内置的api转成es5的api，Promise,Set,Symbol,Array.from,async 等等的一些API
'@babel/runtime' == '--save' // es6补丁
// 更高级的es7
'@babel/polyfill' == '--save' // es7补丁，要在require引入