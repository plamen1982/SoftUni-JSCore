function templateFormat(quiz) {

    function printQuestionAnswer(question, answer) {
        return `
    <question>  
        ${question} 
    </question> 
    <answer>  
        ${answer} 
    </answer>`   
    }

    function printHeader() {
        return `<?xml version="1.0" encoding="UTF-8"?>
<quiz>`
    }

    function printFooter() {
        return `
</quiz>`
    }
    let header = printHeader();
    let body = '';
    let footer = printFooter();

    for(let i = 0; i < quiz.length; i += 2) {
        body += printQuestionAnswer(quiz[i], quiz[i + 1]);
    }

    return header + body + footer;
}

console.log(templateFormat(["Who was the forty-second president of the U.S.A.?","William Jefferson Clinton"]));