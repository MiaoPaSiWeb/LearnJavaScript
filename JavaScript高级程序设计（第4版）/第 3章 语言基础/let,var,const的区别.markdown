1. 暂时性死区
let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。
// name 会被提升 
console.log(name); // undefined 
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError:age 没有定义 
let age = 26;

在解析代码时，JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被称为“暂时性死区”(temporal dead zone)，在此 阶段引用任何后面才声明的变量都会抛出 ReferenceError。

2. 全局声明
与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性(var声明的变量则会)。
var name = 'Matt'; 
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined

3. 条件声明
在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合 并为一个声明。因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同 时也就不可能在没有声明的情况下声明它。
<script>
  var name = 'Nicholas';
  let age = 26;
</script>
<script>
 // 假设脚本不确定页面中是否已经声明了同名变量
 // 那它可以假设还没有声明过
var name = 'Matt';
// 这里没问题，因为可以被作为一个提升声明来处理 
// 不需要检查之前是否声明过同名变量
let age = 36;
// 如果 age 之前声明过，这里会报错 
</script>

使用 try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块。
<script>
  let name = 'Nicholas';
  let age = 36;
</script>
<script>
 // 那它可以假设还没有声明过
if (typeof name === 'undefined') {
  let name;
}
// name 被限制在 if {} 块的作用域内 // 因此这个赋值形同全局赋值
name = 'Matt';
try {
    console.log(age); // 如果 age 没有声明过，则会报错
}
catch(error) {
   let age;
 }
// age 被限制在 catch {}块的作用域内 
// 因此这个赋值形同全局赋值
age = 26;
</script>

注意 不能使用let进行条件式声明是件好事，因为条件声明是一种反模式，它让程序变 得更难理解。如果你发现自己在使用这个模式，那一定有更好的替代方式。



4. for 循环中的 let 声明
在 let 出现之前，for 循环定义的迭代变量会渗透到循环体外部:
for (var i = 0; i < 5; ++i) { // 循环逻辑
}
console.log(i); // 5
改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部:
for (let i = 0; i < 5; ++i) { // 循环逻辑
}
console.log(i); // ReferenceError: i 没有定义
在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改:
for (var i = 0; i < 5; ++i) { setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出0、1、2、3、4 // 实际上会输出5、5、5、5、5
之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值:5。在之后执行超时 逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。 每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循 环执行过程中每个迭代变量的值。
for (let i = 0; i < 5; ++i) { setTimeout(() => console.log(i), 0)
}
// 会输出0、1、2、3、4
这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of 循环。

5. const声明
const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且 尝试修改 const 声明的变量会导致运行时错误。
// const 也不允许重复声明
// const 声明的作用域也是块
const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象， 那么修改这个对象内部的属性并不违反 const 的限制。

JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变 量很相似，但是不能用 const 来声明迭代变量(因为迭代变量会自增):