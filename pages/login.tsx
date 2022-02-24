import { NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import Login from '@components/Login/Login'

import { Provider } from 'next-auth/providers'
import { getProviders } from 'next-auth/react'

const Authenticate: NextPage<{ providers: Provider }> = ({ providers }) => {
  return (
    <div>
      <SEO title='Login' />
      <Nav />
      <Login provider={providers} />
    </div>
  )
}

export default Authenticate

export const getServerSideProps = async () => {
  return {
    props: { providers: await getProviders() },
  }
}
