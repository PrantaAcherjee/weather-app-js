// console.log('connect')
const apikey="d2dbd83a3498c2227ebae2246cff0837";
 const url="https://api.openweathermap.org/data/2.5/weather?q=";
 const searchBox = document.querySelector('.search input');
 const searchBtn = document.querySelector('.search button');
 const weatherIcon=document.querySelector('.weather-icon');

 async function checkWeather(city) {
    const respone=await fetch(url+ city+ `&appid=${apikey}`);
    const data=await respone.json();
    if(respone.status==404){
        document.querySelector('.error').style.display='block'
    }else{
    document.querySelector('.error').style.display='none'
     
    }
    // console.log(data) 
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp +"°c";
    document.querySelector('.humidity').innerHTML= "Humidity "+ data.main.humidity +"%";
    document.querySelector('.wind').innerHTML="wind "+data.wind.speed +" km/h";
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png'
    }
    else if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src='./images/clear.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='./images/drizzle.png'
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src='./images/rain.png'
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src='./images/mist.png'
    }
    document.querySelector('.weather').style.display="block";

 }
 
 searchBtn.addEventListener('click',()=>{
     checkWeather(searchBox.value);
     searchBox.value="";
 })
 checkWeather(city);
