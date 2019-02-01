var obj = {
    ports: [],
    pub(message) {
        this.ports.forEach(port => {
            port.postMessage(message);
        })
    },
    lasterData: '',
};

onconnect = function (messageEvent) {
    // console.log(messageEvent);
    var port = messageEvent.ports[0];
    var {source} = messageEvent;
    // source 和 port 是一样的东西
    obj.ports.push(port);
    console.log(source  === port);

    source.addEventListener('message', (event) => {
        console.log(event);
        // source.postMessage(event.data);
        // obj.pub(event.data);
        swicthByTypeCode(event.data);
    })
    // source.onmessage = function() {
    //     source.postMessage(messageEvent.data);
    // }
    source.start();


    function swicthByTypeCode(data) {
        switch (data.type) {
            case 'write':
                obj.lasterData = data.value;
                obj.pub(data.value);
                break;
            case 'pull': 
                obj.pub(obj.lasterData);
                break;
            default:
                break;
        }
    }
}
