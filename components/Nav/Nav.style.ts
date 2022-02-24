import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Nav = styled(motion.nav, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px 100px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  borderBottom: '2px solid $black5',
  userSelect: 'none',
  backdropFilter: 'blur(8px)',
  zIndex: 9999,
})

export const Container = styled(motion.a, {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  outline: 'none !important',
})

export const Logomark = styled(motion.h1, {
  fontSize: '$4',
  color: '$primary',
})

export const Button = styled(motion.a, {
  background: '$fg',
  color: '$primary',
  padding: '15px 25px',
  fontSize: '$3',
  borderRadius: 10,
  transition: '0.1s linear',
  textDecoration: 'none',
  '&:hover': { background: '#3B3743' },
  variants: {
    coloured: {
      true: {
        background: '$main',
        '&:hover': { background: '#FF9ACB' },
        marginRight: 20,
      },
    },
  },
})
