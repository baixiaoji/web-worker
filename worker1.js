
var port1 = null; 
onmessage = function(messageEvent) {
    if (messageEvent.data === 'init') {
        port1 = messageEvent.ports[0];
    }
    port1.postMessage(`来自 worker1 中的数据，${messageEvent.data}`);
}