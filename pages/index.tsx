import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import {  Grid } from "@nextui-org/react";
import { GetStaticProps} from 'next'
import pokeApi from '../api/pokeApi';
import { PokemonLIstResponse, SmallPokemon } from '../interfaces/pokemon-list';

 interface Props{
  pokemons: SmallPokemon[];  //los Props tienen los elementos smallPolemon[] 
 }


export default function Home({pokemons}:Props) {
    return (
      <>
        <Layout title="Listado de Pokemones">
         
          <Grid.Container gap={5} justify='flex-start' >
            {
              pokemons.map((pokemon) => (     //iterando las cantidades de veces según los pokemones 
              <PokemonCard key={pokemon.id} pokemon={ pokemon} />                                        //mostrando el id, name y el img
              ))
            }
          </Grid.Container>
        </Layout>
      </>
    )
}


export const getStaticProps: GetStaticProps = async(ctx) =>{
  
    const {data} = await pokeApi.get<PokemonLIstResponse>('/pokemon?limit=151')
    // console.log(data); //me trae toda la data que busco cuando le pido un get


    const pokemons: SmallPokemon[] = data.results.map((poke, i ) => ( {
      ...poke,
      id: i+1,    //como el primer pokemon comienza con el id 0 pues se le suma 1 para que que aparezca como 1 y así sucesivamente  
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }))

    return {
      props:{
        pokemons
      }
    }
}