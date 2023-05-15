import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

interface PokemonCardProps {
  pokemon: SmallPokemon; //los Props tienen los elementos smallPolemon[]
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    //iterando las cantidades de veces según los pokemones
    //mostrando el id, name y el img

    //en el grid ponemos la propiedad "xs", "sm", etc para modificar los tamaños de las cards en las pantallas
    <Grid xs={6} sm={3} md={2} xl={2} key={pokemon.id}>
      {/* hoverable es una propiedad que indica que el componente debe tener 
              un efecto visual cuando el usuario pasa el cursor sobre él*/}

      {/* clickable es una propiedad para indicar que el componente debe tener un 
                comportamiento especial cuando el usuario hace clic en él.*/}
      <Card
        hoverable
        clickable
        style={{ backgroundColor: "#58339D" }}
        onClick={onClick}
      >
        <Card.Body css={{ p: 10 }}>
          <Card.Image src={pokemon.image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
