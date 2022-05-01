const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
// we need to set a specific order of types, ie. Tuple
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// WHEN SHOULD WE USE TUPLES?
// - When you are working with csv files

// example of tuple
const carSpecs: [number, number] = [400, 3354];

// its easier to format it like this
const carStats = {
  horsepower: 400,
  weight: 3354,
};
