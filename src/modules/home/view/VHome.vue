<script setup lang="ts">
import CHomeSlider from "../compinent/CHomeSlider.vue";

const slides = [
    {
        link: "../../../assets/MVC.jpeg",
        descriotion: "MVC",
        active: true
    },
    {
        link: "../../../assets/MVVC.png",
        descriotion: "MVVC",
        active: false
    },
    {
        link: "../../../assets/MVP.png",
        descriotion: "MVP",
        active: false
    }
]

</script>

<template>
    <div id="home">
        <h1>Архитектурные шаблоны в разработке программного обеспечения: MVC, MVVM и MVP</h1>

        <section>
            <h2>
                <span>Немного о...</span>
            </h2>

            <p>При разработке программного обеспечения необходимо не только создавать функциональные приложения, но и управлять их структурой и организацией. В этом помогают архитектурные шаблоны, которые определяют способ организации кода и взаимодействия его компонентов. В этой статье мы рассмотрим три популярных архитектурных шаблона: MVC, MVVM и MVP.</p>
        </section>
        <section id="slider_section">
            <c-home-slider :slides="slides" />
        </section>

        <section>
            <h2>
                <span>MVC (Model-View-Controller)</span>
            </h2>

            <p>MVC - это шаблон, который разделяет приложение на три основных компонента: Model (Модель), View (Представление) и Controller (Контроллер).</p>
        </section>

        <section>
            <h2>
                <span>MVVM (Model-View-ViewModel)</span>
            </h2>

            <p>MVVM - это шаблон, который расширяет идеи MVC, добавляя промежуточное звено между моделью и представлением, называемое ViewModel.</p>
        </section>

        <section>
            <h2>
                <span>MVP (Model-View-Presenter)</span>
            </h2>

            <p>MVP - это шаблон, который также расширяет идеи MVC, но с фокусом на тестировании и разделении ответственности.</p>
        </section>
    </div>
</template>

<style scoped lang="scss">

#slider_section {
    display: flex;

    width: 50%;

    margin: 2rem auto;
}

</style>