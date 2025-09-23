import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';


describe('MyAwesomeApp',() => {

    test('Should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />);
        //screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        // console.log(h1.innerHTML);
        //expect(h1?.innerHTML).toBe('Jonatan');
        expect(h1?.innerHTML).toContain('Jonatan');
        expect(h3?.innerHTML).toContain('Villarruel');
        //Prueba para ver que falla y si se encuentra arriba, las otras pruebas no se ejecutan.
        //expect(1).toBe(2);
    });
    
    test('Should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // });

        const h1 = screen.getByTestId('first-name-title');
        //console.log(h1.innerHTML);
        expect(h1?.innerHTML).toContain('Jonatan');        
    });

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('should match snapshot con screen', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})