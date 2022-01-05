
<template >
  <v-btn @click="addToCalendar()" x-small color="primary" dark>
    Add to Calendar
  </v-btn>
</template>

<script>
import { createIcs, downloadIcs } from "../utils/icsFileUtils";
export default {
  name: "CalendarGenerator",
  props: { year: Number },
  methods: {
    addToCalendar: function () {
     let value = createIcs(this.year);
      if (value != null) {
        downloadIcs(value);
      }
    },
  },
};
</script>

