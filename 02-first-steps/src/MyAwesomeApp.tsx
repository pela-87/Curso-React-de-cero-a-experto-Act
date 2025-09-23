/* 
Tarea

1- Crear un componente de React dentro del src lladamo MyAwesomeApp
2- El componente debe de retornar (cambiar el nombre)
<h1>Fernando</h1>
<h3>Herrera</h3>

3- Hacer las configuraciones respectivas para poder ver el componente en pantalla.
*/

import type { CSSProperties } from "react";

const firstName = ' Jonatan';
const lastName = 'Villarruel';

const favoriteGames = ['Mortal Kombat', 'Bomber-man','Sonic'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Argentina'
}

/*
Se define como : CSSProperties para usar la interfase de react y
nos ofresca ayuda con las propiedades. Para eso se importa la interfase.
*/
const myStyles: CSSProperties = {
    backgroundColor: isActive ? 'blue' : 'red',
    borderRadius: 20,
    padding: 10,
    margin: 30,
}

export function MyAwesomeApp() {

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p className="mi-class-favorita">{favoriteGames.join(', ')}</p>

            <p>{2 + 2}</p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            {/* Esta es una forma de darle estilo */}
            {/* <p style={{
                backgroundColor: isActive ? 'blue' : 'red',
                borderRadius: 10,
                padding: 10,
            }}
            >{JSON.stringify(address)}</p> */}

            {/* esta es otra forma, mejor vista */}
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    )
}