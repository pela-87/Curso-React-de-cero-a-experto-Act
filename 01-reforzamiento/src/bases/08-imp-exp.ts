import { heroes, type Hero } from '../data/heroes.data';
//el type se coloca para indicar que solo se importa el tipo de dato y no el objeto en si.

//se puede colocar el undefined en el tipo de dato que retorna la funcion para que no de error
const getHeroById = ( id : number ) : Hero | undefined => {
    const hero = heroes.find( ( hero ) => {
        return hero.id === id;
        }
    );

    //esto es para cuando se esta seguro que el valor nunca sera nulo
    // if ( !hero ) 
    //     throw new Error(`No existe un heroe con el id ${ id }`);

    //return hero!; //el signo de admiracion indica que el valor nunca sera nulo
    return hero;
};

console.log( getHeroById(6) );