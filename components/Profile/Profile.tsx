import React from 'react'

import * as S from './Profile.style'

import { User } from '@prisma/client'
import { TrackWithLikes } from '@typings/index'

import * as anims from '@anims/index'

import { IoCalendar, IoHeart } from 'react-icons/io5'

const Profile: React.FC<{ profile: User; tracks: TrackWithLikes[] }> = ({
  profile,
  tracks,
}) => {
  return (
    <S.Container
      variants={anims.FadeContainer}
      initial='hidden'
      animate='visible'
      main
    >
      <S.Container>
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
      {tracks.length > 0 ? (
        <S.Grid>
          {tracks.map((track: any, i) => (
            <S.TrackContainer
              key={i}
              href={`/track/${track.slug}`}
              draggable={false}
              variants={anims.Fade}
            >
              <S.TrackTitle>{track.title}</S.TrackTitle>
              <S.BottomContainer>
                <S.InfoContainer>
                  <IoHeart />
                  {track.likes.length}
                </S.InfoContainer>
                <S.InfoContainer>
                  <IoCalendar /> {track.createdAt.toDateString()}
                </S.InfoContainer>
              </S.BottomContainer>
            </S.TrackContainer>
          ))}
        </S.Grid>
      ) : (
        <S.EmptyContainer>
          <S.EmptyText>No Tracks Created 😭</S.EmptyText>
          <S.Bottom>
            What're you waiting for? <a href='/'>Create a new track</a>
          </S.Bottom>
        </S.EmptyContainer>
      )}
    </S.Container>
  )
}

export default Profile
