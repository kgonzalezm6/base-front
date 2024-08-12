<script setup>
    import { useAuthStore } from '../stores/auth'
    import UserCard from '../components/UserCard.vue'
    import SideBar from '../components/SideBar.vue'
    import Footer from '../components/Footer.vue'
    import BackTop from '../components/BackTop.vue'
    import Tabs from '../components/Tabs.vue'

    const auth = useAuthStore()

</script>

<template>
    <main>
        <SideBar />
        <UserCard class="absolute top-2 right-5"/>
        <div class="h-screen flex flex-col">
            <section class="flex-1 pl-20 pt-20 mb-4">
                <div class="overflow-hidden pb-4">
                    <div v-if="auth.loading" class="flex justify-center items-center">
                        <div>
                            <img src="../assets/img/mapa.gif" alt="DCAI">
                            <h1 class="text-3xl font-bold text-blue-muni text-center">Cargando <span class="animate-ping"> . . . . </span></h1>
                        </div>
                    </div>
                    <div v-if="!auth.loading" class="p-5">
                        <Tabs />
                        <RouterView/>
                    </div>
                    <BackTop />
                </div>
            </section>
            <Footer />
        </div>
    </main>
</template>
