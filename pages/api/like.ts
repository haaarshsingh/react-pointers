import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

const like = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  const { slug, removing } = req.body

  if (removing) {
    return prisma.like
      .deleteMany({
        where: {
          userId: session?.user?.name!,
          trackSlug: slug,
        },
      })
      .then(() => res.status(200).end())
      .catch((err) => res.status(400).json({ error: err }))
  } else
    return prisma.like
      .create({
        data: {
          user: { connect: { username: session?.user?.name! } },
          track: { connect: { slug: slug } },
        },
      })
      .then(() => res.status(200).end())
      .catch((err) => res.status(400).end())
}

export default like
