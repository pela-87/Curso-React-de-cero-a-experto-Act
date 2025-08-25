interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  address?: Address;
};

interface Address {
  postalCode: string;
  city: string;
};

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',  
  age: 45,
  address:{
    postalCode: 'ABC123',
    city: 'New York',
  },
};


//const spiderman = ironman;
//const spiderman = { ...ironman }; // Spread operator
// const spiderman = structuredClone(ironman); // Clonación profunda

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker'; 
// spiderman.age = 21;
// spiderman.address.city = 'Bahia Blanca';

// console.log(ironman, spiderman);

console.log(ironman);