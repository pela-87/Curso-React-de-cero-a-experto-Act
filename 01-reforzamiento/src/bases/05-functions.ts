

function greet( name : string ) {
    return `Hola ${ name }`;
};

const greet2 = ( name : string ) : string => {
    return `Hola ${ name }`;
};

const menssage = greet( 'Goku' );
const menssage2 = greet2( 'Vegeta' );

console.log( menssage, menssage2 );

function getUser () {
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