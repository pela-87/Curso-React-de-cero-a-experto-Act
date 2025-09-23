import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';
import { render, screen } from '@testing-library/react';
import { ItemCounter } from './shopping-cart/ItemCounter';

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="ItemCounter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name= { props.name} quantity= { props.quantity} />
// }));

describe('FirstStepApp', () => {

    //Esta linea limpia y prepara los mosck. Esto se ejecuta despues de cada prueba.
    afterEach(() => {
        vi.clearAllMocks();
    });


    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();        
    });
    
    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        //screen.debug();
        const itemCointers = screen.getAllByTestId('ItemCounter');
        //console.log(itemCointers.length);
        expect(itemCointers.length).toBe(3);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2', 
            quantity: 7,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Dragon Ball 2', 
            quantity: 4,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Bomber-Man', 
            quantity: 2,    
        });
    })
})