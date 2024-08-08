<script setup>
    import { ref, onMounted } from 'vue'
    import { onClickOutside } from '@vueuse/core'

    import { useAuthStore } from '../stores/auth'
    import { useHomeStore } from '../stores/home'
    import Mapa from '../components/Mapa.vue'

    import UserPhoto from '../components/UserPhoto.vue'
    
    const auth = useAuthStore()
    const store = useHomeStore()
    const target = ref(null)

    const background = (index) => {
        const colors = [
            'bg-[#f5333f] text-blue-muni ', 
            'bg-[#ff9100] text-blue-muni ',
            'bg-[#ffce00] text-blue-muni ',
            'bg-[#97d700] text-blue-muni ',
            'bg-[#00bc70] text-blue-muni ',
            'bg-[#54c8e8] text-blue-muni ',
            'bg-[#1700a5] text-white',
            'bg-violet-600 text-white',
        ]

        return colors[index % colors.length]
    }

    
    const openMenu = (menu) => {
        menu.open = true
        onClickOutside(target, (event) => menu.open = false)
    }

    const runLink = () => {
        if(store.searching.length == 1) {
            
            let url = store.searching[0].ruta.replace('http://172.23.25.31/GestionServicios/','')
            url = url.replace('https://udicat.muniguate.com/catastro/GestionServicios/','')
            const link = document.createElement('a')
            link.href = 'http://172.23.25.31/GestionServicios/' + url
            link.setAttribute('target', '_blank')
            document.body.appendChild(link)
            link.click()
        }

    }


    onMounted( () => store.fetch() )

</script>

<template>

    <header class="lg:flex justify-center items-center gap-5">
        <UserPhoto :user="auth.user" class=" w-64 h-64 border-blue-muni mx-auto lg:mx-0" />
        <div class="text-center">
            <h1 class="text-blue-muni text-xl sm:text-5xl font-bold">{{ auth.user.fullname }}</h1>
            <h2 class="text-blue-muni text-xl sm:text-4xl">NIT : {{ auth.user.nit }}</h2>
            <h2 class="bg-lime-muni text-blue-muni text-xl sm:text-3xl px-4 font-semibold rounded">{{ auth.user.area?.descripcion }}</h2>
        </div>
    </header>
    <br>
    <div class="flex justify-center">
        <div class="w-96">
            <Input icon="fas fa-search" autofocus type="search" @keypress.enter="runLink" @change="runLink" v-model="store.search" placeholder="Buscar .... " list="data" autocomplete="off" />
            <datalist id="data" class="mt-8">
                <option v-for="option in store.searching" >{{ option.descripcion.toUpperCase() }}</option>
            </datalist>
        </div>
    </div>
    <br>
    <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        <div v-for="(menu,index) in store.menus" :key="index" ref="target">
            <Card  class="p-6 w-96 hover:scale-105 cursor-pointer rounded-md" :class="background(index)" @click="openMenu(menu)">
                <div class="flex items-center gap-4">
                    <Icon :icon="menu.icono" class="text-white text-6xl"/>
                    <span class="text-xl font-semibold select-none">
                        {{ menu.nombre }}
                    </span>
                </div>
            </Card>
            <Transition>
                <ul v-if="menu.open" class="bg-white w-96 rounded-b-lg mt-1 border-2 shadow-lg">
                    <li v-for="sub in menu.options" class=" hover:bg-gray-200 text-blue-muni text-xs font-semibold uppercase p-3 cursor-pointer hover:shadow-xl hover:border hover:border-gray-300 hover:scale-105">
                        <a :href="`http://172.23.25.31/GestionServicios/${sub.ruta}`" target="_blank" class="flex items-center gap-3 select-none">
                            <Icon :icon="sub.icono"/>
                            {{ sub.descripcion }}
                        </a>
                    </li>
                </ul>
            </Transition>
        </div>
    </section>
    
</template>

<style scope>

    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease-in-out;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0.5s;
    }


</style>