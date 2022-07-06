import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/all',
        name: 'all',
        component:() => import('../pages/AllCharactersPage.vue'),
    },
    {
        path: '/employees',
        name: 'employees',
        component:() => import('../pages/EmployeesPage.vue'),
    },
    {
        path: '/faculties',
        name: 'faculties',
        component:() => import('../pages/FacultiesPage.vue'),
    },
    {
        path: '/students',
        name: 'students',
        component:() => import('../pages/StudentPage.vue'),
    },
    {
        path: '/teachers',
        name: 'teachers',
        component:() => import('../pages/TeachersPage.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router