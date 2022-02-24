import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

import prisma from '@lib/prisma'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.SECRET },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const existingUser = await prisma.user.findUnique({
        where: {
          username: user.id,
        },
      })

      if (!existingUser) {
        try {
          await prisma.user.create({
            data: {
              avatar_url: user.image!,
              name: user.name!,
              username: user.id,
            },
          })

          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }

      return true
    },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      session.user!.name = token.sub

      return session
    },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },
  events: {},
  debug: false,
})
