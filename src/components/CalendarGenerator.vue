
<template >
  <v-btn @click="addToCalendar()" x-small color="primary" dark>
    Add to Calendar
  </v-btn>
</template>

<script>
import {
  createIcs,
  downloadIcs,
  createIcsEventDates,
} from "../utils/icsFileUtils";
import {
  calculateFall,
  calculateWinter,
  calculateSpring,
  calculateSummer,
} from "../utils/dateUtils";
import { calculateAllDates } from "@/utils/dateUtils";

export default {
  name: "CalendarGenerator",
  props: { year: Number },
  methods: {
    addToCalendar: function () {
      let dates = [
        calculateAllDates(calculateFall(this.year)),
        calculateAllDates(calculateWinter(this.year)),
        calculateAllDates(calculateSpring(this.year)),
        calculateAllDates(calculateSummer(this.year)),
      ];
      let eventDates = createIcsEventDates(dates);

      let value = createIcs(eventDates);
      if (value != null) {
        downloadIcs(value, this.year);
      }
    },
  },
};
</script>

