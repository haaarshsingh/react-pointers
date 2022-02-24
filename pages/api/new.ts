import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

import { nanoid } from 'nanoid'

const newTrack = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  const { title, isPrivate, sounds } = req.body

  return prisma.track
    .create({
      data: {
        slug: nanoid(5),
        title: title,
        private: isPrivate,
        sounds: sounds,
        likes: 0,
        user: { connect: { username: session?.user?.name! } },
      },
    })
    .then(() => res.status(200).end())
    .catch((err) => {
      console.log(err)
      res.status(409).end()
    })
}

export default newTrack
