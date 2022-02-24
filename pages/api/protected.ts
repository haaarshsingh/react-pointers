import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

const protectedHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    return res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    })
  }

  res.send({
    error: 'You must be sign in to view the protected content on this page.',
  })
}

export default protectedHandler
