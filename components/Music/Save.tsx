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

import categories from './Categories'

const Save: React.FC<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ open, setOpen }) => {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLInputElement>(null)
  const privateRef = React.useRef<HTMLInputElement>(null)

  const PublishTrack = () => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const body = JSON.stringify({
      title: titleRef.current?.value,
      isPrivate: privateRef.current?.checked,
      sounds: categories,
    })

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: body,
    }

    fetch('/api/new', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

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
            <TitleInput
              placeholder='Title Your Track...'
              variants={Fade}
              ref={titleRef}
            />
            <CheckboxContainer variants={Fade}>
              <Checkbox type='checkbox' ref={privateRef} />
              <Label>Private</Label>
            </CheckboxContainer>
            <Button
              variants={Fade}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={PublishTrack}
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
