//1. var 声明作用域
/*
function test() {
    var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错!

function test() {
    message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"
*/


//2. var 声明提升
/*
//使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域 5 顶部:
function foo() {
    console.log(age);
    var age = 26;
}
foo();  // undefined

//之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码:
function foo() {
    var age;
    console.log(age);
    age = 26;
}
foo();  // undefined
这就是所谓的“提升”(hoist)，也就是把所有变量声明都拉到函数作用域的顶部。此外，反复多次使用 var 声明同一个变量也没有问题:
function foo() {
    var age = 16;
    var age = 26;
    var age = 36; 
    console.log(age);
}
foo(); // 36
*/

// for (var i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 0)
// }
// console.log("========");

var fuc = [1, 2, 3];
for (var i in fuc) {
    console.log("-1-");
    setTimeout(function () { 
        console.log(">>>"+fuc[i]) 
    }, i * 1000);
    console.log(fuc[i]);
}
