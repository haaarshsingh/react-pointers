import React from 'react'

import { container } from '@anims/music'
import * as S from '@components/Music/Music.style'
import Square from './Square'

import data from '@samples/music'

const Board: React.FC = () => {
  return (
    <S.MusicContainer>
      <S.MusicGrid
        variants={container}
        initial='hidden'
        animate='visible'
        margin
      >
        {data!.map((category, i) => (
          <Square category={category} key={i} />
        ))}
      </S.MusicGrid>
    </S.MusicContainer>
  )
}

export default Board
