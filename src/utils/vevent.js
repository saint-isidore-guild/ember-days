import { nanoid } from 'nanoid';

export default class Vevent {

    constructor(start) {

       this.productId = '-//St. Isidore Guild//Ember Days App//EN';
       this.title = 'Ember Day';
       this.description = "Prayer and Fasting";
       this.start = start;
       this.duration = { days: 1 }
       this.uid = nanoid() + "@ember-days.netlify.app";

    }
}