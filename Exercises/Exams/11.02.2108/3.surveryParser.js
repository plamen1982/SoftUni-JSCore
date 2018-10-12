function surveyParser(input) {
    let svgRegex = /<svg>((.|\n)*?)<\/svg><\/svg>/g;


    if(!svgRegex.test(input)) {
        console.log('No survey found!');
    }
}