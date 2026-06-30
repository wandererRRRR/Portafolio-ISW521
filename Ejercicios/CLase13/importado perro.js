import animal from './operadores.js';

class Dog extends Animal {
  constructor(name, species, breed,age) {
    super(name, species);
    this.breed = breed;
    this.age = age;
  }
  ladrar() {
    console.log(`${this.name} está ladrando`);
  }
  comer() {
    console.log(`${this.name} está comiendo`);
  }