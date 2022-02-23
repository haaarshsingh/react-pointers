import { GetServerSideProps, NextPage } from 'next'

import Nav from '@components/Nav/Nav'

const Profile: NextPage = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = prisma?.user.findUnique({
    where: {
      username: context.params?.id?.toString(),
    },
  })

  return {
    props: {
      user: user,
    },
  }
}

export default Profile
