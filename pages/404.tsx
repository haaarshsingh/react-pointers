import { NextPage } from 'next'

import { useRouter } from 'next/router'
import Loading from '@components/Loader'
import React from 'react'

const Redirect: NextPage = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/')
  }, [])

  return <Loading />
}

export default Redirect
