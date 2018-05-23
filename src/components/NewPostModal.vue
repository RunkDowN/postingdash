<template>
    <v-dialog v-model="newPost" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Post Form</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex lg12 sm1>
                            <v-text-field label="Description" required multi-line flat
                                          color="light-blue lighten-1"></v-text-field>
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
                                            flat color="light-blue lighten-1"
                                            readonly
                                    ></v-text-field>
                                    <v-time-picker v-model="time" @change="$refs.menu.save(time)" format="24hr"
                                                   flat color="light-blue lighten-1"></v-time-picker>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey lighten-2" flat @click.native="close" @click="time = null">Close</v-btn>
                <v-btn color="light-blue lighten-1" flat @click.native="close">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>
</style>

<script>
    export default {
        data: function () {
            return {
                timePicker: false,
                time: null
            }
        },
        computed: {
            newPost: function () {
                return this.propNewPost;
            }
        },
        props: {
            propNewPost: Boolean
        },
        methods: {
            close() {
                this.$emit('close');
            },
        },
        name: 'NewPostModal',
        components: {}
    }
</script>
