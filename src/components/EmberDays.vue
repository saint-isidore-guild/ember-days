<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3">
        <h3>Fall</h3>
        {{fall}}
      </v-col>
      <v-col cols="3">
        <h3>Winter</h3>
        {{winter}}
      </v-col>
      <v-col cols="3">
        <h3>Spring</h3>
        {{spring}}
      </v-col>
      <v-col cols="3">
        <h3>Summer</h3>
        {{summer}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {calculateFall, calculateWinter, calculateSpring, calculateSummer} from "../utils/dateUtils"

  export default {
    name: 'EmberDays',
    props: {year: Number},
    data: () => ({

    }),
    methods: {

    },
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
