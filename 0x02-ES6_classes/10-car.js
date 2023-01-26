export default class Car {
  constructor(brand, motor, color) {
    //create objs
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }

  // Setters

  // Getters
}
