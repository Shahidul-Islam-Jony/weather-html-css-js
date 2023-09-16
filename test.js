let url = 'https://api.openweathermap.org/data/2.5/weather?zip=6421,bd&appid=f6ed37a5532fb9987f34290bb0ac4e80'
const weather = async (url) => {
    try {
        let response = await fetch(url)
        let data = await response.json();

        console.log(data);
        // return data;

        const { main, name, weather, sys } = data;

        const temp = ((main.temp) - 273).toFixed(2);
        const feelsLike = ((main.feels_like) - 273).toFixed(2);

        let sunrise = sys.sunrise;
        let sunset = sys.sunset;

        let sunRiseDate = new Date(sunrise*1000);
        let sunRiseHours = sunRiseDate.getHours()%12||12;
        let sunRiseMinutes = sunRiseDate.getMinutes();
        let sunRise = `${sunRiseHours}: ${sunRiseMinutes} A.M`;

        let sunSetDate = new Date(sunset*1000);
        let sunSetHours = sunSetDate.getHours()%12||12;
        let sunSetMinutes = sunSetDate.getMinutes();
        let sunSet = `${sunSetHours}: ${sunSetMinutes} P.M`;




        const conatiner = document.getElementById('weather');
        const div = document.createElement('div');
        div.classList = '';
        
        div.innerHTML = `
            <h3 class="center">Location = ${name}</h3>
            <div class="flex">${weather[0].main === 'Clear' ? '<img class="weather-icon" src="images/sun.jpg">' : `${weather[0].main === 'Rain' ? '<img class="weather-icon" src="images/cloud.jpg">' : '<img class="weather-icon" src="images/sunCloud.jpg">'}`}
            
            <div>
                <h3>Temperature = ${temp} °C</h3>
                <h3>Feels like = ${feelsLike} °C</h3>
                <h1 class="text-size">Weather = ${weather[0].main}</h1>
            </div>
            </div>

            <h1 class="center">Description : ${weather[0].description} </h1>

            <div class="center">
                <h2> Sun rise = ${sunRise}<h2>
                <h2> Sun set = ${sunSet}<h2>
            </div>
            
        `
        conatiner.appendChild(div);



    }
    catch (error) {
        console.log(error);
    }
}

weather(url);







// let unix = 1694866085;
// let date = new Date(unix*1000);

// let now = new Date();
// var hours = date.getHours()%12||12;
// var minutes = date.getMinutes();
// console.log(hours,minutes);

// console.log(date);

