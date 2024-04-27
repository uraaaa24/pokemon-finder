import { POKEMON_API } from '@/constants/api'

export async function getPokemonList() {
  const response = await fetch(`${POKEMON_API}?limit=151&offset=0`)
  const data = await response.json()
  return data.results
}

export async function getPokemonByName(name: string) {
  const response = await fetch(`${POKEMON_API}/${name}`)
  const data = await response.json()
  return data
}
