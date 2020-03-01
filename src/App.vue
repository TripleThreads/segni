<template>
    <v-app>
        <div>
            <v-app-bar
                    color="deep-purple accent-4"
                    dense
                    dark
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Page title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon width="30" @click="openInNewTab('https://github.com/TripleThreads')">
                    <v-img src="@/assets/github.svg"></v-img>
                </v-btn>

                <v-btn icon @click="openInNewTab('https://www.linkedin.com/in/segni-habulu-6b40b7175/')">
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
            </v-app-bar>
        </div>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                app
                overflow
                class="elevation-6"
        >
            <v-avatar size="110" class="d-flex d-block mx-auto mt-4 elevation-12">
                <v-img src="https://avatars2.githubusercontent.com/u/39271079?s=400&u=73ab73abe22b7ade12819ac5690ee8ac4747c971&v=4"></v-img>
            </v-avatar>
            <v-list-item-content class="align-content-center my-3">
                <v-list-item-title class="text-center name">Segni Habulu</v-list-item-title>
                <v-list-item-title class="text-center profession mt-2">Software Engineer</v-list-item-title>
            </v-list-item-content>

            <v-divider></v-divider>

            <v-list dense class="mt-2 ml-3" nav shaped>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                            @click="route(item.link)"
                    >

                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-content class="router container--fluid">
            <v-container>
                <router-view class="">
                </router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {router} from "@/route/routes";

    export default {
        data() {
            return {
                item: 0,
                drawer: true,
                items: [
                    {title: 'Education', icon: 'school', link: '/'},
                    {title: 'Experience', icon: 'work', link: '/experience'},
                    {title: 'Skills', icon: 'star', link: '/skills'},
                    {title: 'Hobbies', icon: 'mood', link: '/hobby'},
                    {title: 'Contact ', icon: 'alternate_email', link: 'contact'},
                ],
            }
        },
        methods: {
            route(link) {
                router.push(link);
            },
            openInNewTab(url) {
                let win = window.open(url, '_blank');
                win.focus();
            }
        },
        created() {
            document.title = "Segni Habulu!";
        }
    }
</script>

<style scoped>
    .name {
        font-family: 'Nunito', 'Quicksand', sans-serif;
        font-size: 1.3em;
    }

    .profession {
        font-family: "Quicksand", sans-serif;
        font-size: 0.9em;
    }

    .router {
        background-color: #F6F7FB;
    }

</style>