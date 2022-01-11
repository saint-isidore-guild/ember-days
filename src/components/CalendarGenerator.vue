
<template >
  <v-btn @click="addToCalendar()" x-small color="primary" dark>
    Add to Calendar
  </v-btn>
</template>

<script>
import {createIcsFile, downloadIcsFile, createIcsEventDates} from "../utils/icsFileUtils";
import { calculateAllDates } from "@/utils/dateUtils";

export default {
  name: "CalendarGenerator",
  props: { year: Number },
  methods: {
    addToCalendar: function () {
      let dates = [
        ...calculateAllDates(this.$store.getters.fall),
        ...calculateAllDates(this.$store.getters.winter),
        ...calculateAllDates(this.$store.getters.spring),
        ...calculateAllDates(this.$store.getters.summer),
      ];
      let eventDates = createIcsEventDates(dates);
      let value = createIcsFile(eventDates);

      if (value != null) {
        downloadIcsFile(value, this.year);
      }
    }
  }
};
</script>

