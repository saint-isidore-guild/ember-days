<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Ember Days</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/saint-isidore-guild/ember-days"
        title="Fork me on Github"
        target="_blank"
        icon
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <div class="d-flex justify-center mt-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Djp-UuwIIPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="d-flex justify-center mt-5">
        <h2>{{year}}</h2>

          <v-dialog
              v-model="dialog"
              width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" fab x-small dark v-bind="attrs" v-on="on" class="ml-3">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2">
               Change Year
              </v-card-title>

              <v-card-text>
                <v-text-field
                    label="Year"
                    type="number"
                    outlined
                    v-model.number="year"
                    class="mt-2"
                ></v-text-field>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </div>

      <ember-days :year="year"></ember-days>

    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} </span> <a href="https://saint-isidore-guild.github.io/" target="_blank" class="pl-2"> St. Isidore Guild</a>
    </v-footer>
  </v-app>
</template>

<script>
import EmberDays from "./components/EmberDays"

export default {
  name: 'App',

  components: {
    EmberDays
  },

  data: () => ({
    year: new Date().getFullYear(),
    dialog: false
  }),
};
</script>
