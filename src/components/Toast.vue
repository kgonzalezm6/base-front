<script setup>

    import { ref, onMounted } from 'vue'
    import { useGlobalStore } from '../stores/global'

    const global = useGlobalStore()


    let open = ref(true)
    
    onMounted(() => {
        setTimeout( () => {
            open.value = false
            global.setAlert('','')
        }, 4000 )        
    })


</script>

<template>
    <div v-if="open"
        :class="{
            'bg-blue-500'   : global.toast.type === 'primary',
            'bg-green-500'  : global.toast.type === 'success',
            'bg-red-500'    : global.toast.type === 'danger',
            'bg-yellow-500' : global.toast.type === 'warning',
            'bg-gray-800' : global.toast.type === 'dark',
        }"
        class="fixed top-12 right-0 mt-8 mr-2 shadow-lg mx-auto w-96 max-w-full text-sm bg-clip-padding rounded block mb-3 z-50 bg-opacity-80 border border-gray-200">
        
        <div class="flex font-bold text-white justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-300 rounded-t">
            
            <icon v-if="global.toast.type === 'primary'" icon="fa-solid fa-circle-check" class="text-xl"/>
            <icon v-else-if="global.toast.type === 'dark'" icon="fa-solid fa-circle-check" class="text-xl"/>
            <icon v-else-if="global.toast.type === 'success'" icon="fa-solid fa-circle-check" class="text-xl"/>
            <icon v-else-if="global.toast.type === 'danger'" icon="fa-solid fa-circle-xmark" class="text-xl"/>
            <icon v-else="global.toast.type === 'warning'" icon="fa-solid fa-triangle-exclamation" class="text-xl"/>

            <p>{{ global.toast.title }}</p>

            <Icon @click="open=false" icon="fas fa-xmark" class="hover:scale-125 cursor-pointer" />
        </div>

        <div class="p-3 rounded-b break-words  text-justify"
            :class="{
                'bg-blue-100 text-blue-500'   : global.toast.type === 'primary',
                'bg-green-100 text-green-500'  : global.toast.type === 'success',
                'bg-red-100 text-red-500'    : global.toast.type === 'danger',
                'bg-yellow-50 text-yellow-600' : global.toast.type === 'warning',
                'bg-gray-100 text-gray-800' : global.toast.type === 'dark',
            }">
            {{ global.toast.message }}
        </div>
    </div>

</template>