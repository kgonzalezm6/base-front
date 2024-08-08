import { defineStore } from 'pinia';
import axios from 'axios'
import { ref } from 'vue'
import { useGlobalStore } from './global'

export const useUsersStore = defineStore('users', () => {


    const global = useGlobalStore()

    const headers = [
        { title : 'nit', key : 'nit' },
        { title : 'User', key : 'fullname' },
        { title : 'area', key : 'area.descripcion' },
        { title : 'status', key : 'status', align : 'center' },
        { title : '', key : 'actions', width : '10px' },
    ]

    const users = ref([])
    const user = ref({})
    const load = ref(false)
    const errors = ref([])
    const openModalDelete = ref(false)
    const openModalEdit = ref(false)

    function fetch () {

        load.value = true
        axios.get('prueba')
        .then(response => {

            if (!response.data.error) {

                users.value = response.data

            } else {

                errors.value = { error : [response.data.error]}

            }
            
        })
        .catch( err => errors.value = err.response.data.errors )
        .finally( () => load.value = false )
    }

    function edit (item) {
        user.value = item
        openModalEdit.value = true

    }

    function update () {
        load.value = true
        axios.post('prueba/update',{
            nit : user.value.nit,
            nombre : user.value.nombre,
            apellido : user.value.apellido,
            usuario : user.value.usuario,
            emailmuni : user.value.emailmuni,
        })
        .then(response => {
            fetch()
            resetData()
            global.setAlert(response.data,'success')
        })
        .catch(err => {
            errors.value = err.response.data.errors
            console.error(err.response.data.errors)
        })
        .finally(() => load.value = false)
    }

    function inactive (item) {
        openModalDelete.value = true
        user.value = item
    }

    function destroy () {
        load.value = true
        axios.post('prueba/delete',{
            nit : user.value.nit
        })
        .then(response => {
            fetch()
            resetData()
            global.setAlert(response.data,'success')
        })
        .catch(err => {
            errors.value = err.response.data.errors
            console.error(err.response.data.errors)
        })
        .finally(() => load.value = false)
    }

    function resetData () {
        user.value = {}
        openModalDelete.value = false
        openModalEdit.value = false
        errors.value = []
    }
    
    return {
        headers,
        users,
        user,
        load,
        errors,
        openModalEdit,
        openModalDelete,

        fetch,
        edit,
        update,
        inactive,
        destroy,
        resetData,

    }
})
