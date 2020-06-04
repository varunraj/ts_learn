// primitive

let name1: string = "Varun";

// type is inferred.
let street = "cameron";
let age1: number = 38;
let isTrue: boolean = true;

// Array

let colors: String[] = ["red", "blue", "yellow"];

//classes

class Car {}
let car: Car = new Car();

// object

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotation instead of instead of inference
// 1 ) Use tye annotation when function return any

const json = '{"x:10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

//2 ) for late initialization

let color = ["red", "green", "blue"];
let hasFound: boolean;

for (let i = 0; i < color.length; i++) {
  if (color[i] == "green") {
    hasFound = true;
  }
}

// 3 ) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];

// below variable can take a boolean or number type.
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
