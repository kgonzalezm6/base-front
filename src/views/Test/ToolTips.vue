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
            <h1 class="text-2xl">Tool-Tips</h1>
        </template>
        <br>
        <div class="flex justify-center gap-x-7">
            <Tool-Tip message="! Booo ¡" class="-mt-8">
                <Icon icon="fas fa-ghost" bounce class="text-violet-500 text-3xl" />
            </Tool-Tip>
            <Tool-Tip message="Tienes notificaciones pendientes" class="mt-8 text-gray-500">
                <Icon icon="fas fa-bell" shake class="text-yellow-500 text-3xl" />
            </Tool-Tip>
            <Tool-Tip message="😍😍😍😍😍" class="mt-8 text-gray-500">
                <Icon icon="fas fa-heart" beat class="text-red-500 text-3xl" />
            </Tool-Tip>
            <Tool-Tip message="Mensaje en otro color" class="-mt-8 text-green-500">
                <Icon icon="fas fa-bomb" bounce class="text-black text-3xl" />
            </Tool-Tip>
        </div>
    </Card>
</template>