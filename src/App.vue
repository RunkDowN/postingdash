<template>
  <v-app>
    <v-list>
      <v-list-tile
      value="true"
      v-for="(item, i) in items"
      :key="i"
      >
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>

      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <v-toolbar
  app
  >
  <v-toolbar-title v-text="title"></v-toolbar-title>

  <v-dialog v-model="dialogInput" persistent max-width="500px">
    <v-btn slot= "activator" color="teal accent-4" dark>
      <v-icon >backup</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Settings Form</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex lg12 sm1>
              <v-text-field
              id="testing"
              name="input-1"
              label="Bot token"
              color="teal accent-4"
              ></v-text-field>

              <v-text-field
              id="testing"
              name="input-1"
              label="Channel link"
              color="teal accent-4"
              ></v-text-field>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal accent-4" flat @click.native="dialogInput = false">Close</v-btn>
        <v-btn color="teal accent-4" flat @click.native="dialogInput = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-spacer></v-spacer>
</v-toolbar>

<v-content>
    <span class="display-1">14 май</span> 
    <v-btn @click="newPost = true" flat color="teal accent-4">Add New Post</v-btn>

    <v-container fluid grid-list-lg>
    <v-layout row wrap>
    <v-flex xs3>
      <v-card>
        <v-card-media
        src="https://pbs.twimg.com/profile_images/980681269859241984/-4cD6ouV_400x400.jpg"
        height="200px"
        >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">12:12</div>
          <span class="grey--text">Small description</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>Delete</v-btn>
        <v-btn flat color="teal accent-4">Edit</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>

  </v-flex>
</v-layout>
    </v-container>

<v-dialog v-model="newPost" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Post Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex lg12 sm1>
                <v-text-field label="Description" required multi-line flat color="teal accent-4"></v-text-field>
              </v-flex>
              <v-layout row wrap>
                <v-flex lg12 sm1>
                  <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="timePicker"
                  :nudge-right="40"
                  :return-value.sync="time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                  >
                  <v-text-field
                  slot="activator"
                  v-model="time"
                  label="Picker in menu"
                  prepend-icon="access_time"
                  flat color="teal accent-4"
                  readonly
                  ></v-text-field>
                  <v-time-picker v-model="time" @change="$refs.menu.save(time)" format="24hr" flat color="teal accent-4"></v-time-picker>
                </v-menu>

              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>

          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal accent-4" flat @click.native="newPost = false">Close</v-btn>
        <v-btn color="teal accent-4" flat @click.native="newPost = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-content>
<v-footer  app>
  <span>&copy; 2017</span>
</v-footer>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        title: 'Vuetify.js',
      show: false,
      dialog: false,
      dialogInput: false,
      newPost: false,
      timePicker: false,
      time: null,
      }
    },
    name: 'App',
    components: {
    }
  }
</script>
