function extractLinks(arrayOfStrings) {
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for(let element of arrayOfStrings) {
        let match = null;
        while(match = regex.exec(element)) {
            console.log(match[0]);
        }
    }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']);
