import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

  const  { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

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
        <GifList gifs={gifs}/>
    </>
  )
}
