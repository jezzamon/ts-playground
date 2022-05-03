class Vehicle {
  drive(): void {
    console.log('test drive');
  }

  honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle();

class MyCar extends Vehicle {
  drive(): void {
    console.log('vroooooom');
  }
}

const jerCar = new MyCar();

jerCar.drive();
jerCar.honk();
