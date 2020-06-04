interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return this.name;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Broken: ${vehicle.summary()}`);
};

//const zz:Vehicle = {name:"escort",year:2010,broken:false }

// We can have same interace applied to two objects.

interface Reportable {
  reportMe(): string;
}

const corolla = {
  name: "corolla",
  year: 2003,
  broken: true,
  reportMe(): string {
    return `Name: ${this.name}`;
  },
};

const drink1 = {
  color: "white",
  carbonated: true,
  reportMe(): string {
    return `Color: ${this.color}`;
  },
};

// Below funtion implements the interface reportable
const printSummary = (item: Reportable) => {
  console.log(item.reportMe);
};

printSummary(drink1);
printSummary(corolla);
