import React from 'react'

import { container } from '@anims/music'
import * as S from '@components/Music/Music.style'
import Square from './Square'

import { Track } from '@prisma/client'
import data, { Category } from '@samples/music'
import { IoHeart, IoHeartOutline, IoShuffle } from 'react-icons/io5'

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

  const [liked, setLiked] = React.useState(false)

  return (
    <S.MusicContainer margin>
      <S.TrackTitle>{track.title}</S.TrackTitle>
      <S.TrackOptions>
        <S.Option margin>
          <IoShuffle size={30} />
          Remix
        </S.Option>
        <S.Option
          className={liked ? 'active' : ''}
          onClick={() => setLiked((liked) => !liked)}
          unactive={liked ? false : true}
        >
          {liked ? 'Liked' : 'Like'}
          {liked ? <IoHeart size={30} /> : <IoHeartOutline size={30} />}
        </S.Option>
      </S.TrackOptions>
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
