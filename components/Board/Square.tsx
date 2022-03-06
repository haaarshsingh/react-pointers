import React from 'react'

import { item } from '@anims/music'
import * as S from '@components/Music/Music.style'

import { IconType } from 'react-icons/lib'

const Square: React.FC<{
  category: { name: string; icon: IconType; playing: boolean; volume: number }
}> = ({ category }) => {
  const audio = React.useRef<HTMLAudioElement>(null)
  React.useEffect(() => {
    category.playing ? audio.current!.play() : audio.current?.pause()
  }, [])

  return (
    <S.AudioBox
      aria-label={category.name}
      className={category.playing ? 'playing' : ''}
      variants={item}
      viewOnly
    >
      <S.AudioController loop ref={audio}>
        <source src={`/${category.name.toLowerCase()}.mp3`} type='audio/mp3' />
      </S.AudioController>
      <S.BoxMain>
        <category.icon />
        <S.AudioText>{category.name}</S.AudioText>
      </S.BoxMain>
      <S.BarContainer style={{ display: category.playing ? 'flex' : 'none' }}>
        <S.Bar
          type='range'
          min={0}
          max={100}
          value={category.volume}
          viewOnly
          readOnly
        />
      </S.BarContainer>
    </S.AudioBox>
  )
}

export default Square
