import { NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import Intro from '@components/Intro/Intro'

const Home: NextPage = () => {
  return (
    <div>
      <SEO title='Home' />
      <Nav />
      <Intro />
    </div>
  )
}

export default Home
