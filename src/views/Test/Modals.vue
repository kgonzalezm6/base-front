<script setup>
    import { ref } from 'vue'

    const openModal = ref(false)

</script>

<template>
    <Card class="p-8 bg-white">
        <template #header>
            <h1 class="text-2xl">Modals</h1>
        </template>
        <br>
        <Button @click="openModal = true" text="Open Modal" icon="fas fa-exclamation" class="btn-dark shadow-black rounded-full " />
        <Modal :open="openModal" title="Este es un modal con título" icon="fas fa-file">
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut placeat dignissimos dolore ducimus exercitationem, nam earum minima voluptates minus, in necessitatibus veritatis consequuntur officiis nulla facilis nisi? Atque, quae.
                Maxime consequuntur quae tenetur dolor rerum quam explicabo provident, saepe excepturi quia ducimus nesciunt. Eveniet fuga sed, ut, inventore, praesentium placeat magnam doloremque error impedit recusandae vero natus odit dolorum.
                Reiciendis perspiciatis at tempore beatae temporibus modi quae dolore soluta accusantium ex ratione magni hic ut voluptatum, praesentium tenetur accusamus ducimus numquam ipsa sit eum. Deserunt quos dolorum architecto ipsa?
                Sapiente corporis assumenda aliquam at facere, perferendis neque quos nesciunt ab, soluta earum animi minima accusantium. Labore doloribus magnam dicta id recusandae, laborum expedita exercitationem error, ipsum quidem quas ea.
            </p>

            <template #footer>
                <Button @click="openModal = false" text="Cerrar" icon="fas fa-xmark" class="btn-danger shadow-red-800 rounded-full" />
                <Button text="Aceptar" icon="fas fa-check" class="btn-success shadow-green-800 rounded-full" />
            </template>
        </Modal>
    </Card>
</template>