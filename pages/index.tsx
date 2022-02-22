import { NextPage } from "next"

import Nav from "@components/Nav/Nav"
import Intro from "@components/Intro/Intro"

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
    </div>
  )
}

export default Home
