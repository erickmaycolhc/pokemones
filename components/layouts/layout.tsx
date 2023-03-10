import Head from 'next/head';
import { ReactNode } from 'react';
import { Navbar } from '../ui';

type Props = {
    children: ReactNode; 
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({children, title} : Props) =>{
    return (
        <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name='author' content='Erick Maycol'/>
            <meta name='description' content={`información sobre el pokémon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${title}`} />
<meta property="og:description" content={`Esta es la página sobre ${title}`} />
<meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
     

       <Navbar></Navbar> 
        <main style={
            {
                padding: '0px 20px'
            }
        }>
            {children}
        </main>
        </>
    )
}