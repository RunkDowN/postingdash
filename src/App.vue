<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-btn @click="settings = true" color="teal accent-4" dark>
                <v-icon>backup</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <v-container fluid grid-list-lg v-for="(day, index) in days" :key="index">
                <v-layout row wrap>
                    <v-flex>
                        <span class="display-1">{{ day.day }} {{ day.month }}</span>
                        <v-btn @click="newPost = true" flat color="teal accent-4">Add New Post</v-btn>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs3 v-for="(post, index) in day.posts" :key="index">
                        <v-card>
                            <v-card-media
                                    :src= "post.media"
                                    height="200px"
                            >
                            </v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{ post.time }}</div>
                                    <span class="grey--text">{{ post.smallDescription }}</span>
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
                                    {{ post.fullDescription }}
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

            <modal-new-post v-bind:prop-new-post="newPost" @close="newPost = false"></modal-new-post>
            <modal-settings v-bind:prop-settings="settings" @close="settings = false"></modal-settings>
        </v-content>
    </v-app>
</template>

<script>
    import NewPostModal from '@/components/NewPostModal.vue';
    import SettingsModal from '@/components/SettingsModal.vue';

    export default {
        data: function () {
            return {
                title: 'Vuetify.js',
                show: false,
                settings: false,
                newPost: false
            }
        },
        computed: {
            days: function () {
                var days = [];
                var locale = "en-us";
                var allPosts = [
                    {
                        day: 23,
                        month: 'May',
                        fullDate: '23-05-2018',
                        time: '16:45',
                        smallDescription: 'Small description',
                        fullDescription: 'Full description description description description description description description description description description description description',
                        media: 'https://pbs.twimg.com/profile_images/980681269859241984/-4cD6ouV_400x400.jpg'
                    }
                ];

                for (var i = 0; i <= 13; i++) {

                    var date = new Date();
                    date.setDate(date.getDate()+i);

                    var dd = date.getDate();
                    var mm = date.getMonth()+1;
                    var month = date.toLocaleString(locale, {month: "long"});
                    var yyyy = date.getFullYear();

                    if(dd < 10) {
                        dd = '0' + dd;
                    }
                    if(mm < 10) {
                        mm = '0' + mm;
                    }

                    date = dd + '-' + mm + '-' + yyyy;

                    var posts = [];

                    allPosts.forEach(function (element) {
                        if (date === element.fullDate) {
                            posts.push(element);
                        }
                    });

                    days.push({
                        day: dd,
                        month: month,
                        fullDate: date,
                        posts: posts
                    });
                }
                return days;
            }
        },
        name: 'App',
        components: {
            'modal-new-post': NewPostModal,
            'modal-settings': SettingsModal
        }
    }
</script>
