//let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是，let 声明的范围是块作用域， 
//而 var 声明的范围是函数作用域。

if (true) {
    var name = 'Matt';
    console.log(name); // Matt
}
console.log(name); // Matt


if (true) {
    let age = 26;
    console.log(age);
}
console.log(age);// ReferenceError: age 没有定义
//在这里，age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。
//块作用域 是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let。

//let 也不允许同一个块作用域中出现冗余声明。这样会导致报错: 
var name;
var name;
let age;
let age; //SyntaxError;标识符age已经声明过了
//当然，JavaScript 引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标 识符不会报错，而这是因为同一个块中没有重复声明:
var name = 'Nicholas';
console.log(name); // 'Nicholas' 
if (true) {
    var name = 'Matt';
    console.log(name); // 'Matt' 
}
let age = 30; console.log(age); // 30 
if (true) {
    let age = 26;
    console.log(age); // 26 
}
//对声明冗余报错不会因混用 let 和 var 而受影响。这两个关键字声明的并不是不同类型的变量， 它们只是指出变量在相关作用域如何存在。
var name;
let name; // SyntaxError
let age;
var age; // SyntaxError