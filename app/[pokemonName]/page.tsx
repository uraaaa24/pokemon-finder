import { PokemonImage } from '@/components/pokemon-image'
import { Progress } from '@/components/ui/progress'
import { getPokemonByName } from '@/lib/pokemonAPI'

export default async function PokemonPage({
  params
}: {
  params: {
    pokemonName: string
  }
}) {
  const { pokemonName } = params

  const displayPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

  const pokemonData = await getPokemonByName(pokemonName)

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{displayPokemonName}</h1>
      <div className="m-4" style={{ position: 'relative', width: '300px', height: '300px' }}>
        <PokemonImage image={pokemonData.sprites.other['official-artwork'].front_default} name={pokemonName} />
      </div>

      <h3>Weight: {pokemonData.weight}</h3>

      <div className="flex-col">
        {pokemonData.stats.map((statData: any) => {
          const statName = statData.stat.name
          const statValue = statData.base_stat

          return (
            <div key={statName} className="flex items-stretch" style={{ width: '500px' }}>
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress value={statValue} className="w-2/4 m-auto" />
            </div>
          )
        })}
      </div>
    </>
  )
}
