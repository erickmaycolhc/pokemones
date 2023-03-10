import { Layout } from '../../components/layouts/layout';
import { NoFavorites } from '@/components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

export const Favorites =() =>{ 
    
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect (()=>{
        setFavoritePokemons( localFavorites.pokemons());
    },[]);

    return (
       
        <Layout title = 'Pokemons - Favoritos'>
            {
                favoritePokemons.length === 0 
                ? (  <NoFavorites/>)
                : ( <FavoritePokemons pokemons={favoritePokemons}/>

                   )
            }

        </Layout>
       
    )
}
export default Favorites;

