// We dont get type inferance for input params
// For output we may get a type inference

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// Using function keyword

function divide(a: number, b: number): number {
  return a / b;
}

// return void
const logger = (message: string): void => {
  console.log(message);
};

// never expect the function to return anything.
const throwError = (error: string): never => {
  throw new Error(error);
};

// passing an object to a function

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// Use ES6 destructuring along with annoations

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
