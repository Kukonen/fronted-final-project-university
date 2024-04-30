<script setup lang="ts">
import CSendReport from '../../../components/CSendReport.vue';

</script>

<template>
    <h1>MVVM</h1>

    <section>
        <h2><span>Описание</span></h2>
    
        <p>
            MVVM - это шаблон, который расширяет идеи MVC, добавляя промежуточное звено между моделью и представлением, называемое ViewModel.

            <ul class="list-group">
                <li class="list-group-item">
                    <strong>Модель (Model): </strong> Отвечает за хранение данных и бизнес-логику. Модель не зависит от представления или контроллера и может существовать независимо от них.
                </li>

                <li class="list-group-item">
                    <strong>Представление (View): </strong> Отвечает за отображение данных пользователю. Представление получает данные из модели и отображает их пользователю. В MVC представление пассивно и не имеет прямого доступа к модели. Оно обновляется контроллером при изменении модели.
                </li>

                <li class="list-group-item">
                    <strong>ViewModel: </strong> Промежуточное звено между моделью и представлением. ViewModel преобразует данные из модели так, чтобы они были готовы для отображения в представлении. Он также обрабатывает взаимодействие пользователя с представлением и обновляет модель в соответствии с этим взаимодействием.
                </li>
            </ul>
        </p>
    
    </section>

    <section>
        <h2><span>Преимущества</span></h2>

        <ul class="list-group">
            <li class="list-group-item">
                Уменьшает связанность между представлением и моделью.
            </li>

            <li class="list-group-item">
                Упрощает тестирование представления путем выделения логики в ViewModel.
            </li>

            <li class="list-group-item">
                Позволяет легко создавать многоплатформенные приложения с общими ViewModel'ями и разными представлениями.
            </li>
        </ul>
    </section>


    <section>
        <h2><span>Недостатки</span></h2>

        <ul class="list-group">
            <li class="list-group-item">
                Увеличивает сложность проекта за счет введения дополнительного уровня абстракции (ViewModel).
            </li>

            <li class="list-group-item">
                В некоторых случаях требуется дополнительная работа по синхронизации данных между моделью и ViewModel.
            </li>
        </ul>
    </section>

    <section>
        <c-send-report pattern="MVVM" />
    </section>
</template>

<style>

</style>