//整个脚本启用严格模式
// "use strict";

//单独指定一个函数在严格模式下执行
function doSomething() {
    "use strict"
    console.log(this);
}

doSomething();


