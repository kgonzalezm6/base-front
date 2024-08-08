<script setup>
    import axios from 'axios'
    import { ref } from 'vue'
    
    const email = ref('')
    const password = ref('')

    const loading = ref(false)
    const errors = ref([])

    const submitForm = () => {
        loading.value = true
        axios.post('url',{
            email : email.value,
            password : password.value,
        })
        .then(response => console.log(response.data))
        .catch(error => console.error(error))
        .finally(() => loading.value = false)
    }

</script>

<template>
  <div class="grid grid-cols-3 h-screen background-muni bg-cover bg-center bg-no-repeat">
        <div class="bg-lime-muni col-span-2 rounded-tr-full background-mapa border-2 border-lime-700 bg-opacity-[0.96]">
            <div class="flex justify-center items-center h-screen">
                <div class="w-1/3  p-4 lg:mr-36">
                    <header>
                        <Logo class="h-36 w-36 mx-auto" />
                    </header>
                    <form @submit.prevent="submitForm" >
                        <div class="grid gap-4">
                            <label>
                                <Input icon="fas fa-lock" type="email" v-model="email" placeholder="Example@muniguate.com" />
                            </label>
                            <label>
                                <Input icon="fas fa-key" type="password" v-model="password" placeholder="Password"/>
                            </label>
                            <Button type="submit" text="Ingresar" icon="fas fa-right-to-bracket" class="btn-primary w-full py-3" :loading="loading" />
                        </div>
                    </form>
                    <Validate-Errors v-if="errors.length" :erros="errors" />
                </div>
            </div>
        </div>
        <div></div>
  </div>
</template>

<style scoped>
    .background-muni{
        background-image: url('../assets/img/muni.jpg');
        z-index: 1;
    }

    .background-mapa {
        background-image: url('../assets/img/mapa.svg');
        background-size: 80rem;
    }
</style>