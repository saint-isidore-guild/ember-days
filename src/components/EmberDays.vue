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
import {mapGetters} from "vuex";

  export default {
    name: 'EmberDays',
    components: {SeasonCard},
    props: {year: Number},
    methods: {
      setStartDates() {
          this.$store.commit("setFall", calculateFall(this.year))
          this.$store.commit("setWinter", calculateWinter(this.year))
          this.$store.commit("setSpring", calculateSpring(this.year))
          this.$store.commit("setSummer", calculateSummer(this.year))
      }
    },
    computed: {
      ...mapGetters(['fall', 'winter', 'spring', 'summer']),
    },
    watch: {
        year() {
            this.setStartDates()
        }
    },
    mounted() {
        this.setStartDates()
    }
  }
</script>
