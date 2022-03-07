import { Prisma } from '@prisma/client'

const trackWithLikes = Prisma.validator<Prisma.UserArgs>()({
  include: { likes: true },
})
export type TrackWithLikes = Prisma.UserGetPayload<typeof trackWithLikes>

const userWithLikes = Prisma.validator<Prisma.UserArgs>()({
  include: { likes: true },
})
export type userWithLikes = Prisma.UserGetPayload<typeof trackWithLikes>
