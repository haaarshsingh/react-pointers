import { styled } from '@css/theme.config'
import WavyText from '@anims/WavyText'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '175px 0 100px 0',
  width: '100vw',
  overflow: 'hidden',
})

export const Title = styled(WavyText, {
  fontSize: '$6',
  color: '$primary',
  variants: { colour: { true: { color: '$main ' } } },
})

export const Search = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  background: '$fg',
  fontSize: '$4',
  padding: 20,
  borderRadius: 15,
  color: '$primary',
  width: '40%',
  minWidth: 500,
  border: '2px solid $bg',
  userSelect: 'none',
  transition: '0.2s linear',
  '&:hover': { border: '2px solid $main' },
  '&:focus-within': { border: '2px solid $main' },
})

export const Description = styled(motion.p, {
  color: '#787185',
  fontSize: '$3',
  width: 500,
  textAlign: 'center',
  margin: '30px 0 50px 0',
})

export const SearchInput = styled(motion.input, {
  color: '$primary',
  background: 'none',
  border: 'none',
  outline: 'none',
  fontSize: '$3',
  marginLeft: 20,
  width: '90%',
  [`&${Search}`]: { border: '2px solid $main !important' },
})

export const SearchIcon = styled(motion.div, {
  width: 24,
  height: 24,
})
