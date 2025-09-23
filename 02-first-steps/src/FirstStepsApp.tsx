import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string,
    quantity: number,
}

const itemInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 7},
    {productName: 'Dragon Ball 2', quantity: 4},
    {productName: 'Bomber-Man', quantity: 2},    
];

export function FirstStepsApp() {
    return (
        <>
            {/* <h2>Hola mundi.</h2>
            <p>Esto es un parrafo.</p>
            <button>Click me</button>

            <div>
                <h2>Hola dentro de un div</h2>
            </div> */}

            <h1>Carrito de compras</h1>

            {/* <ItemCounter name="Nintendo Swich 2" quantity={12} />
            <ItemCounter name="Dragon Ball 2" quantity={4}/>
            <ItemCounter name="Bomber-man 3" quantity={2}/> */}
            {
                itemInCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
        </>
    )
}