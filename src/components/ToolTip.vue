<script setup>
    const props = defineProps(['message'])

    defineOptions({
        inheritAttrs: false
    })
    
</script>

<template>
    <div class="flex has-nuve cursor-pointer justify-center">
        <span v-bind="$attrs" class='nuve text-center  mx-auto p-2 text-xs font-bold text-nowrap'>
            {{ props.message }}
        </span>
        <slot></slot>
    </div>

</template>

<style scoped>
    .nuve {
        @apply invisible absolute;
    }

    .has-nuve:hover .nuve {
        @apply visible z-30;
    }
</style>