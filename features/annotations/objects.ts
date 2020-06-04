const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    // function inside object using es6
    this.age = age;
  },
};

// deconstruct using es6 to get age and then annoate
const { age }: { age: number } = profile;
