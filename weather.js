const search_btn = document.querySelector('.search_btn')
const input = document.querySelector('.input')
const country = document.querySelector('h1')
const degree = document.querySelector('.sub-header')
const wind_dir = document.querySelector('.dir')
const wind_kilo = document.querySelector('.kilo')
const wind_mph =document.querySelector('.kilo1')
const temperature = document.querySelector('.temp')
const temp = document.querySelector('.temp1')
const ultra = document.querySelector('.uv')
const icon = document.querySelector('.image1')

// const apiUrl = `http://api.weatherapi.com/v1/current.json?key=e9b43c60346a4c8f86f161959231809&q=${inputValue}&aqi=yes`

const fetcher = async (inputValue)  => {
    const response = await  fetch(`http://api.weatherapi.com/v1/current.json?key=e9b43c60346a4c8f86f161959231809&q=${inputValue}&aqi=yes`)
    const data = await response.json()
    console.log(data)
    country.innerHTML= data.location.country
    degree.innerHTML=data.current.wind_degree
    wind_dir.innerHTML=data.current.wind_dir
    wind_kilo.innerHTML=data.current.wind_kph
    wind_mph.innerHTML=data.current.wind_mph
    temperature.innerHTML=data.current.temp_c
    temp.innerHTML=data.current.temp_f
    ultra.innerHTML=data.current.uv
    icon.src=data.current.condition.icon
}


search_btn.addEventListener('click', function(){
    const myInput = input.value
    fetcher(myInput)
    input.value=''
})



