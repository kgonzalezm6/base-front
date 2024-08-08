<script setup>
    import { useAuthStore } from '../stores/auth'
    import { useRoute } from 'vue-router'    


    const routes = useRoute()
    const auth = useAuthStore()

    

</script>

<template>
    <nav class="mb-5 text-blue-muni">
        <div class="flex justify-center items-center space-x-10">
            <template v-for="route in routes.matched[0].children">
                <RouterLink  v-if="auth.checkPermission(route.name)" :to="route.path" active-class="border-b-2 border-blue-muni font-bold" >
                    {{ route.name }} 
                </RouterLink>
            </template>
        </div>
    </nav>
</template>
