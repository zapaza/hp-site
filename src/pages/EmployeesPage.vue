<template>
    <main class="main">
        <CProfileCard
            v-for="(item, index) in staff"
            :key="index"
            :profile-info="item" />
    </main>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { IProfileInfo } from '../request/getHogwardsData';
import CProfileCard from '../components/CProfileCard.vue';

export default defineComponent({
    name: "EmployeesPage", 
    components: { CProfileCard },
    setup() {
        const store = useStore();
        const staff = computed(async() => await store.dispatch('getStaff'));

        return {
            staff,
        };
    },
})
</script>