const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// we defined array with types in each position defined.
const pepsi: [string, boolean, number] = ["brown", true, 40];
//pepsi[0] = 40 will error out.

// We can defined a type instead called type alias

type Drink = [string, boolean, number];

const sprite: Drink = ["white", true, 60];
