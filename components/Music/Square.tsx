import React from "react"

import { IconType } from "react-icons/lib"

import { item } from "@anims/music"
import * as S from "./Music.style"

const Square: React.FC<{ category: { name: string; icon: IconType } }> = ({
  category,
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const volumeRef = React.useRef<HTMLInputElement>(null)
  const [volume, setVolume] = React.useState(100)

  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    active ? audioRef.current?.play() : audioRef.current?.pause()
  }, [active, setActive])

  React.useEffect(() => {
    audioRef.current!.volume = volume / 100
  }, [volume, setVolume])

  return (
    <S.AudioBox
      aria-label={category.name}
      className={active ? "playing" : ""}
      variants={item}
    >
      <S.AudioController loop ref={audioRef}>
        <source src={`/${category.name.toLowerCase()}.mp3`} type="audio/mp3" />
      </S.AudioController>
      <S.BoxMain onClick={() => setActive((active) => !active)}>
        <category.icon />
        <S.AudioText>{category.name}</S.AudioText>
      </S.BoxMain>
      <S.BarContainer
        style={{ display: active ? "flex" : "none" }}
        onClick={() => (active ? "" : setActive((active) => !active))}
      >
        <S.Bar
          type="range"
          min={0}
          max={100}
          onChange={() => setVolume(parseInt(volumeRef.current?.value!))}
          ref={volumeRef}
          defaultValue={volume}
        />
      </S.BarContainer>
    </S.AudioBox>
  )
}

export default Square
