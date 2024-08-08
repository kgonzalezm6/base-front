<script setup>
	import { onMounted } from 'vue'
	import { useAuthStore } from './stores/auth'
	import { useGlobalStore } from './stores/global'
	import Toast from './components/Toast.vue'

	const auth = useAuthStore()
	const global = useGlobalStore()



	onMounted(() => {
		auth.login()
	})
</script>

<template>
	<Toast v-if="global.toast.message.length > 0" :message="global.toast.message" />
	<RouterView />
</template>

