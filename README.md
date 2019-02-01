## 哇~到底什么是：Web Worker ？

### Web Worker 诞生

JavaScript 是单线程语言，也就意味一次性只能做一件事情。一旦遇到计算密集型或高延迟的任务，在结果出来之前整个UI 层对操作会没有任何反应，这是 UI 线程假死现象。

在这背景下，为了让页面有更好的体验， W3C 在 HTML5 的规范中提出了 Web Worker的概念，允许浏览器通过后台线程来执行复杂的事物或者逻辑。

随着电脑计算能力的增强，尤其是多核 CPU 的出现，由于 JavaScript  是单线程语言的特性，无法充分发挥电脑的计算能力。

而 Web Worker 的出现，给 JavaScript 创建了多线程的机会。主线程可以创建 Worker 线程，将一些任务分配给创建的 Worker 线程运行，此时并不会影响主线程的运行，直到 Worker 线程完成任务，再将结果返回给主线程。

这样好处是，会造成 UI 线程假死现象的任务被 Worker 线程负担了，主线程就会很流畅。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

### Web Worker 族谱

- 专用 Worker （Dedicated Worker）：自身页面后台帮助运算的加强器。

- 共享 Worker（Shared Worker）：多个页面后台帮助匀速和共享数据的加强器。

#### Dedicated Worker V.S Shared Worker

A dedicated worker is only accessible by the script that called it.

A shared worker is accessible by multiple scripts — even if they are being accessed by different windows, iframes, or even workers.

专用 Worker 只能被创建的脚本访问，但是共享 Worker 被来源不同的脚本共同访问。

我自己的理解是：前者理解为自身tab的一个后台处理器，加强部分功能，多数是高计算的功能，后者理解为多个tab的一个后台处理器。

![](https://51nbimg.u51.com/27398bf3ed1041d39e3f6a376bc7b30d.png)

### Web Worker 注意项

1. 同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
2. DOM 限制：Worker 线程所在的上下文作用域，与主线程不一样。所以无法读取主线程所在网页的DOM对象，也无法使用 `document` 、 `window` 、`parent` 这些对象。但是，Worker 线程中有 `navigator` 和 `location` 对象。
3. 脚本限制：Worker 线程不能执行` alert() `和 `confirm() `方法，但可以使用 `XMLHttpRequest `对象发送` AJAX `请求。
4. 文件限制：Worker 线程不能访问本地静态文件，如：`file://my/file/on/my/computer`。

