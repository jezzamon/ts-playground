// ts can use inference since its already initialized with string arrays
const carMakers = ['ford', 'chevy', 'toyota'];

const dates = [new Date(), new Date()];

const carsByMake = [['f1-50'], ['coralla'], ['camaro']];

// here we annotate an array of arrays since it's been init'd by empty array
const carsByMake2: string[][] = [];

// help with inference when extracting arrays
const car = carMakers[0];
const myCar = carMakers.pop();

// helps preventing incompatible values
carMakers.push(100);

// we get help with map, reduce array functions
carMakers.map((car): string => {
  // .toUppercase was autocompleted
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// When to use typed arrays : any time we need to represent a collection with some arbitrary order
