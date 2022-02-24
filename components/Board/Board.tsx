import React from 'react'

import { container } from '@anims/music'
import * as S from '@components/Music/Music.style'
import Square from './Square'

import { Track } from '@prisma/client'
import data, { Category } from '@samples/music'

const Board: React.FC<{ track: Track }> = ({ track }) => {
  if (
    track.sounds &&
    typeof track.sounds === 'object' &&
    Array.isArray(track.sounds)
  ) {
    const categories = track.sounds as Array<
      Pick<Category, 'playing' | 'volume'>
    >

    data.forEach((sound, index) => {
      sound.playing = categories[index]!.playing
      sound.volume = categories[index]!.volume
    })
  }

  return (
    <S.MusicContainer>
      <S.MusicGrid
        variants={container}
        initial='hidden'
        animate='visible'
        margin
      >
        {data?.map((category, i) => (
          <Square category={category} key={i} />
        ))}
      </S.MusicGrid>
    </S.MusicContainer>
  )
}

export default Board
