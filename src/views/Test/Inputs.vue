<script setup>
    import { ref } from 'vue'
    const inputValue = ref('Este es un texto de prueba')

</script>

<template>
    <Card class="p-8 bg-white">
        <template #header>
            <h1 class="text-2xl">Inputs</h1>
        </template>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <div class="w-1/4 grid gap-5">
                <Input icon="fas fa-search"  type="search" placeholder="Search ...."/>
                <Input icon="fas fa-envelope"  type="email" placeholder="example@example.com"/>
                <Input icon="fas fa-key"  type="password" placeholder="Password" :error="true"/>
                <Input option="label" title="Usuario" v-model="inputValue" autofocus/>
                <Input option="label" title="Password" type="password" :error="true"/>
            </div>
        </div>
    </Card>
</template>