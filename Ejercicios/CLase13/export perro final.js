import  perro from './perro.js';

const miPerro = new perro('Fido', 'Labrador', 3);
miPerro.ladrar();
miPerro.comer();
console.log(`Mi perro se llama ${miPerro.name}, es un ${miPerro.breed} y tiene ${miPerro.age} años.`);