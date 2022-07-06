<template>
    <nav class="menu">
        <ul class="menu__list flex items-center gap-x-2">
            <li
                class="menu__item"
                v-for="(item, index) in menu"
                :key="`menu_${index}`"
            >
                <router-link
                    class="menu__link font-medium text-sm text-zinc-50 hover:text-zinc-10"
                    :to="item.pathName"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IMenuitem {
    pathName: { name: string};
    title: string;
}

export default defineComponent({
    name: 'CHeaderNav',
    props: {
        menu: {
            type: Array as PropType<IMenuitem[]>,
            default:() => [],
            reqired: true,
        },
    },
});
</script>
