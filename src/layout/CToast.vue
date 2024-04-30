<script setup lang="ts">

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const isVisible = computed(
    () =>
        store.getters["toast/getVisible"] &&
        store.getters["toast/getText"] !== ''
)

const text = computed(
    () =>
        store.getters["toast/getText"]
)

const type = computed(
    () =>
        store.getters["toast/getType"]
)

const close = () => {
    store.commit('toast/setVisible', false);
}

</script>

<template>
    <Transition>
        <div
            v-show="isVisible"
            @click="close"
            class="own_toast"
            :class="{
            'own_toast-success': type === 'SUCCESS',
            'own_toast-error': type === 'ERROR',
            'own_toast-information': type === 'INFORMATION'
            }"
        >
        {{text}}
        </div>
    </Transition>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.own_toast {
    padding: 1rem;

    cursor: pointer;

    border-radius: 5px;

    position: fixed;

    right: 1rem;
    bottom: 1rem;
}

.own_toast-success {
    background-color: var(--light-toast-success-color);
}

.own_toast-error {
    background-color: var(--light-toast-error-color);
}

.own_toast-information {
    background-color: var(--light-toast-information-color);
}

</style>