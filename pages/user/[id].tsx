import { GetServerSideProps, NextPage } from 'next'

import Redirect from '@pages/404'
import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import UserProfile from '@components/Profile/Profile'
import Footer from '@components/Footer'

import prisma from '@lib/prisma'
import { Track, User } from '@prisma/client'

const Profile: NextPage<{ profile: User; tracks: Track[] }> = ({
  profile,
  tracks,
}) => {
  if (!profile) return <Redirect />

  return (
    <>
      <SEO title={profile.name} />
      <Nav />
      <UserProfile profile={profile} tracks={tracks} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await prisma.user.findUnique({
    where: {
      username: context.params?.id?.toString(),
    },
  })

  const tracks = await prisma.track.findMany({
    where: {
      userId: user?.username,
    },
    include: {
      likes: true,
    },
  })

  return {
    props: {
      profile: user,
      tracks: tracks,
    },
  }
}

export default Profile
