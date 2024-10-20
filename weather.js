const searchInput = document.querySelector('.search-input')
const searchIcon = document.querySelector('.search-icon')
const wrapper = document.querySelector('.wrapper')
const weather = document.querySelector('.weather')
const loading = document.querySelector('.loading')
const getWeather = async (cityName) => {
    loading.style.display = 'block'
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
    const apiKey ='apikey';
    const response = await fetch(apiUrl + apiKey + `&q=${cityName}`);
    const error = document.querySelector('.error')
    if (response.status === 404){
        error.style.display = 'block'
        weather.style.display = 'none'
        loading.style.display = 'none'
        return;
    } else {
        loading.style.display = 'none'
        error.style.display = 'none'
        const data = await response.json();

        const city = document.querySelector('.city-name');
        city.innerHTML = cityName;
    
        const temp = document.querySelector('.temp');
        temp.innerHTML =`${data.main.temp}°C`
    
        const wind = document.querySelector('.wind-speed')
        wind.innerHTML = `${data.wind.speed} <span style='font-size:16px;'> Km/h</span>`
    
        const humidity = document.querySelector('.humidity-amnt')
        humidity.innerHTML = `${data.main.humidity}%`
    
        const state = data.weather[0].main
        const imageState = document.querySelector('.image')
        if (state === 'Clouds'){
            imageState.src = 'images/clouds.png'
        }
        else if(state === 'Clear'){
            imageState.src = 'images/clear.png'
        }
        else if(state === 'Drizzle'){
            imageState.src = 'images/drizzle.png'
        }
        else if(state === 'Humidity'){
            imageState.src = 'images/humidity.png'
        }
        else if(state === 'Mist'){
            imageState.src = 'images/mist.png'
        }
        else if(state === 'Rain'){
            imageState.src = 'images/rain.png'
        }
        else if(state === 'Snow'){
            imageState.src = 'images/snow.png'
        }
        else if(state === 'Wind'){
            imageState.src = 'images/wind.png'
        }

        weather.style.display = 'block'
    }
}

searchIcon.addEventListener('click', () => {
    const cityName = searchInput.value
    if(!cityName){
      alert('Please Enter City Name')
      return;
    }else{
        getWeather(cityName)
    }
})







/*&appid={APIkey}*/
/*q={cityname}*/
// 7b92b3cc49f25408c90703c7ab521186

// wrapper.innerHTML = `
    
// <div class="weather">
//    <div class="weather-header">
//         <h1 class="city-name">New York</h1>
//         <div class="weather-icon">
//             <img src="images/clear.png" alt="" class="image">
//         </div>
//         <h1 class="temp">22°C</h1>
//    </div>

//     <div class="weather-info">
//         <div class="humidity">
//             <img src="images/humidity.png" alt="humidity">
//             <span class="humidity-amnt">50%</span>
//             <span class="humidity-text" >Humidity</span>
//         </div>
//         <div class="wind">
//             <img src="images/wind.png" alt="wind">
//             <span class="wind-speed">15 <span style="font-size: 20px;">Km/h</span></span>
//             <span class="wind-text">Wind Speed</span>
//         </div>
//     </div>
// </div>

// `
