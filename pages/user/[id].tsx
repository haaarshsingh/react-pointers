import { GetServerSideProps, NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import UserProfile from '@components/Profile/Profile'

import prisma from '@lib/prisma'
import { User } from '@prisma/client'
import { TrackWithLikes } from '@typings/index'

const Profile: NextPage<{ profile: User; tracks: TrackWithLikes[] }> = ({
  profile,
  tracks,
}) => {
  return (
    <div>
      <SEO title={profile.name} />
      <Nav />
      <UserProfile profile={profile} tracks={tracks} />
    </div>
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
