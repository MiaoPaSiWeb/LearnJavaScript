因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。typeof 操作符就是为此而生的。对一个值使用 typeof 操作符会返回下列字符串之一:
 "undefined"表示值未定义;
 "boolean"表示值为布尔值;
 "string"表示值为字符串;
 "number"表示值为数值;
 "object"表示值为对象(而不是函数)或 null;  "function"表示值为函数;
 "symbol"表示值为符号。
下面是使用 typeof 操作符的例子:
let message = "some string"; 
console.log(typeof message); 
console.log(typeof(message)); 
console.log(typeof 95);
// "string"
// "string"
// "number"
在这个例子中，我们把一个变量(message)和一个数值字面量传给了 typeof 操作符。注意，因 为 typeof 是一个操作符而不是函数，所以不需要参数(但可以使用参数)。
注意 typeof 在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用 typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

注意 严格来讲，函数在ECMAScript中被认为是对象，并不代表一种数据类型。可是， 函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其他对象。