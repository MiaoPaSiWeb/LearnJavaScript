/*
定时器用于在设定的时间执行一段代码，或者在给定的时间间隔内重复该代码。
这通过使用函数setTimeout，setInterval和clearInterval来完成。

setTimeout（function，delay）函数用于启动在所述延迟之后调用特定功能的定时器。

setInterval（function，delay）函数用于在提到的延迟中重复执行给定的功能，只有在取消时才停止。

clearInterval（id）函数指示定时器停止。

定时器在一个线程内运行，因此事件可能需要排队等待执行。

*/