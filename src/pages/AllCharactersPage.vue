<template>
    <main class="main container mx-auto">
      <CProfileCard/>
    </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { GetHogwardsData, IProfileInfo } from '../request/getHogwardsData'
import CProfileCard from '../components/CProfileCard.vue'

export default defineComponent({
    name: "AllCharactersPage",
    setup() {

    },
    components: { CProfileCard }
})
</script>