<script setup lang="ts">
import { ref } from 'vue';
import CHomeSliperItem from './CHomeSliperItem.vue';

const props = defineProps(['slides'])

const slides = ref(props.slides);

</script>

<template>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <!-- <div class="carousel-item active">
            <img src="../../../assets/MVC.jpeg" class="d-block w-100" alt="d">
        </div>
        <div class="carousel-item">
            <img src="../../../assets/MVVC.png" class="d-block w-100" alt="F">
        </div>
        <div class="carousel-item">
            <img src="../../../assets/MVP.png" class="d-block w-100" alt="f">
        </div> -->
        <c-home-sliper-item 
            v-for="slide in slides" 
            :slide="slide"
            :key="slide.description"
        />
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
    </button>
</div>
</template>

<style scoped lang="scss">

#slider_section {
    display: flex;

    width: 50%;

    margin: 2rem auto;
}

</style>