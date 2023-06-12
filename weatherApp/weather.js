const city = document.querySelector('.city');
const searchBtn= document.getElementById('searchBtn');
const cityInput = document.querySelector('.cityInput');
const descEl = document.querySelector('.desc');
const tempEl = document.querySelector('.temp');
const place = document.querySelector('.place');
const err = document.querySelector('.err');
const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const boxThree = document.querySelector('.box3');
const boxFour = document.querySelector('.box4');
const date = document.querySelector('.date');
const apiKey = 'bcf165ee0192299930708bfd02323b71';




searchBtn.addEventListener('click', function(){
    const cityName = cityInput.value;
    
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
         let kelvin = 273.15;
         let nameOfCity = data.name;
         let nameOfCityCode=data.sys.country;
         let kelvinTemperature =data.main.temp;
         let temperature=kelvinTemperature-kelvin;
         let description =data.weather[0].description;
         let wind=data.wind.speed;
         let sunriseTime = data.sys.sunrise;
         let sunriseDate = new Date(sunriseTime*1000);
         let sunrise = sunriseDate.toLocaleTimeString([],{timeStyle:'short'})
         console.log(sunrise)

         let sunsetTime = data.sys.sunset;
         let sunsetDate = new Date(sunsetTime*1000);
         let sunset = sunsetDate.toLocaleTimeString([], {timeStyle: 'short'})
         let min_Temp=data.main.temp_min;
         let max_Temp=data.main.temp_max;
         let minTemp= min_Temp-kelvin;
         let maxTemp= max_Temp-kelvin;
         let dateData = new Date();

         const date_new = dateData.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
         } )
   
         date.innerHTML=`${date_new}`;

    
         const countryUrl= `https://restcountries.com/v2/alpha/${nameOfCityCode}`;
         fetch(countryUrl)
         .then(response=>response.json())
         .then(country=>{
            console.log(country)
            let countryName = country.name;
            city.innerHTML=`${nameOfCity},<br>${countryName}`;
           
         })
         .catch(error=>{
            city.innerHTML='Error fetching country data:', error;
         });

         tempEl.textContent=`${temperature.toFixed(2)}\u00B0C`;
         descEl.textContent=description;
         const iconCode = data.weather[0].icon;
         const iconUrl= ` http://openweathermap.org/img/wn/${iconCode}.png`;
         document.getElementById('img').src=iconUrl;

         boxOne.innerHTML=  minTemp.toFixed(2)+ '\u00B0C' + '&'+ maxTemp.toFixed(2) + ' \u00B0C';
         boxTwo.innerHTML= wind + ' m/s';
         boxThree.innerHTML=  sunrise;
         boxFour.innerHTML= sunset;
      

          
    }).catch(error=>{
        descEl.textContent='Error fetching weather data:', error;
    })
    
});






  
