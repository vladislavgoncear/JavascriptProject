import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Calculator from '../views/Calculator.vue';
import Comments from '../views/Comments.vue';
import Users from '../views/Users.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/calculator', name: 'Calculator', component: Calculator },
  { path: '/comments', name: 'Comments', component: Comments },
  { path: '/users', name: 'Users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;