import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

//Saco el hook de cache a fuera para que no se renderice.  
// const gifsCache: Record<string, Gif[]> = {};
  
  export const useGifs = () => {  
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    
    //Este hook no renderiza.
    const gifsCache = useRef<Record<string, Gif[]>>({});
      
    const handleTermClicked = async (term: string) => {
        //Para usar el gifCache de useRef hay que agregar el
        // .current para obtener el estado del objeto.
        if ( gifsCache.current[term] ) {
            setGifs(gifsCache.current[term]);
            return;
        }
    
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string = '') => {
        const maxTerms = 8;
        
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;    
        setPreviousTerms([query, ...previousTerms].splice(0, maxTerms));
        
        const gifs = await getGifsByQuery(query);            
        setGifs(gifs);

        gifsCache.current[query] = gifs;
    };
    
    return {
        //Properties
        gifs,

        //Methods
        handleSearch,
        previousTerms,
        handleTermClicked,
    };
};