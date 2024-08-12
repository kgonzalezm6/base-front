<script setup>
    
</script>

<template>
    <Card class="p-8 bg-white">
        <template #header>
            <h1 class="text-2xl">Buttons</h1>
        </template>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <Button text="Delete" class="btn-danger shadow-red-800" icon="fas fa-xmark" />
            <Button text="Success" class="btn-success shadow-green-800" icon="fas fa-check" />
            <Button text="New" class="btn-primary shadow-blue-950" icon="fas fa-plus" />
            <Button text="New user" class="btn-warning shadow-yellow-800" icon="fas fa-user-plus" />
            <Button text="Save" class="btn-dark shadow-black" icon="fas fa-save" />
            <Button text="Save" class="btn-primary shadow-blue-950" icon="fas fa-save" :loading="true" />
        </div>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <Button text="Delete" class="btn-danger shadow-red-800 rounded-lg" icon="fas fa-xmark" />
            <Button text="Success" class="btn-success shadow-green-800 rounded-lg" icon="fas fa-check" />
            <Button text="New" class="btn-primary shadow-blue-950 rounded-lg" icon="fas fa-plus" />
            <Button text="New user" class="btn-warning shadow-yellow-800 rounded-lg" icon="fas fa-user-plus" />
            <Button text="Save" class="btn-dark shadow-black rounded-lg" icon="fas fa-save" />
            <Button text="Save" class="btn-primary shadow-blue-950 rounded-lg" icon="fas fa-save" :loading="true" />
        </div>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <Button text="Delete" class="rounded-full btn-danger shadow-red-800" icon="fas fa-xmark" />
            <Button text="Success" class="rounded-full btn-success shadow-green-800" icon="fas fa-check" />
            <Button text="New" class="rounded-full btn-primary shadow-blue-950" icon="fas fa-plus" />
            <Button text="New user" class="rounded-full btn-warning shadow-yellow-800" icon="fas fa-user-plus" />
            <Button text="Save" class="rounded-full btn-dark shadow-black" icon="fas fa-save" />
            <Button text="Save" class="rounded-full btn-primary shadow-blue-950" icon="fas fa-save" :loading="true" />
        </div>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <Button class="btn-danger shadow-red-800" icon="fas fa-xmark" />
            <Button class="btn-success shadow-green-800" icon="fas fa-check" />
            <Button class="btn-primary shadow-blue-950" icon="fas fa-plus" />
            <Button class="btn-warning shadow-yellow-800" icon="fas fa-user" />
            <Button class="btn-dark shadow-black" icon="fas fa-save" />
            <Button class="btn-primary shadow-blue-950" icon="fas fa-save" :loading="true" />
        </div>
        <br>
    </Card>
</template>