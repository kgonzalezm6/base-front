import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {

	const user = ref([])
	const roles = ref([])
	const permissions = ref([])
	const loading = ref(false)
	const errors = ref('')
	const load = ref(false)

	function login() {
		
		loading.value = true
		axios.post('login')
		.then(response => {
			if (!response.data.error) {

				user.value = response.data
				roles.value = response.data.roles.map(role => role.nombre)
				permissions.value = response.data.roles.map(role => role.permissions.map(permission => permission.nombre)).flat(Infinity)
				permissions.value = Array.from(new Set(permissions.value))
				
				localStorage.setItem(btoa('permissions'), btoa(JSON.stringify(permissions.value)))

			} else {

				errors.value = { error: [response.data.error] }
				router.push({ name: '401' })

			}

		})
		.catch(err => {
			errors.value = err.response.data.errors
			router.push({ name: '401' })
		})
		.finally(() => loading.value = false)
		

	}
	
	async function validateNit(nit,route) {
		loading.value = true
		try {
			
			const response = await axios.post('validate-nit',{ nit : nit })
			
			if (response.data == 'Authorized' && checkPermission(route)) {
				loading.value = false
				return true
			} else {
				loading.value = false
				return false
			}
			
		} catch (error) {
			console.error(error)
			loading.value = false
			return false
		}

	}


	async function logout() {
		localStorage.clear();
		return await axios.post('logout')
	}

	function checkPermission(el) {
		for (var key in permissions.value) {
			if (permissions.value.hasOwnProperty(key)) {
				var value = permissions.value[key];

				if (value === el) {
					return true;
				}

				if (typeof value === 'object' && checkPermission(el)) {
					return true;
				}
			}
		}

		return false;
	}

	return {
		user,
		roles,
		permissions,
		errors,
		loading,
		load,

		login,
		logout,
		validateNit,
		checkPermission,
	}
})
