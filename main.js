let banner = document.querySelector('#banner');
let weather = document.querySelector('#weather');
let astronomy = document.querySelector('#astronomy');
let bookLibrary = document.querySelector('#bookLibrary');
let currentWeather = document.querySelector('#currentWeather');
let text = document.querySelector('#text');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let astroImage = document.querySelector('#astroImage');
let astroText1 = document.querySelector('#astroText1');
let astroText2 = document.querySelector('#astroText2');
let nasaButton = document.querySelector('#nasaButton');
let cardBody = document.querySelector('.card-body');
let getImage = document.querySelector('#getImage');
let nasaText = document.querySelector('#nasaText');
let davynnImage = document.querySelector('#davynnImage');
let davynnButton = document.querySelector('#davynnButton');
let davynnText = document.querySelector('#davynnText');


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


//     astroCard Fetch     //

	let spaceFetch = async () => {
	let response = await fetch ('https://go-apod.herokuapp.com/apod');
	let data = await response.json();
	console.log(data);
		spaceText.innerHTML += data.explanation
	}
	spaceFetch();


   //     NASA Pictures     //

	nasaButton.addEventListener('click', () => {
		console.log('click event')
		console.log(getImage.src)
		if(getImage.src ===`${window.location.origin}/spaceImages/Pic1.jpg`){
			getImage.src = 'spaceImages/Pic2.jpg'
			nasaText.innerHTML = 'This image shows the Large Magellanic Cloud galaxy in infrared light as seen by ESA Herschel Space Observatory and NASA Spitzer Space Telescope'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic2.jpg`){
			getImage.src = '/spaceImages/Pic3.jpg'
			nasaText.innerHTML = 'Saturn seen with the Hubble Telescope'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic3.jpg`){
			getImage.src = '/spaceImages/Pic4.jpg'
			nasaText.innerHTML = 'James Web Space Telescope'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic4.jpg`){
			getImage.src = '/spaceImages/Pic5.jpg'
			nasaText.innerHTML = 'What looks like a red butterfly in space is in reality a nursery for hundreds of baby stars, revealed in this infrared image from NASAs Spitzer Space Telescope'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic5.jpg`){
			getImage.src = '/spaceImages/Pic6.jpg'
			nasaText.innerHTML = 'ESA Herschel Space Observatory found oxygen molecules in a dense patch of gas and dust adjacent to star-forming regions in the Orion nebula.'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic6.jpg`){
			getImage.src = '/spaceImages/Pic7.jpg'
			nasaText.innerHTML = 'Zinnia seeds grown in the Veggie plant growth system on the International Space Station'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic7.jpg`){
			getImage.src = '/spaceImages/Pic8.jpg'
			nasaText.innerHTML = 'The Dumbbell nebula, also known as Messier 27, pumps out infrared light in this image from NASA Spitzer Space Telescope'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic8.jpg`){
			getImage.src = '/spaceImages/Pic9.jpg'
			nasaText.innerHTML = 'This planetary nebulas simple, graceful appearance is thought to be due to perspective: our view from Earth looking straight into what is actually a barrel-shaped cloud'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic9.jpg`){
			getImage.src = '/spaceImages/Pic10.jpg'
			nasaText.innerHTML = 'James Webb Space Telescope with the furthest picture in space ever taken. With a visible Einstein ring'
		}else if(getImage.src === `${window.location.origin}/spaceImages/Pic10.jpg`){
			getImage.src = '/spaceImages/Pic1.jpg'
			nasaText.innerHTML = 'Orion Spacecraft with rockets rollout at Kennedy Space Center for the Artemis moon mission'
		}
	})


	//     Davynn's Card     //

	davynnButton.addEventListener('click', () => {
		console.log('click event')
		console.log(davynnImage.src)
		if(davynnImage.src === `${window.location.origin}/davynnImages/Pic1.png`){
			davynnImage.src = 'davynnImages/Pic2.png'
			davynnText.innerHTML = 'This is a square'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic2.png`){
			davynnImage.src = 'davynnImages/Pic3.png'
			davynnText.innerHTML = 'This is a triangle'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic3.png`){
			davynnImage.src = 'davynnImages/Pic4.png'
			davynnText.innerHTML = 'This is a rectangle'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic4.png`){
			davynnImage.src = 'davynnImages/Pic5.png'
			davynnText.innerHTML = 'This is a oval'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic5.png`){
			davynnImage.src = 'davynnImages/Pic6.png'
			davynnText.innerHTML = 'This is a rhombus'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic6.png`){
			davynnImage.src = 'davynnImages/Pic7.png'
			davynnText.innerHTML = 'This is a heart'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic7.png`){
			davynnImage.src = 'davynnImages/Pic8.png'
			davynnText.innerHTML = 'This is a star'
		}else if(davynnImage.src === `${window.location.origin}/davynnImages/Pic8.png`){
			davynnImage.src = 'davynnImages/Pic1.png'
			davynnText.innerHTML = 'This is a square'
		}
	})



	// let nasaRequest = async () => {
	// 	let response = await fetch ('https://images-api.nasa.gov/search?q=space&media_type=image');
	// 	let nasaData = await response.json();
	// 	console.log(nasaData);
	// 	nasaButton.addEventListener('click', () => { 
	// 		createImages(nasaData,2);

	// 	})
	// }
	// nasaRequest();
	
	// function createImages(nasaData, n){
	
	// 	for(let i=0;i<n;i++) {
	// 		let newImg = document.createElement("img");
	// 		newImg.src = nasaData.collection.items[i].links[0].href
	// 		cardBody.appendChild(newImg);
	// 	}
	// }


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
