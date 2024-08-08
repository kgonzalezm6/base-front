<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    import { useGlobalStore } from '../stores/global'
    import Upload from '../components/Upload.vue'

	const processing = ref(false)
	const success = ref(false)

    function uploadFile (files, progressHandler) {
        
		processing.value = true

		const formData = new FormData()
        formData.append('file', files)

        axios.post('upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

            onUploadProgress: progressHandler
        })
		.then(response => {
            success.value = true
		})
		.catch(err => {
			console.error(err.response.data)
            success.value = false
		})
		.finally(() => processing.value = false)
    }

    const global = useGlobalStore()

    const headers = [
        { title : 'nit', key : 'nit' },
        { title : 'User', key : 'fullname' },
        { title : 'correo', key : 'emailmuni' },
        { title : 'area', key : 'area.descripcion' },
        { title : 'fecha nacimiento', key : 'fecha_nac', type : 'date', align : 'center' },
        { title : 'fecha ingreso', key : 'fecha_ingreso', type : 'date', align : 'center' },
        { title : 'status', key : 'status', align : 'center'},
        { title : '', key : 'actions', width : '10px' },
    ]
    const data = ref([])
    const row = ref({})
    const openModal = ref(false)
    const errors = ref([])
    const loading = ref(false)


    const fetch = async () => {
        loading.value = true
        try {

            const response = await axios.get('users')
            data.value = response.data

        } catch (error) {

            errors.value = error
            console.error('Ha sucedido un error:' + error)

        } finally {

            loading.value = false
        }
    }

    const edit = (item) => {
        openModal.value = true
        row.value = item
    }

    const resetData = () => {
        openModal.value = false
        row.value = {}
    }

    const update = () => {
        resetData()
        global.setAlert('Registro actualizado correctamente.','success')
    }

    
    onMounted(() => fetch() )

</script>

<template>

<div class="grid gap-3">

    <Button text="Nuevo registro" @click="update" icon="fas fa-user-plus" class="btn-success shadow-green-800 mx-auto" />
    <Upload class="h-12 w-12 mx-auto" @sendFile="uploadFile" :success="success" :processing="processing" />

</div>

    <Data-Table :headers="headers" :data="data" :loading="loading">
        <template #actions="{item}">
            <div class="flex gap-2 text-2xl">
                <Tool-Tip message="Editar" class="-mt-7">
                    <Icon @click="edit(item)" icon="far fa-pen-to-square" class="hover:text-blue-500 hover:scale-125" />
                </Tool-Tip>
                <Tool-Tip message="Eliminar" class="-mt-7">
                    <Icon icon="far fa-trash-can" class="hover:text-red-500 hover:scale-125" />
                </Tool-Tip>
            </div>
        </template>
    </Data-Table>

    <Modal :open="openModal" title="Editar usuario" icon="fas fa-user-pen" >
        <template #close>
            <Icon @click="resetData" icon="fas fa-xmark" class="text-xl text-blue-muni cursor-pointer hover:scale-125" />
        </template>
        <div class="grid grid-cols-2 gap-3">
            <template v-for="head in headers">
                <Input v-if="!head.inactive" v-model="row[head.key]" option="label" :title="head.title" class="w-full" autocomplete="off" />
            </template>
        </div>
        <template #footer>
            <Button @click="resetData" text="Cancelar" icon="fas fa-xmark" class="btn-danger shadow-red-800" />
            <Button @click="update" text="Actualizar" icon="fas fa-arrows-rotate" class="btn-dark shadow-black" />
        </template>
    </Modal>


</template>