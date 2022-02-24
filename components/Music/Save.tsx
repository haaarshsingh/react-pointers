import React from 'react'

import {
  Backdrop,
  BackdropContainer,
  Button,
  Checkbox,
  CheckboxContainer,
  Label,
  TitleInput,
} from './Music.style'

import { dropIn } from '@anims/music'
import { Fade } from '@anims/index'

import { AnimatePresence } from 'framer-motion'

import useClickOutside from 'use-click-outside'

const Save: React.FC<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ open, setOpen }) => {
  const modalRef = React.useRef<HTMLDivElement>(null)

  return (
    <AnimatePresence>
      {open && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role='dialog'
          aria-modal='true'
          onClick={() => setOpen((open) => !open)}
        >
          <BackdropContainer
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            ref={modalRef}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <TitleInput placeholder='Title Your Track...' variants={Fade} />
            <CheckboxContainer variants={Fade}>
              <Checkbox type='checkbox' />
              <Label>Private</Label>
            </CheckboxContainer>
            <Button
              variants={Fade}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Publish Track
            </Button>
          </BackdropContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}

export default Save
