<script setup>
    import { ref, onMounted } from 'vue'
    import LoadingBar from '@/components/LoadingBar.vue'
    import ProgressBar from '@/components/ProgressBar.vue'


    const progress = ref(0)


    onMounted(() => {
        setInterval(() => {
            if (progress.value == 100 ){
                progress.value = 0
            }

            progress.value++

        },100)
    })
    

</script>

<template>
    <Card class="p-8 bg-white">
        <template #header>
            <h1 class="text-2xl">Spiner</h1>
        </template>
        <br>
        <div class="flex justify-center gap-x-7">
            <Icon icon="fas fa-spinner" spin-pulse class="text-blue-500 text-3xl" />
            <Icon icon="fas fa-circle-notch" spin class="text-green-500 text-3xl" />
            <Icon icon="fas fa-fan" spin class="text-red-500 text-3xl" />
            <Icon icon="fas fa-ghost" bounce class="text-violet-500 text-3xl" />
            <Icon icon="fas fa-rotate" spin class="text-orange-500 text-3xl" />
            <Icon icon="fas fa-bomb" beat class="text-black text-3xl" />
            <Icon icon="fas fa-bell" shake class="text-yellow-500 text-3xl" />
        </div>
        <br>

        <h1 class="text-2xl">LoadingBar</h1>
        <br>
        <div class="flex flex-col justify-center gap-7">
                <LoadingBar class="h-1 bg-blue-500" />
                <LoadingBar class="bg-green-500 h-1" />
                <LoadingBar class="h-5 bg-red-500"/>
        </div>
        <br>

        <h1 class="text-2xl">ProgressBar</h1>
        <br>
        <div class="flex flex-col justify-center gap-7">
                <ProgressBar :progress="progress" class="h-1 bg-violet-500" />
                <ProgressBar :progress="progress" class="bg-lime-500 h-1" />
                <ProgressBar :progress="progress" :text="true" class="h-5 bg-yellow-500"/>
        </div>
    </Card>
</template>