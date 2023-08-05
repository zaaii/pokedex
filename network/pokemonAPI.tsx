const BASE_URL = 'https://pokeapi.co/api/v2/'
 
 export async function getPokemonList() {
    const res = await fetch(BASE_URL + 'pokemon?limit=200&offset=0')
    const data = await res.json()
    return data.results;
 }
 
 export async function getPokemon(name: string) {
    // pokemon/ditto
    const response = await fetch(BASE_URL + "pokemon/" + name);
    const data = await response.json();
    return data;
}