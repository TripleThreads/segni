<template>
    <v-container>
        <v-row class="ml-3 container">

            <v-col cols="4" v-for="skill in skill_set" :key="skill.title">
                <v-card class="mx-auto elevation-20">
                    <v-row justify="space-between">
                        <v-col cols="7">
                            <v-card-title primary-title>
                                    <h4 class="headline">{{  skill.title}}</h4>
                            </v-card-title>
                        </v-col>
                        <v-img
                                class="shrink ma-2"
                                contain
                                height="50px"
                                :src="getImgUrl(skill.icon)"
                                style="flex-basis: 100px"
                        ></v-img>
                    </v-row>
                    <div>
                        <v-rating
                                class="text-center"
                                v-model="skill.rating"
                                color="orange accent-4"
                                readonly="true"
                                half-increments
                                size="18"
                        ></v-rating>
                    </div>
                    <v-card-text>
                        <p>Experience: {{ skill.year }} years</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            rating: 4.3,
            skill_set : [
                {title: 'VueJS', rating: 4, year: '1+', icon : 'vue-js.svg' },
                {title: 'Laravel', rating: 3.5, year: '1+', icon : 'laravel.svg'  },
                {title: 'Android', rating: 3.0, year: '2+', icon : 'android.svg'  },

            ]
        }),
        methods : {
            getImgUrl(pic) {
                return require('../assets/skills/' + pic)
            }
        }
    }
</script>

<style scoped>
    .info-card {
        background-color: white;
        font-family: "Source Sans Pro", sans-serif;
    }

    .info-card p {
        font-size: 0.9em;
    }

    .container {
        /*background-image: url("../assets/undraw_percentages_0rur.svg");*/
    }

    .v-card {
        background-color: white !important;
        opacity: 0.95;
        border-color: transparent !important;
    }
</style>
<!--


-->