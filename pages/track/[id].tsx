import { useState } from 'react'

import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import type { Session } from 'next-auth'

import Redirect from '@pages/404'
import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import MusicBoard from '@components/Board/Board'

import prisma from '@lib/prisma'
import { Track } from '@prisma/client'
import Footer from '@components/Footer'
import { userWithLikes } from '@typings/index'

import * as S from '@components/Board/Start.style'

const Board: NextPage<{
  track: Track
  user: userWithLikes
  session: Session
}> = ({ track, user, session }) => {
  if ((track.userId !== session?.user?.name && track.private) || !track)
    return <Redirect />

  const [interacted, setInteracted] = useState(false)

  return (
    <>
      <SEO title={track.title} />
      {interacted ? (
        <>
          <Nav />
          <MusicBoard track={track} user={user} />
          <Footer />
        </>
      ) : (
        <S.Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <S.StartBtnContainer
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setInteracted(true)}
          >
            <S.PlayIcon size={100} />
          </S.StartBtnContainer>
        </S.Container>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context) => {
  const session = await getSession(context)

  const track = await prisma?.track.findUnique({
    where: {
      slug: context.params?.id?.toString(),
    },
    include: {
      likes: true,
    },
  })

  if (session) {
    const user = await prisma?.user.findUnique({
      where: {
        username: session?.user?.name!,
      },
      include: {
        likes: true,
      },
    })

    return {
      props: {
        track: track,
        user: user,
        session: session,
      },
    }
  }

  return {
    props: {
      track: track,
      session: session,
    },
  }
}

export default Board
