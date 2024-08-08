<script setup>
    import UserCard from './UserCard.vue';
    import { useAuthStore } from '../stores/auth'

    const authStore = useAuthStore()
    const props = defineProps({
        title : {
            default : 'Ejemplo de título'
        }
    })
    
</script>

<template>
    <nav class="fixed w-full top-0 h-16 px-5 py-1 bg-lime-500 shadow-lg border-b-2 border-lime-600 z-10">
        <div class="flex justify-between items-center">
            <div class="flex space-x-2">
                <a href="../../" class="">
                    <img src="../assets/img/logo.png" class="w-auto h-52">
                </a>
                <h1 class="text-3xl font-bold text-lime-100 mt-2 hidden md:block">{{ props.title }}</h1>
            </div>
            <div class="flex-1"></div>
            <div class="-mt-6">
                <UserCard :user="authStore.user" />
            </div>
        </div>
    </nav>
</template>