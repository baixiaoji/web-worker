
// 斐波那契数列
function fabonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fabonacci(n - 1) + fabonacci(n - 2);
}

onmessage = function(messageEvent) {
    var str = messageEvent.data;
    str = typeof str === 'number' ? String(str) : str;
    switch (str) {
        case 'start':
            postMessage({msg: '开始造梦咯~', code: 'start'});
            break;
        case 'stop':
            postMessage({msg: '该醒咯~', code: 'stop'});
            break;
        case (str.match(/[0-9]/) || {}).input:
            var result = fabonacci(Number(str));
            postMessage({msg: str+'的斐波那契数列是：' + result, code: 'fobo'});
            break;
        default:
            postMessage({msg: 'hi, bro~ 慢慢想一下~', code: ''});
            break;
    }
}