<script setup lang="ts">
import {useStore} from "vuex";
import { ref, onMounted  } from 'vue';

const props = defineProps(["pattern"]);
const pattern = ref(props.pattern)

const store = useStore();

const report = ref("");

onMounted(() => {
    store.dispatch('toast/doToast', {
        text: "Вы можете отправить свой отзыв о паттерне!",
        type: "INFORMATION"
    });
})


// впишите своё url, но у нас только клиент без сервера
// поэтому всё время будет ошибка...
const send = async () => {
    if (!report.value) {
        return;
    }

    fetch(`our.site.com/${pattern}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            report: report.value
        })
    })
        .then(response => response.json())
        .then(response => {
            console.log("Ответ сервера: ", response)
            store.dispatch('toast/doToast', {
                text: "Всё хорошо. Отзыв о паттерне отправлен.",
                type: "SUCCESS"
            });
        })
        .catch(error => {
            console.error("Произошла ошибка! ", error)
            store.dispatch('toast/doToast', {
                text: "Что-то пошло не так..",
                type: "ERROR"
            });
        })
}

</script>

<!-- Здесь кнопка не отправляет форму, а форма отправляется функцией с fetch  -->

<template>
    <form >
        <h2><span>Напишите что вы думаете на счёт этого паттерна:</span></h2>

        <textarea 
            ref="myTextArea" 
            v-model="report"
        >

        </textarea>

        <button type="button" @click="send">Отправить</button>
    </form>
</template>

<style scoped>

textarea {
    resize: none;
    width: 100%;

    height: 10rem;

    outline: none;
}

button {
    margin-top: 1rem;

    border: 1px solid black;

    font-size: 1.25rem;

    background-color: rgb(238, 216, 191);
}

</style>