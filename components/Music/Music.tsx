import React from 'react'

import { container } from '@anims/music'
import * as S from './Music.style'
import SaveModal from './Save'
import Square from './Square'

import categories from './Categories'
import { IconType } from 'react-icons/lib'

export const filter = (
  options: { name: string; icon: IconType }[] | undefined,
  query: string
) => {
  if (!query) return options

  return options?.filter((option: { name: string; icon: IconType }) => {
    const optionText = option.name.toLowerCase()
    return optionText.includes(query.toLowerCase())
  })
}

const Music: React.FC<{ query: string }> = ({ query }) => {
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
        onClick={() => setOpen(true)}
      >
        Publish Track
      </S.Button>
      <SaveModal open={open} setOpen={setOpen} />
    </S.MusicContainer>
  )
}

export default Music
