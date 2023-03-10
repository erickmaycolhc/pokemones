
const toggleFavorite = (id: number) => {

    let favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]'); {/*JSON.parse() es una función 
    en JavaScript que se utiliza para analizar una cadena JSON y convertirla en un objeto JavaScript. */}

    {/*La función JSON.parse() toma una cadena JSON como su argumento y devuelve un objeto JavaScript. La 
    cadena JSON debe tener un formato válido, de lo contrario se producirá un error.  */} 

    if(favorites.includes(id)){
        favorites = favorites.filter( pokeId => pokeId !== id ); {/*creando un nuevo arreglo que cumpla que 
    contengan ids */} 
    } else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites)); {/*agregando el id en tipo string al 
    localStorage  por medio del JSON.stringify */}
}

const existInFavorite = ( id: number ) : boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

   
    // if(favorites.includes(id)){
    //     favorites = favorites.filter( pokeId => pokeId !== id ); 
    // } else{
    //     favorites.push(id);
    // }

    // localStorage.setItem('favorites', JSON.stringify(favorites));
    
    

    return favorites.includes(id);
}

export const pokemons= () : number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}





 
export default{
    toggleFavorite,
    existInFavorite,
    pokemons,
}