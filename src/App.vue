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
    :clipped-left="clipped"
  >
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-content>

<template>

<span class="display-1">14 мая</span> 
<v-dialog v-model="dialog" persistent max-width="500px">
<v-btn slot="activator" flat color="teal accent-4">Add New Post</v-btn>
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
      v-model="menu2"
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
      <v-time-picker v-model="e7" @change="$refs.menu.save(time)" format="24hr" flat color="teal accent-4"></v-time-picker>
    </v-menu>

  </v-flex>
<v-spacer></v-spacer>
</v-layout>

          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal accent-4" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="teal accent-4" flat @click.native="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


<v-layout row>
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
</template>


  </v-content>
  <v-footer :fixed="fixed" app>
    <span>&copy; 2017</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
data () {
  return {
    clipped: false,
    drawer: true,
    fixed: false,
    items: [{
      icon: 'bubble_chart',
      title: 'Inspire'
    }],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Vuetify.js'
  }
},
name: 'App',
components: {
}
}
</script>

<script>
export default {
  data: () => ({
    show: false,
    dialog: false
  })
}
</script>
