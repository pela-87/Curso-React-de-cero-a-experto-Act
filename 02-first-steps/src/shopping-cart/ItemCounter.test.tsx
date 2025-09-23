import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";



describe('ItemCounter',() =>{
    
    test('Should render with default values',() =>{
        const name = 'Control de Nintendo';
        
        render(<ItemCounter name= { name } />);
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });

    test('Should render with custom quantity',() =>{
        const name = 'Control de Nintendo';
        const quantity = 10;
        
        render(<ItemCounter name= { name } quantity={ quantity } />);
        expect(screen.getByText(quantity)).toBeDefined();        
    });

    test('Should increase count when +1 button is pressed', () => {
        render(<ItemCounter name= { 'Joystick' } quantity={ 1 } />);
        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('Should decrease count when -1 button is pressed', () => {
        //Quantity = 5
        render(<ItemCounter name= { 'Joystick' } quantity={ 5 } />);
        const [,buttonSubstract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('4')).toBeDefined();
    });

    test('Should not decrease count when +1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name= { 'Joystick' } quantity={ 1 } />);
        const [,buttonSubstract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Joystick';
        render(<ItemCounter name= { name } quantity={ quantity } />);

        const itemText = screen.getByText(name);
        //console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');
    });
    
    test('should change to black when count is greater than 1', () => {
        const quantity = 3;
        const name = 'Joystick';
        render(<ItemCounter name= { name } quantity={ quantity } />);

        const itemText = screen.getByText(name);
        //console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');
    });
})