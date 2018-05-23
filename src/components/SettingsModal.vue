<template>
    <v-dialog v-model="settings" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Settings Form</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex lg12 sm1>
                            <v-text-field
                                    name="bot_token"
                                    label="Bot token"
                                    color="light-blue lighten-1"
                            ></v-text-field>
                            <v-text-field
                                    name="channel_link"
                                    label="Channel link"
                                    color="light-blue lighten-1"
                            ></v-text-field>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey lighten-2" flat @click.native="close">Close</v-btn>
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
            }
        },
        computed: {
            settings: function () {
                return this.propSettings;
            }
        },
        props: {
            propSettings: Boolean
        },
        methods: {
            close() {
                this.$emit('close');
            },
        },
        name: 'SettingsModal',
        components: {}
    }
</script>
