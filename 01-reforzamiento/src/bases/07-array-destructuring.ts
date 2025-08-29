//para desestructurar un array si importa el orden,
//no como en los objetos.

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [p1, p2] = characterNames;
// console.log( { p1, p2 } );

// const [, p2] = characterNames;
// console.log( { p2 } );

//Tarea desestructurar el tercer elemento del array
const [,,p3] = characterNames;
console.log( { p3 } );

const returnArray = () => {
  return [ 'ABC', 123 ] as const;
};

const [ x, y ] = returnArray();
console.log( x , y );

/*
Tarea: Implementar useState
Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

Requisitos
La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola.
*/

/*
Ejemplo de uso esperado
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
*/

/*
Tips
No olvidar usar as const para decir que siempre regresará una estructura predefinida el arreglo.
*/

const useState = ( valor : string ) => {
    return [ 
            valor, 
            ( newValue: string ) => {
                console.log( newValue );
            }
            ] as const
};

const [ name, setName ] = useState( 'Gohan' );
console.log( name );
setName( 'Vegeta' );;