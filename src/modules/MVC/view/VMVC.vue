<script setup lang="ts">
import CSendReport from '../../../components/CSendReport.vue';
</script>

<template>
    <h1>MVC</h1>

    <section>
        <h2><span>Описание</span></h2>
    
        <p>
            MVC - это шаблон, который разделяет приложение на три основных компонента: Model (Модель), View (Представление) и Controller (Контроллер).

            <ul class="list-group">
                <li class="list-group-item">
                    <strong>Модель (Model): </strong> Отвечает за хранение данных и бизнес-логику. Модель не зависит от представления или контроллера и может существовать независимо от них.
                </li>

                <li class="list-group-item">
                    <strong>Представление (View): </strong> Отвечает за отображение данных пользователю. Представление получает данные из модели и отображает их пользователю. В MVC представление пассивно и не имеет прямого доступа к модели. Оно обновляется контроллером при изменении модели.
                </li>

                <li class="list-group-item">
                    <strong>Контроллер (Controller): </strong> Принимает ввод пользователя и обновляет модель или представление в зависимости от этого ввода. Контроллер связывает модель и представление, обрабатывая взаимодействие между ними. 
                </li>
            </ul>
        </p>
    
    </section>

    <section>
        <h2><span>Преимущества</span></h2>

        <ul class="list-group">
            <li class="list-group-item">
                Четкое разделение ответственности между компонентами.
            </li>

            <li class="list-group-item">
                Упрощает тестирование и сопровождение кода.
            </li>

            <li class="list-group-item">
                Позволяет легко изменять один компонент без влияния на другие.
            </li>
        </ul>
    </section>


    <section>
        <h2><span>Недостатки</span></h2>

        <ul class="list-group">
            <li class="list-group-item">
                В некоторых случаях контроллеры могут становиться слишком разрастающимися и сложными.
            </li>

            <li class="list-group-item">
                В некоторых сценариях может возникать проблема дублирования логики между контроллерами.
            </li>
        </ul>
    </section>

    <section>
        <c-send-report pattern="MVC" />
    </section>
</template>

<style>

</style>