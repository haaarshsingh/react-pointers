import { getCsrfToken, getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

import { nanoid } from 'nanoid'

const newTrack = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getCsrfToken({ req })

  const { title, isPrivate, sounds } = req.body

  const track = await prisma.track.create({
    data: {
      slug: nanoid(5),
      title: title,
      private: isPrivate,
      sounds: sounds,
      user: { connect: { username: token } },
    },
  })
}

export default newTrack
