import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gifs perfecto" />

        {/* Search */}        
        <SearchBar title="Buscar" placeholder="Buscar Gifs"/>

        {/* Busquedas previas */}
        <PreviousSearches searches={['Goku','Saitama']} />

        {/* Gifs */}
        <GifList gifs={mockGifs}/>
    </>
  )
}
