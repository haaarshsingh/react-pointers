import React from "react"

import { IconType } from "react-icons/lib"

import { item } from "@anims/music"
import * as S from "./Music.style"

const Square: React.FC<{ category: { name: string; icon: IconType } }> = ({
  category,
}) => {
  const volumeRef = React.useRef<HTMLInputElement>(null)
  const [volume, setVolume] = React.useState(100)

  const [active, setActive] = React.useState(false)

  return (
    <S.AudioBox
      aria-label={category.name}
      onClick={() => setActive((active) => !active)}
      className={active ? "playing" : ""}
      variants={item}
    >
      <category.icon />
      <S.AudioText>{category.name}</S.AudioText>
      <S.Bar
        type="range"
        min={0}
        max={100}
        onChange={() => setVolume(parseInt(volumeRef.current?.value!))}
        ref={volumeRef}
        defaultValue={volume}
        style={{ display: active ? "flex" : "none" }}
      />
    </S.AudioBox>
  )
}

export default Square
