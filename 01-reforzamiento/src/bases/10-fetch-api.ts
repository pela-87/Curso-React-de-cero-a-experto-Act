import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = `gEVqdJooLC4b7UuI6eosqleXi8S5HVBJ`

const myRequest = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }` );

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement( 'img' );
    imgElement.src = url;
    
    document.body.append( imgElement );
    
}

myRequest
.then(( response ) => response.json())
 .then(( { data }: GiphyRandomResponse ) => {
    // const imageUrl = data.data.images.original.url;
    const imageUrl = data.images.original.url;
    //console.log( imageUrl );
    createImageInsideDOM( imageUrl );

 })
.catch(( err ) => {
    console.error( err );
})