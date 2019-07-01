export default class SwapiService {

	constructor() {
		this._apiBase = 'https://swapi.co/api';
		this._imageBase = `https://starwars-visualguide.com/assets/img`;
	};

	 
	async getData(url) {

		const data = await fetch(`${this._apiBase}${url}`);

		if (!data.ok) {
			throw new Error (`Could not fetch: ${this._apiBase}${url}, received: ${data.status}`);				
		}

		return data.json();		
	}

	getAllPeople = async () => {
		const res = await this.getData(`/people/`);
		return res.results.map(this._transformPerson);
	}

	getPerson = async (id) => {		
		const person = await this.getData(`/people/${id}/`);
		return this._transformPerson(person);
	}

	getImagePerson = (id) => {
		return `${this._imageBase}/characters/${id}.jpg`
	}

	getAllPlanets = async () => {
		const res = await this.getData(`/planets/`);
		return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet= await this.getData(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	getImagePlanet = (id) => {
		return `${this._imageBase}/planets/${id}.jpg`
	}

	getAllStarships = async () => {
		const res = await this.getData(`/starships/`);
		return res.results.map(this._transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getData(`/starships/${id}/`);
		return this._transformStarship(starship);
	}

	getImageStarships = (id) => {
		return `${this._imageBase}/starships/${id}.jpg`
	}

	_extractId(el) {
		const idRegExp = /\/([0-9]*)\/$/;
		return el.url.match(idRegExp)[1];
	}

	_transformPlanet = (planet) => {
		return {
			id:this._extractId(planet),
			name:planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		}
	}

	_transformPerson = (person) => {
		return {
			id:this._extractId(person),
			name:person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}
}
