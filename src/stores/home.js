
import { defineStore } from 'pinia';
import axios from 'axios';
import { ref,computed } from 'vue'


 export const useHomeStore = defineStore('home', () => {
    
    const menus = ref([])
    const loading = ref(false)
    const errors = ref([])
    const search = ref('')

    function fetch () {
        loading.value = true
        axios.get('menu')
        .then(response => {
            if (!response.data.error) {
                menus.value = response.data.map(item => {
                    item.open = false
                    return item
                })
            }
        })
        .catch(err => {
            errors.value = { error : [err.response.data.error] }
            console.error(err.response.data.error)
        })
        .finally( () => loading.value = false)
    }

    const searching = computed(() => {
        return menus.value.map(menu => {
            return menu.options.filter(option => {
                return option.descripcion.toLowerCase().match(search.value.toLowerCase())
            })
        }).flat(Infinity)
   })

    return {
        menus,
        loading,
        errors,
        search,
        searching,

        fetch   
    }
 });
 