<template>
  <v-col cols="3">
    <h2>{{ seasonName }}</h2>
    <h3>{{formattedDates}}</h3>
  </v-col>
</template>

<script>
import {calculateAllDates} from "@/utils/dateUtils";

export default {
  name: "SeasonCard",
  props: {startDate: Date, seasonName: String},
  computed: {
    formattedDates() {
      let allDates = calculateAllDates(this.startDate)
      const options = {month: 'long', day: 'numeric'}
      let dateStr = `${this.startDate.toLocaleDateString("en-US", options)}, `
      dateStr += `${this.startDate.getMonth() === allDates[1].getMonth() ? allDates[1].getDate() : allDates[1].toLocaleDateString("en-US", options)}, `
      dateStr += `${allDates[1].getMonth() === allDates[2].getMonth() ? allDates[2].getDate() : allDates[2].toLocaleDateString("en-US", options)}`
      return dateStr
    }
  }
}
</script>

<style scoped>

</style>