

function greet( name : string ) {
    return `Hola ${ name }`;
};

// const greet2 = ( name : string ) : string => {
//     return `Hola ${ name }`;
// };

const greet2 = ( name : string ) => `Hola ${ name}`;

const menssage = greet( 'Goku' );
const menssage2 = greet2( 'Vegeta' );

console.log( menssage, menssage2 );

interface User {
    uid: string;
    username: string;
};

function getUser () : User {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

const getUser2 = ( ) => ({ uid: 'ABC123', username: 'El_Papi1502' });

const user = getUser();
const user2 = getUser2();
console.log( user );
console.log( user2 );

const myNumber : number[] = [1,2,3,4,5];

// myNumber.forEach( function ( value)  {
//     console.log( { value } );
// });

myNumber.forEach(( value) => {
    console.log( { value } );
});

myNumber.forEach( console.log );