import { nanoid } from 'nanoid'

export function createIcs(year) {


    const ics = require('ics');



    const { error, value } = ics.createEvents(
        [{
            productId: '-//St. Isidore Guild//Ember Days App//EN',
            title: 'Ember Day',
            description: 'Prayer and Fasting',
            start: [year, 4, 8],
            end: [year, 4, 9],
            uid: nanoid() + "@ember-days.netlify.app"
        },
        {
            title: 'Ember Day',
            description: 'Prayer and Fasting',
            start: [year, 4, 10],
            end: [year, 4, 11],
            uid: nanoid() + "@ember-days.netlify.app"
        }])

    if (error) {
        console.log(error)
        return
    }

    console.log(value)

    var filename = `ember-days.ics`
    var blob = new Blob([value], {
        type: 'text/calendar;charset=utf8'
    })
    console.log(blob.type)
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
