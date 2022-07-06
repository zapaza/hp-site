<template>
    <header class="header border-b-2 border-cyan-400 py-2 px-4 flex items-center">
        <router-link class="header__logo mr-8 w-16 text-white" :to="{ name: 'MainPage' }">
            <img class="" src="/images/vector/hogwarts-1.svg" alt="" />
        </router-link>

        <CHeaderNav :menu="menu"/>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CHeaderNav from './CHeaderNav.vue'

export default defineComponent({
    name: 'CHeader',
    components: { CHeaderNav },
    setup() {
        const menu = ref([
            {
                pathName: { name: 'all'},
                title: 'Все персонажи'
            },
            {
                pathName: { name: 'students'},
                title: 'Ученики Хогвартса'
            },
            {
                pathName: { name: 'teachers'},
                title: 'Учителя Хогвартса'
            },
            {
                pathName: { name: 'employees'},
                title: 'Сотрудники Хогвартса'
            },
            {
                pathName: { name: 'faculties'},
                title: 'Факультеты'
            }
        ]);

        return {
            menu,
        };
    }
})
</script>