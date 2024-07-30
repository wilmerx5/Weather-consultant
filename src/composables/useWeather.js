import axios from "axios"
import { computed, ref } from "vue"


export function useWeather() {

    const weather = ref({})
    const  error = ref('')

    const loading= ref(false)
    const getWeather = async ({ country, city }) => {

        weather.value={}
        loading.value=true
        error.value=''
        const key = import.meta.env.VITE_API_KEY

        //get lat and long


        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]

            if (lat && lon) {
                const urlSearch = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
                const { data: dataWeather } = await axios(urlSearch)
                weather.value = dataWeather

                
            }
        }
        catch (e) {
            error.value='City Not Found'
        }
        finally{
            loading.value=false

        }
    }
    const isWeather = computed(() => {
        return Object.values(weather.value).length > 0
    })

  
    return {
        getWeather,
        weather,
        isWeather,
        loading,
        error
    }
}