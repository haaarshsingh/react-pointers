import { NextPage } from 'next'

import Nav from '@components/Nav/Nav'
import MusicBoard from '@components/Board/Board'

const Board: NextPage = () => {
  return (
    <>
      <Nav />
      <MusicBoard />
    </>
  )
}

export default Board
