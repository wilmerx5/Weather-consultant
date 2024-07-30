<script setup>
import { reactive, ref } from 'vue';
import Alert from './Alert.vue';
const queryOptions = reactive({
  country: '',
  city: ''
})
const Countries = [
    { code: 'CO', name: "COLOMBIA" },
    { code: 'US', name: "UNITED STATES" },
    { code: 'MX', name: "MEXICO" },
    { code: 'AR', name: "ARGENTINA" },
    { code: 'ES', name: "SPAIN" },

]

const error =ref('')

const emit =defineEmits('get-weather')

const queryWeather=()=>{
    if(Object.values(queryOptions).includes('')){
        error.value="Complete all fields"
        return 
    }

    emit('get-weather',queryOptions)
    error.value=""
}
</script>



<template>

    <form
    @submit.prevent="queryWeather"
    class="formulario">

    <Alert v-if="error">
        <h2>{{ error }}</h2>
    </Alert>
        <div class="campo">
            <label for="ciudad">
                City
            </label>
            <input 
            v-model="queryOptions.city"
            type="text" id="ciudad">
        </div>

        <div class="campo">
            <label for="pais">
                Country
            </label>
            <select for="pais"
            :value="queryOptions.country"
            v-model="queryOptions.country"

            >
                <option value="">
                    --SELECT COUNTRY--
                </option>
                <option 
                
                v-for="country in Countries" :value="country.code">
                    {{ country.name }}
                </option>
            </select>

            <input type="submit" value="SEARCH">
        </div>

    </form>
</template>