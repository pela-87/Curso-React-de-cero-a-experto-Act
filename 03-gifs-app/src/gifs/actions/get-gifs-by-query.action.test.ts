import { beforeEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphyApi } from '../api/giphy.api';

import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data';

describe('getGifysByQuery', () => {

    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach (() => {
        //mock.reset();
        mock = new AxiosMockAdapter(giphyApi);
    });

    // test('should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('goku');
    //     const [ gif1 ] = gifs;

    //     //console.log(gif1);
    //     expect(gifs.length).toBe(10);

    //     //Se puede usar el toEqual como tambien el toStrictEqual
    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String)
    //     })
    // });

    test('should return a list of gifs', async() => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        
        const gifs = await getGifsByQuery('goku');
        //console.log(gifs);

        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');            
        });
    });

    test('should return an empty list of gifs if query is empty', async() => {
        //mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore();

        const gifs = await getGifsByQuery('');
        console.log(gifs);

        expect(gifs.length).toBe(0);        
    });

    test('should handle error when the API returns an error', async() => {
        // const consoleErrorSpy = vi.spyOn(console,'error');
        //con esto evitamos mostrar el error, llamamos a la funcion vacia.
        const consoleErrorSpy = vi.spyOn(console,'error').mockImplementation(() => {
            //tambien podemos mostrar lo que querramos, ya que la funcion no devuelve nada.
            //console.log('jolalaaaa');
        });
        
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            },
        });

        const gifs = await getGifsByQuery('goku');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        //tambien podemos comprobar que la funcion devuelva algo, algun argumento
        //en este caso, espero que mande cualquier cosa, pero se puede desglosar mas.
        expect(consoleErrorSpy).toBeCalledWith(expect.anything());
    });

})