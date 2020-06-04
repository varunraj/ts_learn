// type is inferred below as string[]
const carMakers = ["ford", "GM", "Toyota"];

// always use annotation for declaration

const flowers: string[] = [];

// type inference for a 2d array as strng[][]

const carByMake = [["f150"], ["corolla"], ["camero"]];

// Help with inference when extracting values
// we can see caar and Mycarr have typs inferred
const caar = carMakers[0];
const Mycaar = carMakers.pop();

//prevent pushing an element which is not correct type
// carMakers.push(1) will error

// Help with map. mappedCar is inferred as string array

let mappedCar = carMakers.map((car): string => {
  return car.toUpperCase();
});

// Flexible types. Type below is inferred as (String|Date[])

const importantDate = [new Date(), "2020-06-20"];
