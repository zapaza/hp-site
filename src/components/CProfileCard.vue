<template>
    <div class="profile-card">
        <div class="profile-card__img">
             <img :src="profileInfo.image" :alt="profileInfo.name"/>
        </div>
        <div class="profile-card__name">{{ profileInfo.name }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IProfileInfo } from '../request/getHogwardsData'

export default defineComponent({
    name: 'CProfileCard',
    props: {
        profileInfo: {
            type: Object as PropType<IProfileInfo>,
            default: () => {},
        },
    },
})
</script>
