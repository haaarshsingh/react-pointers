import React from 'react'
import { styled } from '@css/theme.config'

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

const Loading: React.FC = () => {
  return (
    <Box>
      <LoadingAnimation />
    </Box>
  )
}

const LoadingAnimation: React.FC = () => {
  return (
    <div className='loader'>
      <div className='loader-inner'>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
