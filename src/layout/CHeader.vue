<script setup lang="ts">

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const path = computed(() =>route.path)

</script>

<template>
    <header class="container">
        <div class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" :class="{'nav-link': true, 'active': path === '/'}">Паттерны</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/MVC" :class="{'nav-link': true, 'active': path === '/MVC'}">MVC</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/MVVM" :class="{'nav-link': true, 'active': path === '/MVVM'}">MVVM</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/MVP" :class="{'nav-link': true, 'active': path === '/MVP'}">MVP</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style>

</style>