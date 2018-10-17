function solve([movieTitle, dayOfWeek]) {
    let movieTitleLowerCase = movieTitle.toLowerCase();
    let dayOfWeekLowerCase = dayOfWeek.toLowerCase();
    switch(movieTitleLowerCase) {
        case 'the godfather':
            switch(dayOfWeekLowerCase) {
                case 'monday' : return 12;
                case 'tuesday' : return 10;
                case 'wednesday' : return 15;
                case 'thursday' : return 12.50;
                case 'friday' : return 15;
                case 'saturday' : return 25;
                case 'sunday' : return 30;
                default: return 'error';
            } break;
        case 'schindler\'s list':
            switch(dayOfWeekLowerCase) {
                case 'monday' : return 8.50;
                case 'tuesday' : return 8.50;
                case 'wednesday' : return 8.50;
                case 'thursday' : return 8.50;
                case 'friday' : return 8.50;
                case 'saturday' : return 15;
                case 'sunday' : return 15;
                default: return 'error';
            } break;
        case 'casablanca':
            switch(dayOfWeekLowerCase) {
                case 'monday' : return 8;
                case 'tuesday' : return 8;
                case 'wednesday' : return 8;
                case 'thursday' : return 8;
                case 'friday' : return 8;
                case 'saturday' : return 10;
                case 'sunday' : return 10;
                default: return 'error';
            } break;
        case 'the wizard of oz':
            switch(dayOfWeekLowerCase) {
                case 'monday' : return 10;
                case 'tuesday' : return 10;
                case 'wednesday' : return 10;
                case 'thursday' : return 10;
                case 'friday' : return 10;
                case 'saturday' : return 15;
                case 'sunday' : return 15;
                default: return 'error';
            } break;
        default: return 'error'
    }
}

// console.log(solve(['The Godfather', 'Friday']));
// console.log(solve(['casablanca', 'sunday']));
// console.log(solve(['Schindler\'s LIST', 'monday']));
console.log(solve(['SoftUni', 'Nineday']));