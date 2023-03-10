import { Layout } from "@/components/layouts"
import { GetStaticProps } from 'next';
import { GetStaticPaths } from "next";
import { Pokemon } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { localFavorites } from "@/utils";
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}


function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export const pokemonPage = ({pokemon}:Props) =>{

    const [isInFavorites, setIsInFavorites] = useState( localFavorites.existInFavorite(pokemon.id) );
    const [nameFavorite, setNameFavorite] = useState( "" );

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( pokemon.id);
        setIsInFavorites(!isInFavorites);

        if(isInFavorites) return;
        
        confetti ({
            zIndex: 999,
            particleCount:100,
            spread: 100,
            angle:-100,
            origin: {
                x: 1 ,
                y: 0,
            }
        })
        
    }

    useEffect(() => {
      setNameFavorite(isInFavorites ? 'En favorites' : 'Guardar en favoritos')
    }, [isInFavorites]);


    return (
        <>
        <Layout  title={capitalizeFirstLetter(pokemon.name)} >
           
            <Grid.Container css= {{marginTop: '5px'}} gap={2} style={{backgroundColor: '#8B54F9'}}>
                <Grid xs = { 12 } sm = { 4 } >
                    <Card hoverable css={{padding: '30px '}}>
                        <Card.Body>
                            <Card.Image 
                                src=    { pokemon.sprites.other?.dream_world.front_default || 'no image.png' }
                                alt=    { pokemon.name }
                                width=  '100%'
                                height= { 200 }
                            />

                        </Card.Body> 

                    </Card>

                </Grid>

                <Grid  xs = { 12 } sm = { 8 }> 
                    <Card >
                        <Card.Header  css={{display : 'flex', justifyContent: 'space-between' }} >
                            <Text h1 transform='capitalize'  > { pokemon.name } </Text>

                            <Button 
                                color = 'gradient'
                                ghost = {!isInFavorites}
                                onClick={onToggleFavorite}
                                >
                               { nameFavorite }
                            </Button>

                        </Card.Header>

                        <Card.Body >
                            <Text size={30}>Sprites</Text>
                            <Container  direction='row' display='flex' gap= {0}  > 
                                <Image  className="hoverable"     
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                 <Image  className="hoverable"
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                 <Image  className="hoverable"
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                 <Image  className="hoverable"
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>


        </Layout>
        </>
    )
}




export const getStaticPaths: GetStaticPaths = async(ctx) =>{
  
    const pokemons151 = [...Array(151)].map( ( value, index )=>`${index + 1}` );

    return {
     paths: pokemons151.map(id =>({
        params:{id}
     })),
     fallback: 'blocking'   //incremental static generation
    }
}



export const getStaticProps: GetStaticProps = async({params}) =>{

    const {id} = params as{id: string};
  
    const pokemon = await getPokemonInfo(id);       //incremental static generation

    if(!pokemon){       //incremental static generation
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    return {
      props:{
       pokemon
      },
      revalidate: 86400, //60 * 60 * 24,
    }
}




export default pokemonPage;
  





