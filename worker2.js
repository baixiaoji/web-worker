var port2 = null;

onmessage = function(event) {
    if (event.data === 'init') {
        port2 = event.ports[0];
    }
    port2.addEventListener('message', function(e) {
        postMessage(`我同样经过了 worker2 的部分，${e.data}`);
    });
    port2.start();
}