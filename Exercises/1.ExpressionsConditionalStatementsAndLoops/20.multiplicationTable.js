function solve(n) {

    let tableTag = '<table border="1">';
    let tableClosingTag = '</table>';
    let trTag = '<tr>';
    let trClosingTag ='</tr>'
    let thTag = '<th>';
    let thClosingTag ='</th>';
    let tdTag = '<td>';
    let tdClosingTag ='</td>';
    let tableHeader = '';
    let tableBody = '';

    for(let i = 0; i <= n; i++) {
        if(i === 0) {
            tableHeader += trTag +  thTag + 'x' + thClosingTag; 
        } else {
            tableHeader += thTag + i + thClosingTag;
        }
    }
    tableHeader += trClosingTag;
    for(let i = 1; i <= n; i++) {
        tableBody += trTag + thTag + i + thClosingTag;
        for(let j = 1; j <= n; j++) {
            tableBody += tdTag + i * j + tdClosingTag;
        }
        tableBody += trClosingTag;        
    }
    console.log(tableTag + tableHeader + tableBody + tableClosingTag);
}

solve(5);