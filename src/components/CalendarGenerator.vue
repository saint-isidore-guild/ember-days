
<template >
  <v-btn @click="addToCalendar()" x-small color="primary" dark>
    Add to Calendar
  </v-btn>
</template>

<script>
import { createIcs } from "../utils/icsFileUtils";
export default {
  name: "CalendarGenerator",
  props: { year: Number },
  methods: {
    addToCalendar: function () {
      createIcs(this.year);
    },
  },
};
</script>

