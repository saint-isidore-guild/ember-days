import Vevent from '../utils/vevent';
import { createEvents } from "ics";

export function createIcsFile(eventDates) {

    const { error, value } = createEvents(eventDates);

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

    dates.forEach((emberDay) => {
        let date = new Date(emberDay);
        let event = new Vevent(startDay(date));
        events.push(event);
    })
    return events;
}

const startDay = (date) => {
    let result = [date.getFullYear()];
    result.push(date.getMonth() + 1);
    result.push(date.getDate());
    return result; // array with start day, year, month, and day. (e.g. [2022, 3, 9])
}


