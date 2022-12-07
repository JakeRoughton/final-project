let banner = document.querySelector('#banner');
let weather = document.querySelector('#weather');
let astronomy = document.querySelector('#astronomy');
let bookLibrary = document.querySelector('#bookLibrary');
let currentWeather = document.querySelector('#currentWeather');
let nasaPics = document.querySelector('#nasaPics');
let text = document.querySelector('#text');
let spaceButton = document.querySelector('#spaceButton');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let astroImage = document.querySelector('#astroImage');
let astroText1 = document.querySelector('#astroText1');
let astroText2 = document.querySelector('#astroText2');
let nasaButton = document.querySelector('#nasaButton')
let cardBody = document.querySelector('.card-body')


// Astronomy fetch //

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

let forecastFetch = async () => {
	let response  = await fetch ('https://weatherapi-com.p.rapidapi.com/current.json?rapidapi-key=e3ee51abc9msh24983614fe6bf6fp1cf2d1jsn53836e0f3956&q=Detroit');
	let forecastData = await response.json();
	console.log(forecastData.current)

	temp.innerText += `The temperature is: ${forecastData.current.temp_f} degrees with a humidity of ${forecastData.current.humidity} percent`
	wind.innerText += `The wind is blowing at: ${forecastData.current.wind_mph}mph and blowing from the ${forecastData.current.wind_dir}`
	if(forecastData.current.wind_dir === 'W')
		wind.innerText += ' - West';
	else if(forecastData.current.wind_dir === 'E')
		wind.innerText += ' - East';
	else if(forecastData.current.wind_dir === 'S')
		wind.innerText += ' - South';
	else if(forecastData.current.wind_dir === 'N')
		wind.innerText += ' - North';
	else if(forecastData.current.wind_dir === 'NW')
		wind.innerText += ' - North West';
	else if(forecastData.current.wind_dir === 'NE')
		wind.innerText += ' - North East';
	else if(forecastData.current.wind_dir === 'SW')
		wind.innerText += ' - South West';
	else if(forecastData.current.wind_dir === 'SE')
		wind.innerText += ' - South East';
	else if(forecastData.current.wind_dir === 'WNW')
		wind.innerText += ' - West North West';
	else if(forecastData.current.wind_dir === 'ENE')
		wind.innerText += ' - East North East';
	else if(forecastData.current.wind_dir === 'WSW')
		wind.innerText += ' - West South West';
	else if(forecastData.current.wind_dir === 'ESE')
		wind.innerText += ' - East South East';

}
	forecastFetch();

//     Google Books Fetch     //

// let googleAPIrequest = async () => {
// 	let response = await fetch ('https://books.google.com/books?hl=en&as_coll=0&num=10&uid=117225950438757848507&source=gbs_slider_cls_metadata_0_mylibrary')
// 	let googleBookData = await response.json();
// 		console.log(googleBookData);
// }
// googleAPIrequest();


//     Mars Forecast Fetch     //

// let marsAPIrequest = async () => {
// 	let response = await fetch ('https://api.nasa.gov/insight_weather/?api_key=55vXYeYrlTt8CLIHGUa0WArhkS9Ni8dvKiSYAANK&feedtype=json&ver=1.0')
// 	let marsForecastData = await response.json();
// 		console.log(marsForecastData.validity_checks)
// }
//  marsAPIrequest();


//     astroCard Fetch     //
	let spaceFetch = async () => {
	let response = await fetch ('https://go-apod.herokuapp.com/apod');
	let data = await response.json();
	console.log(data);
		spaceText.innerHTML += data.explanation
	}
	spaceFetch();


   //  NASA Pictures     //
let nasaRequest = async () => {
	let response = await fetch ('https://images-api.nasa.gov/search?q=space&media_type=image');
	let nasaData = await response.json();
	console.log(nasaData);
	nasaButton.addEventListener('click', () => {
		for(i=0;i<100;i++);
		nasaPics = nasaData.collection.items[i].links
		cardBody.appendChild()
	})
}
nasaRequest();