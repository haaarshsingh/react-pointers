import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

import { nanoid } from 'nanoid'

const newTrack = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  const { title, isPrivate, sounds } = req.body
  const slug = nanoid(5)

  return prisma.track
    .create({
      data: {
        slug: slug,
        title: title,
        private: isPrivate,
        sounds: sounds,
        user: { connect: { username: session?.user?.name! } },
      },
    })
    .then(() => res.status(200).json({ id: slug }))
    .catch((err) => {
      console.log(err)
      res.status(409).end()
    })
}

export default newTrack
