import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2' // CONEXION con la Api de Pokemones del Postman 
})


export default pokeApi;