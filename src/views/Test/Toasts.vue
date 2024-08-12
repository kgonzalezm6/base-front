<script setup>
    import { useGlobalStore } from '@/stores/global'

    const global = useGlobalStore()


    const openToast = (title,message,type) => {
        global.setAlert(message,type,title)
    }

</script>

<template>
    <Card class="p-8 bg-white">
        <template #header>
            <h1 class="text-2xl">Toast</h1>
        </template>
        <br>
        <div class="flex justify-center items-center gap-x-5">
            <Button @click="openToast('Toas primary','Este es el toast primary','primary')" text="Toast Primary" class="rounded-lg btn-primary shadow-blue-950" icon="fas fa-plus" />
            <Button @click="openToast('Toas success','Este es el toast success','success')" text="Toast Success" class="rounded-lg btn-success shadow-green-800" icon="fas fa-check" />
            <Button @click="openToast('Toas danger','Este es el toast danger','danger')" text="Toast Danger" class="rounded-lg btn-danger shadow-red-800" icon="fas fa-xmark" />
            <Button @click="openToast('Toas warning','Este es el toast warning','warning')" text="Toast Warning" class="rounded-lg btn-warning shadow-yellow-800" icon="fas fa-user-plus" />
            <Button @click="openToast('Toas dark','Este es el toast dark','dark')" text="Toast Dark" class="rounded-lg btn-dark shadow-black" icon="fas fa-save" />
        </div>

    </Card>
</template>