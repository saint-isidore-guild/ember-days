import { nanoid } from 'nanoid';
import Vevent from '../utils/vevent';

export function createIcs(eventDates) {

    const ics = require('ics');

    const { error, value } = ics.createEvents(eventDates)

    if (error) {
        console.log(error)
        return
    } else {
        return value
    }
}
export function downloadIcs(value, year) {


    var filename = "ember-days-" + year + ".ics";
    var blob = new Blob([value], {
        type: 'text/calendar;charset=utf8'
    })
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
    } else {
        var elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = filename
        document.body.appendChild(elem)
        elem.click()
        document.body.removeChild(elem)
    }
}

export function createIcsEventDates(dates) {
    const events = [];


    for (let i = 0; i < dates.length; i++) {

        for (let j = 0; j < dates[i].length; j++) {

            let date = new Date(dates[i][j]);
            let event = new Vevent('-//St. Isidore Guild//Ember Days App//EN',
                'Ember Day',
                'Prayer and Fasting',
                startDay(date),
                endDay(date),
                nanoid() + "@ember-days.netlify.app");

            events.push(event);

        }

    }
    console.log(events)
    return events;

}

const startDay = (date) => {
    let result = [date.getFullYear()];
    result.push(date.getMonth() + 1);
    result.push(date.getDate());
    return result;
}

const endDay = (date) => {
    let endDate = new Date(date);
    let result = [date.getFullYear()];

    endDate.setDate(date.getDate() + 1);

    if ((endDate.getDate()) < date.getDate()) {
        endDate.setMonth(date.getMonth() + 2);
        result.push(endDate.getMonth());
    } else {
        result.push(date.getMonth() + 1);
    }

    result.push(endDate.getDate());

    return result;
}

