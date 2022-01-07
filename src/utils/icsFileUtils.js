import Vevent from '../utils/vevent';

export function createIcsFile(eventDates) {

    const ics = require('ics');
    const { error, value } = ics.createEvents(eventDates);

    if (error) {
        console.log(error);
        return;
    } else {
        return value; //events in ics file.
    }
}
export function downloadIcsFile(value, year) {


    var filename = "ember-days-" + year + ".ics"; // file will download with this name
    var blob = new Blob([value], {
        type: 'text/calendar;charset=utf8'
    });

    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);

}

export function createIcsEventDates(dates) {
    const events = []; //Array of ember days with ics attributes to be fed into ics file. 

    for (let i = 0; i < dates.length; i++) {
        for (let j = 0; j < dates[i].length; j++) {
            let date = new Date(dates[i][j]);
            let event = new Vevent(
                startDay(date),
                endDay(date) // must be day after
            );
            events.push(event);
        }
    }
    return events;
}

const startDay = (date) => {
    let result = [date.getFullYear()];
    result.push(date.getMonth() + 1);
    result.push(date.getDate());
    return result; // array with start day, year, month, and day. (e.g. [2022, 3, 9])
}

const endDay = (date) => {
    let endDate = new Date(date);
    let result = [date.getFullYear()];

    endDate.setDate(date.getDate() + 1);

    if ((endDate.getDate()) < date.getDate()) { //check if it was last day of month.
        endDate.setMonth(date.getMonth() + 2);
        result.push(endDate.getMonth());
    } else {
        result.push(date.getMonth() + 1);
    }

    result.push(endDate.getDate());

    return result; // array with day after start day, year, month, and day.
}

