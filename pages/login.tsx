import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Provider } from 'next-auth/providers'
import { getProviders, useSession } from 'next-auth/react'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import Login from '@components/Login/Login'

const Authenticate: NextPage<{ providers: Provider }> = ({ providers }) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  if (session) router.push('/')

  return (
    <>
      <SEO title='Login' />
      <Nav />
      <Login provider={providers} />
    </>
  )
}

export default Authenticate

export const getServerSideProps = async () => {
  return {
    props: { providers: await getProviders() },
  }
}
