import React from 'react'

import { styled } from '@css/theme.config'
import { AnimatePresence, motion } from 'framer-motion'

import { IoArrowUp } from 'react-icons/io5'

import { ScaleContainer } from '@anims/intro'

const ButtonContainer = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$main',
  padding: 20,
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  fontSize: '$5',
  color: '$primary',
  borderRadius: '100%',
  '&:hover': {
    cursor: 'pointer',
  },
})

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {showButton && (
        <ButtonContainer
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <IoArrowUp />
        </ButtonContainer>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
