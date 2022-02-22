import React from "react"

import { container } from "@anims/music"
import * as S from "./Music.style"
import Square from "./Square"

import categories from "./Categories"

const Music: React.FC = () => {
  return (
    <S.MusicContainer>
      <S.MusicGrid variants={container} initial="hidden" animate="visible">
        {categories.map((category, i) => (
          <Square category={category} key={i} />
        ))}
      </S.MusicGrid>
    </S.MusicContainer>
  )
}

export default Music
