'use client'

import Image from 'next/image'

interface PokemonImageProps {
  image: string
  name: string
}

export function PokemonImage({ image, name }: PokemonImageProps) {
  return (
    <Image
      src={image}
      alt={'Picture of ' + name}
      priority
      fill
      onLoadingComplete={(image) => {
        image.classList.remove('opacity-0')
      }}
      className="transition-opacity opacity-0 duration-[2s]"
      style={{ objectFit: 'contain' }}
    />
  )
}
