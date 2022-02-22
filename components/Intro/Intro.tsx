import React from "react"

import { IoSearchOutline } from "react-icons/io5"

import * as S from "./Intro.style"
import Music from "@components/Music/Music"

import { FadeContainer, FadeReverse } from "@anims/index"
import { Search } from "@anims/intro"

const Intro: React.FC = () => {
  const [query, setQuery] = React.useState("")

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.currentTarget.value)
  }

  return (
    <S.Container variants={FadeContainer} initial="hidden" animate="visible">
      <S.Title
        colour
        text="Craft chill, and soothing music"
        custom={0}
        delay={0}
        heading="h1"
      />
      <S.Title
        text="Ambient sounds for focusing"
        custom={0}
        delay={0}
        heading="h1"
      />
      <S.Description variants={FadeReverse}>
        Groovi allows you to create, share, and remix different sounds to create
        the perfect productivity and focus mix for you! Pick some sounds and
        play around with the values to get started
      </S.Description>
      <S.Search variants={FadeContainer} initial="hidden" animate="visible">
        <S.SearchIcon variants={Search}>
          <IoSearchOutline />
        </S.SearchIcon>
        <S.SearchInput
          placeholder="Search sounds..."
          variants={FadeReverse}
          onChange={changeHandler}
        />
      </S.Search>
      <Music query={query} />
    </S.Container>
  )
}

export default Intro
