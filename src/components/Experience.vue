<template>
    <v-container>
        <v-row class="ml-3 mt-10">
            <v-col cols="5">
                <v-card class="info-card py-3">
                    <v-card-title>
                        Software Engineering
                    </v-card-title>
                    <v-card-subtitle class="mx-auto">
                        Undergraduate  | 2016 - now | CGPA <b>3.72</b>
                    </v-card-subtitle>
                    <p class="ml-3">
                        Expected graduation date <b>August, 2021</b> <br>
                        I am 4th year Software Engineering Student at Addis Ababa Institute of Technology.
                    </p>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="info-card py-3">
                    <v-card-title>
                        Africa to Silicon Valley
                    </v-card-title>
                    <v-card-subtitle class="mx-auto">
                        Competitive Programming bootcamp for three months  | December, 2019
                    </v-card-subtitle>
                    <p class="mx-4 text-justify">
                        We had a team of 25 smart students who aimed to get summer internship in silicon valley. We had lecture,
                        problem solving, and communication skill improvement sessions. For more information click
                        <a class="v-card--link text" href="http://a2sv.org"> A2SV </a>.
                    </p>
                </v-card>
            </v-col>
            <v-col cols="5" class="mx">
                <v-card class="info-card py-3">
                    <v-card-title>
                        Blockchain Developer - Mastery Award
                    </v-card-title>
                    <v-card-subtitle class="mx-auto">
                        Short term training by IBM | December, 2019
                    </v-card-subtitle>
                    <p class="mx-4 text-justify">
                        Practical based learning. Learnt blockchain basics and its application. Finally passing the exam
                        I granted
                        <a href="https://www.youracclaim.com/badges/ac67a7ab-4c57-4e6d-b1cd-4daff405abdc/linked_in_profile">
                            certificate.</a>
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Education"
    }
</script>

<style scoped>
    .info-card {
        background-color: white;
        font-family: "Source Sans Pro",sans-serif;
    }
    .info-card p {
        font-size: 0.9em;
    }
    .container {
        background-image: url("../assets/undraw_programming_2svr.svg");
    }
    .v-card {
        background-color: white!important;
        opacity: 0.95;
        border-color: transparent!important;
    }
</style>