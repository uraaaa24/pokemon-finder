'use client'

import { useState } from 'react'
import { PokemonCard } from './pokemon-card'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface PokemonGridProps {
  pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('')

  console.log(pokemonList)

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            id="pokemonName"
            value={searchText}
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>

      <div className="mb-32 grid text-center lg:mb-0  lg:grid-cols-3 lg:text-left gap-6">
        {pokemonList.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </>
  )
}
