import { Image, Spacer, Text, useTheme, } from "@nextui-org/react"
import NextLink from 'next/link';



export const Navbar = () =>{

    const {theme} = useTheme();
    // console.log(theme);

    return (
        
        <div style={
            {
             display : 'flex',
             width: '100%',
             flexDirection: 'row',
             alignItems: 'center',
             justifyContent: 'start',
             padding: '0px 20px',
             backgroundColor: theme?.colors.purple700.value  
            }

         }>

            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                   alt='icono de la app'
                   width={70}
                   height={70}
            />
            <NextLink href='/' passHref className="name-logo">
                <Text color= 'white' h2>P</Text>
                <Text color= 'white' h3>okémon</Text>
            </NextLink>

                <Spacer css={{ flex: 1}}/>
                      
            <NextLink href='/favorites' passHref className="name-logo">
            <Text color= 'white'>Favoritos</Text>
            </NextLink>
           
        </div>
        
        
    )
    
}
