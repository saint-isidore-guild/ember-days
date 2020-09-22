<template>
  <v-container>
    <v-row class="text-center">
      <season-card season-name="Spring" :start-date="spring"></season-card>
      <season-card season-name="Summer" :start-date="summer"></season-card>
      <season-card season-name="Fall" :start-date="fall"></season-card>
      <season-card season-name="Winter" :start-date="winter"></season-card>
    </v-row>
  </v-container>
</template>

<script>
import {calculateFall, calculateWinter, calculateSpring, calculateSummer} from "../utils/dateUtils"
import SeasonCard from "@/components/SeasonCard";

  export default {
    name: 'EmberDays',
    components: {SeasonCard},
    props: {year: Number},
    computed: {
      fall() {
        return calculateFall(this.year)
      },
      winter() {
        return calculateWinter(this.year)
      },
      spring() {
        return calculateSpring(this.year)
      },
      summer() {
        return calculateSummer(this.year)
      }
    }
  }
</script>
