import React from 'react'

import { container } from '@anims/music'
import { FadeContainer, FadeReverse } from '@anims/index'
import { Search } from '@anims/intro'

import * as S from '@components/Music/Music.style'
import * as IS from '@components/Intro/Intro.style'
import Square from './RemixSquare'

import BackToTop from '@components/BackToTop'
import SaveModal from '@components/Music/Save'

import { Track } from '@prisma/client'

import { userWithLikes } from '@typings/index'
import data, { Category } from '@samples/music'

import { IoSearchOutline } from 'react-icons/io5'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { IconType } from 'react-icons/lib'

const RemixBoard: React.FC<{ track: Track }> = ({ track }) => {
  const [query, setQuery] = React.useState('')

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.currentTarget.value)
  }

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
    <IS.Container variants={FadeContainer} initial='hidden' animate='visible'>
      <IS.Title
        colour
        text='Craft chill, and soothing music'
        custom={0}
        delay={0}
        heading='h1'
      />
      <IS.Title
        text='Ambient sounds for focusing'
        custom={0}
        delay={0}
        heading='h1'
      />
      <IS.Description variants={FadeReverse}>
        Groovi allows you to create, share, and remix different sounds to create
        the perfect productivity and focus mix for you! Pick some sounds and
        play around with the values to get started
      </IS.Description>
      <IS.Search variants={FadeContainer} initial='hidden' animate='visible'>
        <IS.SearchIcon variants={Search}>
          <IoSearchOutline />
        </IS.SearchIcon>
        <IS.SearchInput
          placeholder='Search sounds...'
          variants={FadeReverse}
          onChange={changeHandler}
        />
      </IS.Search>
      <Music query={query} categories={data} />
      <BackToTop />
    </IS.Container>
  )
}

const filter = (
  options:
    | { name: string; icon: IconType; playing: boolean; volume: number }[]
    | undefined,
  query: string
) => {
  if (!query) return options

  return options?.filter((option: { name: string; icon: IconType }) => {
    const optionText = option.name.toLowerCase()
    return optionText.includes(query.toLowerCase())
  })
}

const Music: React.FC<{ query: string; categories: Category[] }> = ({
  query,
  categories,
}) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  let filteredResults = filter(categories, query)
  const [open, setOpen] = React.useState(false)

  return (
    <S.MusicContainer>
      <S.MusicGrid variants={container} initial='hidden' animate='visible'>
        {filteredResults!.map((category, i) => (
          <Square category={category} key={i} index={i} />
        ))}
      </S.MusicGrid>
      <S.Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => (session ? setOpen(true) : router.push('/login'))}
      >
        Publish Track
      </S.Button>
      <SaveModal open={open} setOpen={setOpen} />
    </S.MusicContainer>
  )
}

export default RemixBoard
