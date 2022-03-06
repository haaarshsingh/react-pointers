import { NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import Intro from '@components/Intro/Intro'
import Footer from '@components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <SEO title='Home' />
      <Nav />
      <Intro />
      <Footer />
    </>
  )
}

export default Home
