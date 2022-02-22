import React from "react"

import { container } from "@anims/music"
import * as S from "./Music.style"
import Square from "./Square"

import categories from "./Categories"
import { IconType } from "react-icons/lib"

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

  React.useEffect(() => {
    console.log(query)
  }, [query])

  return (
    <S.MusicContainer>
      <S.MusicGrid variants={container} initial="hidden" animate="visible">
        {filteredResults!.map((category, i) => (
          <Square category={category} key={i} />
        ))}
      </S.MusicGrid>
    </S.MusicContainer>
  )
}

export default Music
