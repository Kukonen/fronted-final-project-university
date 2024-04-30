<script setup lang="ts">

import { computed } from "vue";
import CTransition from "./CTransition.vue";
import { useRoute } from 'vue-router'

const route = useRoute();

const path = computed(() =>route.path)


</script>

<template>
    <router-view v-slot="{ Component, route }" :key="path">
        <c-transition>
            <component :is="Component" :key="route.path" />
        </c-transition>
    </router-view>
</template>

<style scoped>

</style>