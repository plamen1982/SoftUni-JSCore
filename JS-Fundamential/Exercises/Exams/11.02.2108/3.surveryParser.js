function surveyParser(input) {
    let svgRegex = /<svg>((.|\n)*?)<\/svg>/g;

    if(!svgRegex.test(input)) {
        console.log('No survey found!');
        return;
    }
//<svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg>
    let catsRegex = /<cat>((.|\n)*?)<\/cat><cat>((.|\n)*?)<\/cat>/g;
//<cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat>   
let textRegex = /<text>((.|\n)*?)((.|\n)*?)\[((.|\n)*?)]((.|\n)*?)<\/text>/g;
//<g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g>
let valueRatingRegex = /<g><val>([0-9 | 10])<\/val>([0-9]+)<\/g>/g;

let svgString = input.match(svgRegex)[0];
// console.log(svgString);
let catsString = svgString.match(catsRegex)[0];
// console.log(catsString);
let foodLabel = textRegex.exec(catsString)[5];
let arrayValue;
let rating = 0;
let totalVotes = 0;
let averageVotes = 0;
if(!valueRatingRegex.test(catsString)) {
    console.log('Invalid format');
    return;
};
while((arrayValue = valueRatingRegex.exec(catsString)) !==null) {
    let ratingValue = +arrayValue[1];
    let ratingVotes = +arrayValue[2];
    totalVotes += +arrayValue[2];
    rating += ratingValue * ratingVotes;
}

averageVotes = +(rating / totalVotes).toFixed(2);

console.log(`${foodLabel}: ${averageVotes}`)
}

surveyParser(`<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>`)