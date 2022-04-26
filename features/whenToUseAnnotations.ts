
// When to use annotations

// 1) Function that returns any type (we need to avoid any type)

// in this case coordinates cannot infer what is coming from JSON.parse, it could be a 
// string or number or object
const json = '{"x": 20, "y": 10}';
const coordinates = JSON.parse(json);

// 2) When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];

// here we add boolean type, otherwise it would infer "any", since the variable is initialized later
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable who's type cannot be inferred
// in this case numberAboveZero can be a boolean or number
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
