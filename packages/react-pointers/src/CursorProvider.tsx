import React, { createContext, FC, ReactNode, useState } from 'react'
import { Cursor, CursorContextType } from './types'

export const CursorContext = createContext<CursorContextType>({
  cursor: Cursor.Default,
  setCursorState: () => {},
})

export const CursorProvider = (({ children }) => {
  const [cursor, setCursor] = useState<Cursor>(Cursor.Default)

  const setCursorState = (cursor: Cursor) => {
    setCursor(cursor)
  }

  return (
    <CursorContext.Provider
      value={{
        cursor: cursor,
        setCursorState: setCursorState,
      }}
    >
      <style>{`*{cursor:none!important;}`}</style>
      {children}
    </CursorContext.Provider>
  )
}) as FC<{ children: ReactNode }>
