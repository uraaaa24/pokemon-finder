'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function PokemonGrid() {
  const [searchText, setSearchText] = useState('')

  return (
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
    </div>
  )
}
