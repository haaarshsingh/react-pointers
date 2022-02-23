import React from 'react'

import * as S from './Profile.style'
import { User } from '@prisma/client'

import * as anims from '@anims/index'

const Profile: React.FC<{ profile: User }> = ({ profile }) => {
  return (
    <S.Container
      variants={anims.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <S.Avatar
        src={
          profile.avatar_url.startsWith('https://pbs.twimg.com')
            ? profile.avatar_url.replace('_normal', '')
            : profile.avatar_url
        }
        draggable='false'
        alt='image'
        variants={anims.Image}
      />
      <S.Name text={profile.name} heading='h1' delay={0.5} />
      <S.Username text={`@${profile.username}`} heading='p' />
    </S.Container>
  )
}

export default Profile
