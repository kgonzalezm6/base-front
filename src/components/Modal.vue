<script setup>
    const props = defineProps({
        open:{
            type: Boolean,
            default : false
        },
        title : {
            type : String,
            default : 'Escribe título'
        },
        icon : ''
    })
    defineOptions({
        inheritAttrs: false
    })
</script>

<template>
    <Transition>
        <div v-show="props.open" class ='inset-0 fixed h-screen bg-gray-900 bg-opacity-30 z-30 overflow-y-auto'>
            <div  class="relative flex justify-center mt-6">
                <div class = "bg-white mx-4 max-w-4xl min-w-min rounded shadow-lg border-2 overflow-hidden" v-bind="$attrs">
                    <header class="flex items-center justify-between py-2 relative rounded-lg px-2">
                        <div class="flex items-center gap-x-2">
                            <Icon v-if="props.icon" :icon="props.icon" class="text-orange-500 text-3xl" />
                            <h1 class="text-2xl text-blue-muni font-bold tracking-tight text-center">{{ props.title }}</h1>
                        </div>
                        <slot name="close"></slot>
                    </header>
                    <section class="py-4 px-4">
                        <slot></slot>
                    </section>
                    <hr>
                    <footer class= "p-4 flex justify-between">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>