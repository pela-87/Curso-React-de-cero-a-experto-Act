import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('GiphyApi', () => {
    
    test('should be configured correctly', () => {
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(giphyApi.defaults.params.lang).toBe('es');

        const params = giphyApi.defaults.params;
        //console.log(params);
        
        //el toBe lo utilizamos para comparaciones primitivos.
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

        //el toStrictEqual lo utilizamos para compara objetos.
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        });
    });

})