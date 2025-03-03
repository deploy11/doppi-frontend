import { createRouter, createWebHistory } from 'vue-router'; // Vue 3 uchun
import HomePage from '../views/Home.vue';
import NewsPage from '@/views/News.vue';
import ContactPage from '@/views/Contact.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/news', component: NewsPage },
    { path: '/contact', component: ContactPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
