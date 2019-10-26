class TownElement {

	constructor(name, buildYear){
		this.name = name;
		this.buildYear = buildYear;
    }
	age() {
		var age = new Date().getFullYear() - this.buildYear;
		console.log(age);
	}
};

class Street extends TownElement {
	constructor(name, buildYear, streetLength, streetSize = 3){
		super(name, buildYear);
		this.streetLength = streetLength;
		this.streetSize = streetSize;
    }
    
	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');

		console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.streetSize)} street. `); 

	}

};

class Park extends TownElement {
	constructor(name, buildYear, numberTrees, area){
		super(name, buildYear);
		this.numberTrees = numberTrees;
		this.area = area;
	}
	density() {
		const density = this.numberTrees / this.area;
		console.log(`${this.name} has a tree density of ${density} trees per square km`);
	}
};


const townElement1 = new Street('Moniuszki', 1667, 0.5, 1);
const townElement2 = new Street('Chopina', 1877, 20);
const townElement3 = new Street('Kosciuszki', 1977, 1.2);
const townElement4 = new Park('Poludniowy', 1789, 1000, 23);
const townElement5 = new Park('Zachodni', 1989, 2000, 83);
const townElement6 = new Park('Poludniowy', 1999, 400, 13);

const allParks = [];
allParks.push(townElement4);
allParks.push(townElement5);
allParks.push(townElement6);

const allStreets = [];
allStreets.push(townElement1);
allStreets.push(townElement2);
allStreets.push(townElement3);

function calc(arr){
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	
	return [sum, sum / arr.length];
}


function parkReport(parkTab) {
	
	console.log('------PARK REPORT------');

	//DENSITY
	parkTab.forEach(e => e.density());

	//AVERAGE AGE
	const ages = parkTab.map( el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);	
	console.log(`Our ${parkTab.length} parks have average of ${avgAge} years`);

	//MORE THAN 1000 TREES
	//parkTab.forEach(el => el.numberTrees > 1000 ? console.log(`${el.name} has more than 1000 trees`) : "");
	const i = parkTab.map(e => e.numberTrees).findIndex(e => e > 1000);
	console.log(`${parkTab[i].name} has more than 1000 trees`);
	

}

function streetReport(streetTab) {
	console.log('------STREET REPORT------');
	
	//TOTAL LENGTH AND AVERAGE LENGTH
	const allStreetLengths = streetTab.map(e => e.streetLength);
	const [totalStreetLength, avgStreetLength] = calc(allStreetLengths);
	console.log(`Our ${streetTab.length} streets have a total length of ${totalStreetLength} km, with an average of ${avgStreetLength} km`);

	//STREET SIZEING
	streetTab.forEach( e => e.classifyStreet());
}

parkReport(allParks);
streetReport(allStreets);






