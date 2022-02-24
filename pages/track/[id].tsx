import { GetServerSideProps, NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import MusicBoard from '@components/Board/Board'

import prisma from '@lib/prisma'
import { Track } from '@prisma/client'

const Board: NextPage<{ track: Track }> = ({ track }) => {
  return (
    <>
      <SEO title={track.title} />
      <Nav />
      <MusicBoard track={track} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const track = await prisma?.track.findUnique({
    where: {
      slug: context.params?.id?.toString(),
    },
  })

  return {
    props: {
      track: track,
    },
  }
}

export default Board
