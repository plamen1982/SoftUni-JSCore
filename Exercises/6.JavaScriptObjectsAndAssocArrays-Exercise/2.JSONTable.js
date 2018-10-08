function JSONTable(inputArray) {
    let tableTagStart = '<table>\n';
    let tableTagEnd = '</table>\n';
    let html = tableTagStart;

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    for(let row of inputArray) {
        let obj = JSON.parse(row);
        html +=`	<tr>\n`
        html +=`		<td>${htmlEscape(obj.name)}</td>\n`
        html +=`		<td>${htmlEscape(obj.position)}</td>\n`
        html +=`		<td>${obj.salary}</td>\n`
        html +=`	<tr>\n`

    }
    html+= tableTagEnd;
    return html;
}

console.log(JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
))
