import { Pokemon } from '@/interfaces';
import pokeApi from '../api/pokeApi';

export const getPokemonInfo = async (nameOrID: string) =>{
    try {               //incremental static generation
        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);

        return {
              id: data.id,
              name: data.name,
              sprites: data.sprites
      
          }
    }catch(error){      //incremental static generation
        return null;
    }




  
}