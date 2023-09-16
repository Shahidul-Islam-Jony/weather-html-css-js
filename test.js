let url = 'https://api.openweathermap.org/data/2.5/weather?zip=6421,bd&appid=f6ed37a5532fb9987f34290bb0ac4e80'
const weather = async (url) => {
    try {
        let response = await fetch(url)
        let data = await response.json();

        console.log(data);
        // return data;

        const { main, name, weather, wind } = data;

        const temp = ((main.temp) - 273).toFixed(2);

        const conatiner = document.getElementById('weather');
        const div = document.createElement('div');
        div.classList = '';
        // const h1= document.createElement('h1');
        // h1.innerText = `${name}`
        div.innerHTML = `
            <h4 class="center">Location = ${name}</h4>
            <div class="flex">${weather[0].main === 'Clear' ? '<img class="weather-icon" src="images/sun.jpg">' : `${weather[0].main === 'Rain' ? '<img class="weather-icon" src="images/cloud.jpg">' : '<img class="weather-icon" src="images/sunCloud.jpg">'}`}
            
            <div>
                <h3>Temperature = ${temp} °C</h3>
                <h1>Weather = ${weather[0].main}</h1>
            </div>
            
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

