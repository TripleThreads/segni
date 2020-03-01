import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Education = () => import("@/components/Education.vue");
const Experience = () => import("@/components/Experience.vue");
const Skills = () => import("@/components/Skills.vue");

let routes = [
    {path: '/experience', component: Experience},
    {path: '/skills', component: Skills},
    {path: '/', component: Education},
];

export const router = new VueRouter({
    routes
});