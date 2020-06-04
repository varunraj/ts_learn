class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // above contructor can also be defined as
  // constructor(public color:string){} -> also remove
  // variable initialization.

  // all methods are public by default.
  public drive(): void {
    console.log("vrooom");
  }

  public beep(): void {
    console.log("peep peep");
  }
}

class Car1 extends Vehicle {
  wheels: number;

  constructor(wheels: number, color: string) {
    // calls the constructor of super clas with needed params.
    super(color);
    this.wheels = wheels;
  }

  // Override the drive method

  public drive(): void {
    console.log("croom");
  }

  private driveMe(): void {
    console.log("croom");
  }

  public startDrivingProcess(): void {
    this.driveMe();
  }
}

const vehicle = new Vehicle("red");
vehicle.drive();
vehicle.beep();
console.log(vehicle.color);

const car1 = new Car1(4, "blue");
car1.drive();
car1.startDrivingProcess();
car1.beep();
