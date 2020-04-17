const kneecap = require('kneecap');



let handleRequest = function(request) {
    return Promise.all([request.getRequestHeaders(), request.getRawBody()])
        .then(results => {
            const [requestHeaders, requestBody] = results;
            console.log(requestHeaders);
            console.log(requestBody);
            return;
        });
}

const kc = kneecap();
kc.listen(8008).then(() => {
    console.log('listening');
});

kc.requestHandler('/request', {
    previewBytes: 128,
    transfer: {
        complete: ['*'],
        ignore: [],
        preview: [],
    }
}, handleRequest);
