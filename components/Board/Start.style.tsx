import React from 'react'

import { styled } from '@stitches/react'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  userSelect: 'none',
})

export const StartBtnContainer = styled(motion.div, {
  background: '#ffa2f36e',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
})

export const PlayBtn = styled('svg', {
  zIndex: 100,
})

export const PlayIcon: React.FC<{ size: number }> = ({ size }) => {
  return (
    <PlayBtn
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      role='presentation'
    >
      <g transform='translate(2 2)'>
        <path
          d='M7,4a1.153,1.153,0,0,1-.239.71,3.861,3.861,0,0,1-.278.311l-.06.058A15.152,15.152,0,0,1,2.456,7.728,3.475,3.475,0,0,1,1.531,8h-.04a1.254,1.254,0,0,1-1.1-.66,5.462,5.462,0,0,1-.239-.885A17.629,17.629,0,0,1,0,4,15.213,15.213,0,0,1,.169,1.458,6.381,6.381,0,0,1,.348.748,1.275,1.275,0,0,1,.9.146,1.422,1.422,0,0,1,1.531,0a3.443,3.443,0,0,1,.825.224A15.224,15.224,0,0,1,6.413,2.906c.139.136.288.3.328.34A1.21,1.21,0,0,1,7,4'
          transform='translate(7 6)'
          fill='#FF7ABA'
        ></path>
      </g>
    </PlayBtn>
  )
}
