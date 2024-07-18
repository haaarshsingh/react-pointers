import { useContext } from 'react'
import { CursorContext } from '../CursorProvider'
import { UseCursorReturnType } from '../types'

/**
 *
 */
export const useCursor = (): UseCursorReturnType => {
  const context = useContext(CursorContext)

  if (!context)
    throw new Error('useCursor must be called inside the CursorProvider')

  return {
    cursor: context.cursor,
    setCursorState: context.setCursorState,
  }
}
