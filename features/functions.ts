const add = (a: number, b: number): number => {
  return a + b;
};

// here the type inference is used and it will be `void` since we don't use a return statement
// THEREFORE : We should always return a type for function
const subtract = (a: number, b: number) => {
  a - b;
};

// alternate ways, annotation is the same
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// the type never can be used for throwing error messages, but if we wrap it in a conditional it should return void
// which means the function completed
const throwError = (message: string): void => {
  if (!message) throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// example of destructuring the arguments and typing them
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
