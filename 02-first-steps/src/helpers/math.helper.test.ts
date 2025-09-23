import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('Pruebas add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        // const a = 1;
        // const b = 2;
    
        // ! 2. Act
        //const result = add(a,b);
        const result = add(1,3);
        
        // ! 3. Assert
        //expect(result).toBe(a + b);
        expect(result).toBe(4);
       
        
        console.log({ result });
    
        // if (result !== 2) {
        //     throw new Error ('El resultado no es 2.')
        // }    
    });

    test('should subtract two negative numbers', () => {
        // ! 1. Arrange
        const a = -1;
        const b = -2;
    
        // ! 2. Act
        const result = subtract(a,b);        
        
        // ! 3. Assert
        expect(result).toBe(a - b);    
        
        console.log({ result });
    
        // if (result !== 2) {
        //     throw new Error ('El resultado no es 2.')
        // }    
    });
});

describe('Probando el subtract.', () => {
    test('Se espera el resultado positivo en la resta.', () => {
        const a = 12;
        const b = 2;
        const result = subtract( a , b);
        expect( result ).toBe(a - b);
    });

    test('Se espera el resultado negativo en la resta.', () => {
        const a = 12;
        const b = 21;
        const result = subtract( a , b);
        expect( result ).toBe(a - b);
    });
});

describe('Probando el multiply.', () => {
    test('Se espera el resultado 0 al multiplicar.', () => {
        const a = 7;
        const b = 0;
        const result = multiply( a , b);
        expect( result ).toBe(a * b);
    });

    test('Se espera el resultado positovo al multiplicar.', () => {
        const a = 3;
        const b = 5;
        const result = multiply( a , b);
        expect( result ).toBe(a * b);
    });
});

describe('Probando el divide.', () => {
    test('Se espera el resultado 0 al multiplicar.', () => {
        const a = 0;
        const b = 2;
        const result = divide( a , b);
        expect( result ).toBe(a / b);
    });

    test('Se espera el resultado positovo al dividir.', () => {
        const a = 3;
        const b = 5;
        const result = divide( a , b);
        expect( result ).toBe(a / b);
    });
});
