import React, { createContext, ReactNode, useState } from 'react'

type MouseContext = {
  cursorType: string
  cursorChangeHandler: (cursorType: string) => void
}

export const MouseContext = createContext<MouseContext>({
  cursorType: '',
  cursorChangeHandler: () => {},
})

export const MouseContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cursorType, setCursorType] = useState('')

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  )
}
