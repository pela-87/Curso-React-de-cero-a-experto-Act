import { useState } from 'react'
import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({term});
  };

  const handleSearch = (query: string = '') => {
    const maxTerms = 8;
    
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;    
    setPreviousTerms([query, ...previousTerms].splice(0, maxTerms));    
  };

  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gifs perfecto" />

        {/* Search */}        
        <SearchBar  
          placeholder="Buscar Gifs"
          onQuery= {handleSearch}
        />

        {/* Busquedas previas */}
        <PreviousSearches searches={previousTerms}
        onLabelClicked={handleTermClicked}
        />

        {/* Gifs */}
        <GifList gifs={mockGifs}/>
    </>
  )
}
