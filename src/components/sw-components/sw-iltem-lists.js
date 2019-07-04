import ItemList from '../item-list';
import { HocItemList, HocSwapiServiceContext, Compose, RenderFunction } from '../hoc/';

const renderName = ({ name })=> name;

const mapPersonsMethodsToProps = (swapiService) => {	
	return {
		getData: swapiService.getAllPeople
	};
}

const mapPlanetsMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
}

const mapStarshipsMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
}

const PersonList = Compose(
						HocSwapiServiceContext(mapPersonsMethodsToProps),
						HocItemList,
						RenderFunction(renderName)
					)(ItemList);

const PlanetList = Compose(
						HocSwapiServiceContext(mapPlanetsMethodsToProps),
						HocItemList,
						RenderFunction(renderName)
					)(ItemList);

const StarshipList = Compose(
						HocSwapiServiceContext(mapStarshipsMethodsToProps),
						HocItemList,
						RenderFunction(renderName)
					)(ItemList);


export {
	PersonList,
	PlanetList,
	StarshipList
}