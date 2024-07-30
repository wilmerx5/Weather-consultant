<script setup>
import { computed } from 'vue';
import Alert from './components/Alert.vue';
import Form from './components/Form.vue';
import Loading from './components/Loading.vue';
import Weather from './components/Weather.vue';
import { useWeather } from './composables/useWeather';
const {getWeather,weather,isWeather,loading,error}= useWeather()


</script>

<template>
  <h1 class="titulo">SEARCH WEATHER</h1>
  <div class="contenedor buscador-clima">

    <Form
    @get-weather="getWeather"
    ></Form>

    <Weather v-if="isWeather" 
    :weather="weather"
  
    >

    </Weather>

    <Loading
    v-if="loading"
    
    ></Loading>
    <Alert v-if="error">
      <h2>{{error}}</h2>
    </Alert>
  </div>
</template>
