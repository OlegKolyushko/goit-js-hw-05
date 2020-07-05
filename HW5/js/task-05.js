class Car {
  static getSpecs(car) {
    console.log(
      car._maxSpeed,
      car._speed,
      car._isOn,
      car._distance,
      car._price
    );
  }
  constructor(car) {
    let { maxSpeed, price } = car;
    this._speed = 0;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(val) {
    this._price = val;
  }
  turnOn = function () {
    this._isOn = true;
  };
  turnOff = function () {
    this._isOn = false;
    this._speed = 0;
  };
  accelerate = function (val) {
    if (this._isOn === true && val + this._speed < this._maxSpeed) {
      this._speed += val;
    } else if (this._isOn === true && val + this._speed >= this._maxSpeed) {
      this._speed = this._maxSpeed;
    }
  };
  decelerate = function (val) {
    if (this._speed - val < 0) {
      this._speed = 0;
    } else {
      this._speed -= val;
    }
  };
  drive = function (hours) {
    if (this._isOn === true) {
      this._distance += hours * this._speed;
    }
  };
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000