// what is an interface

// Creates a new type like 'boolean' or 'string'
// describing the property names and values of an object

// We can use a single Interface to describe the shape or different properties of very different objects.
// This encourages us to write generic functions

interface Reportable {
  //we can express functions as well as a type
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
