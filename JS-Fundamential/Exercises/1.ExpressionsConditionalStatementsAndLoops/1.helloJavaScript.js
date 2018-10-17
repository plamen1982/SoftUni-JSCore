function helloJavaScript(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    let name = params;

    console.log(`Hello, ${name}, I am JavaScript!`)
}


helloJavaScript(['Pesho']);
helloJavaScript(['Bill Gates']);