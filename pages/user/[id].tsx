import { GetServerSideProps, NextPage } from 'next'

import Nav from '@components/Nav/Nav'
import UserProfile from '@components/Profile/Profile'

import prisma from '@lib/prisma'
import { User } from '@prisma/client'

const Profile: NextPage<{ profile: User }> = ({ profile }) => {
  return (
    <div>
      <Nav />
      <UserProfile profile={profile} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params?.id?.toString())

  const user = await prisma?.user.findUnique({
    where: {
      username: context.params?.id?.toString(),
    },
  })

  console.log(user)

  return {
    props: {
      profile: user,
    },
  }
}

export default Profile
