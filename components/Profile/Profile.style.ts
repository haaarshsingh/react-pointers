import { styled } from '@stitches/react'
import { motion } from 'framer-motion'

import WavyText from '@anims/WavyText'

export const Container = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '200px 0 0 20%',
})

export const Avatar = styled(motion.img, {
  width: 200,
  height: 200,
  borderRadius: '100%',
})

export const Name = styled(WavyText, {
  fontSize: '$6',
  color: '$primary',
  margin: '30px 0 20px 0',
})

export const Username = styled(WavyText, {
  fontSize: '$4',
  color: '$black10',
})
