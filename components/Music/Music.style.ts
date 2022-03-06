import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const MusicContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  variants: { margin: { true: { marginTop: 175 } } },
})

export const TrackTitle = styled(motion.h1, {
  fontSize: '$6',
  color: '$primary',
})

export const TrackOptions = styled('div', {
  width: 890,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '50px 0 25px 0',
})

export const Option = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$main',
  color: '$primary',
  padding: 20,
  fontSize: 20,
  borderRadius: 7,
  transition: '0.1s linear',
  userSelect: 'none',
  '&:hover': { background: '#FF9ACB' },
  svg: {
    marginLeft: 10,
  },
  variants: {
    unactive: {
      true: {
        background: '$fg',
        '&:hover': { background: '#3B3743' },
        svg: {
          margin: '0 0 0 10px',
        },
      },
    },
    margin: {
      true: {
        svg: {
          margin: '0 10px 0 0',
        },
      },
    },
  },
})

export const MusicGrid = styled(motion.div, {
  display: 'grid',
  gap: 30,
  gridTemplateColumns: '200px 200px 200px 200px',
  gridTemplateRows: 'auto',
  width: 'fit-content',
  justifyContent: 'center',
  marginTop: 100,
  '.playing': {
    background: '$main',
  },
  variants: { margin: { true: { marginTop: 0 } } },
})

export const AudioBox = styled(motion.button, {
  outline: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$primary',
  background: '$fg',
  fontSize: '$6',
  width: 200,
  height: 200,
  borderRadius: 30,
  transition: '0.2s linear',
  userSelect: 'none',
  border: '$fg 2px solid',
  '&:hover': {
    border: '$main 2px solid',
    cursor: 'pointer',
  },
  variants: {
    viewOnly: {
      true: { '&:hover': { border: '$fg 2px solid', cursor: 'initial' } },
    },
  },
})

export const BoxMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
  width: '100%',
})

export const AudioText = styled('p', {
  fontSize: '$3',
  marginTop: 10,
})

export const BarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '10%',
  marginBottom: 20,
})

export const Bar = styled('input', {
  appearance: 'none',
  height: 7,
  outline: 'none',
  background: '$primary',
  borderRadius: 10,
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: 20,
    height: 20,
    borderRadius: 100,
    background: '$primary',
    cursor: 'pointer',
    transition: '0.1s linear',
  },
  '&::-webkit-slider-thumb:hover': {
    transform: 'scale(1.2)',
  },
  variants: {
    viewOnly: {
      true: {
        '&::-webkit-slider-thumb:hover': {
          transform: 'scale(1)',
          cursor: 'initial',
        },
      },
    },
  },
})

export const AudioController = styled('audio', {})

export const Button = styled(motion.button, {
  color: '$primary',
  padding: '20px 30px',
  fontSize: '$3',
  borderRadius: 10,
  margin: '50px 0 70px 0',
  border: 'none',
  textDecoration: 'none',
  background: '$main',
  userSelect: 'none',
  '&:hover': { background: '#FF9ACB', cursor: 'pointer' },
})

export const Backdrop = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background: '#000000e1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
})

export const BackdropContainer = styled(motion.div, {
  width: 600,
  height: 300,
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$bg',
})

export const TitleInput = styled(motion.input, {
  background: '$bg',
  outline: 'none',
  border: 'none',
  fontSize: '$5',
  color: '$primary',
  marginTop: 60,
  textAlign: 'center',
  width: '90%',
  userSelect: 'none',
})

export const CheckboxContainer = styled(motion.div, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'fit-content',
  margin: '25px 0 30px 0',
})

export const Label = styled('label', {
  color: '$primary',
  fontSize: '$3',
  marginLeft: 10,
})

export const Checkbox = styled('input', {
  appearance: 'none',
  backgroundColor: '$bg',
  color: 'CurrentColor',
  width: 30,
  height: 30,
  border: '3px solid $main',
  borderRadius: 5,
  transform: 'translate(0.15em)',
  display: 'grid',
  placeContent: 'center',
  outline: 'none',
  '&::before': {
    content: '',
    width: 30,
    height: 30,
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    boxShadow: 'inset 30px 30px #FFF',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
  },
  '&:checked::before': {
    transform: 'scale(1)',
    width: 30,
    height: 30,
  },
})

export const StartContainer = styled(motion.div, {
  background: '#33FF7A70',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PlayBtn = styled('svg', {
  zIndex: 100,
})
