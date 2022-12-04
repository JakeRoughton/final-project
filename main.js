let banner = document.querySelector('#banner');
let weather = document.querySelector('#weather');
let astronomy = document.querySelector('#astronomy');
let bookLibrary = document.querySelector('#bookLibrary');
let currentWeather = document.querySelector('#currentWeather');
let ticker = document.querySelector('#ticker');
let text = document.querySelector('#text');
let spaceButton = document.querySelector('#spaceButton');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let astroImage = document.querySelector('#astroImage');
let astroText1 = document.querySelector('#astroText1');
let astroText2 = document.querySelector('#astroText2');

// Astronomy fetch //

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e3ee51abc9msh24983614fe6bf6fp1cf2d1jsn53836e0f3956',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let astroFetch = async () => {
	let response = await fetch ('https://weatherapi-com.p.rapidapi.com/astronomy.json?rapidapi-key=e3ee51abc9msh24983614fe6bf6fp1cf2d1jsn53836e0f3956&q=Detroit');
	let astroData = await response.json();
	console.log(astroData.astronomy.astro);

	astroImage += (astroData.astronomy.astro.media_type)

	astroText1.innerText += `The sun rises at ${astroData.astronomy.astro.sunrise} and will set at ${astroData.astronomy.astro.sunset}`

	astroText2.innerText += `The moon rises at ${astroData.astronomy.astro.moonrise} and sets at ${astroData.astronomy.astro.moonset} and is a ${astroData.astronomy.astro.moon_phase} moon`
}
astroFetch();

// Forecast fetch //

let forecastResponse = async () => {
	let response  = await fetch ('https://weatherapi-com.p.rapidapi.com/current.json?rapidapi-key=e3ee51abc9msh24983614fe6bf6fp1cf2d1jsn53836e0f3956&q=Detroit', options);
	let forecastData = await response.json();
	console.log(forecastData.current)

	temp.innerText += `The temperature is: ${forecastData.current.temp_f} degrees with a humidity of ${forecastData.current.humidity} percent`
	wind.innerText += `The wind is blowing at: ${forecastData.current.wind_mph}mph and blowing from the ${forecastData.current.wind_dir}`
	if(wind_dir = 'W')
		wind.innerText += ' - West';
	else if(wind_dir = 'E')
		wind.innerText += ' - East';
	else if(wind_dir = 'S')
		wind.innerText += ' - South';
	else if(wind_dir = 'N')
		wind.innerText += ' - North';

}
	forecastResponse();



// Book Library Fetch //

let bookAPIrequest = async () => {
	let response = await fetch('https://magicblox.p.rapidapi.com/v1/sandbox?rapidapi-key=e3ee51abc9msh24983614fe6bf6fp1cf2d1jsn53836e0f3956&language=English&reading_level=1&section=most-read')
		let bookData = await response.json();
			console.log(bookData);
}

//bookLibrary
bookAPIrequest();


//     Random Space Pic Fetch     //
	let spaceRequest = async () => {
	let response = await fetch ('https://go-apod.herokuapp.com/apod');
	let data = await response.json();
	console.log(data);
		spaceText.innerHTML += data.explanation
	}
	spaceRequest();

//     NASA Pictures     //
// let nasaRequest = async () => {
// 	let response = await fetch ('https://images-api.nasa.gov/search?q=space&media_type=image');
// 	let nasaData = await response.json();
// 	console.log(nasaData);
// }
// nasaRequest();