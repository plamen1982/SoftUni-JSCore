function validateRequest(obj) {
    let critiriaObj = {
        method: ['GET', 'POST', 'DELETE', 'CONNECT'],
        uri: /^[a-zA-Z0-9,.!?]+$/,
        version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'],
        message: /^[a-zA-Z0-9,.!?]*$/
    }

    try {
        if(!critiriaObj.method.includes(obj.method)) {
            throw new Error('Invalid request header: Invalid Method')
        }
        if(!critiriaObj.uri.test(obj.uri)) {
            throw new Error('Invalid request header: Invalid Uri')
        }
        if(!critiriaObj.version.includes(obj.version)) {
            throw new Error('Invalid request header: Invalid Version')
        }
        if(!critiriaObj.message.test(obj.message)) {
            throw new Error('Invalid request header: Invalid Message')
        }
    }

    catch(error) {
        return error;
    }

    return obj;
}


console.log(validateRequest({
    method: 'POST',
    uri: '%appdata%',
    message: 'rm -rf /*'
}));
  