<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(["slide"])

const slide = ref(JSON.parse(JSON.stringify(props.slide)))

// почему-то он не хочет нормально парсить URL, 
// поэтому делается такой хак
// * в vite надо подключать require и мне лень,
// так проще сделать
const image = (path: string) => {
    return new URL(path, import.meta.url)
}

</script>

<template>
    <div :class="{'carousel-item': true, 'active': slide.active}">
        <img :src="image(slide.link)" class="d-block w-100" :alt="slide.desctiption" />
    </div>
</template>

<style scoped lang="scss">

</style>