import React, { FC, useEffect } from 'react'
import { CursorProps, Cursor as C } from './types'
import { useMousePosition } from './hooks/useMousePosition'
import { useCursor } from './hooks/useCursor'

export const Cursor: FC<Partial<CursorProps>> = (props) => {
  const { x, y } = useMousePosition()

  const { cursor, setCursorState } = useCursor()

  useEffect(() => {
    const cursorTypes = Object.keys(props) as Array<keyof CursorProps>
    const tags = cursorTypes.flatMap((cursorType) => props[cursorType]?.query)

    tags.forEach((e) => {
      const elements = document.querySelectorAll(e!)
      elements.forEach((element) => {
        element.addEventListener('mouseout', () => setCursorState(C.Default))
      })
    })

    props.pointer?.query?.forEach((e) => {
      const elements = document.querySelectorAll(e)
      elements.forEach((element) => {
        element.addEventListener('mouseover', () => setCursorState(C.Pointer))
      })
    })

    return () =>
      tags.forEach((e) => {
        const elements = document.querySelectorAll(e!)
        elements.forEach((element) => {
          element.removeEventListener('mouseout', () =>
            setCursorState(C.Default)
          )
        })
      })
  }, [])

  const getActiveCursor = () => {
    switch (cursor) {
      case C.Default: {
        if (props.default) return props.default.cursor
      }
      case C.Pointer: {
        if (props.pointer) return props.pointer.cursor
      }
      case C.Wait: {
        if (props.wait) return props.wait.cursor
      }
      case C.Text: {
        if (props.text) return props.text.cursor
      }
      case C.Move: {
        if (props.move) return props.move.cursor
      }
      case C.Help: {
        if (props.help) return props.help.cursor
      }
      case C.NotAllowed: {
        if (props.notAllowed) return props.notAllowed.cursor
      }
      case C.None: {
        if (props.none) return props.none.cursor
      }
      case C.ContextMenu: {
        if (props.contextMenu) return props.contextMenu.cursor
      }
      case C.Progress: {
        if (props.progress) return props.progress.cursor
      }
      case C.Cell: {
        if (props.cell) return props.cell.cursor
      }
      case C.Crosshair: {
        if (props.crosshair) return props.crosshair.cursor
      }
      case C.VerticalText: {
        if (props.verticalText) return props.verticalText.cursor
      }
      case C.Alias: {
        if (props.alias) return props.alias.cursor
      }
      case C.Copy: {
        if (props.copy) return props.copy.cursor
      }
      case C.NoDrop: {
        if (props.noDrop) return props.noDrop.cursor
      }
      case C.Grab: {
        if (props.grab) return props.grab.cursor
      }
      case C.Grabbing: {
        if (props.grabbing) return props.grabbing.cursor
      }
      case C.AllScroll: {
        if (props.allScroll) return props.allScroll.cursor
      }
      case C.ColResize: {
        if (props.colResize) return props.colResize.cursor
      }
      case C.RowResize: {
        if (props.rowResize) return props.rowResize.cursor
      }
      case C.NResize: {
        if (props.nResize) return props.nResize.cursor
      }
      case C.EResize: {
        if (props.eResize) return props.eResize.cursor
      }
      case C.SResize: {
        if (props.sResize) return props.sResize.cursor
      }
      case C.WResize: {
        if (props.wResize) return props.wResize.cursor
      }
      case C.NeResize: {
        if (props.neResize) return props.neResize.cursor
      }
      case C.NwResize: {
        if (props.nwResize) return props.nwResize.cursor
      }
      case C.SeResize: {
        if (props.seResize) return props.seResize.cursor
      }
      case C.SwResize: {
        if (props.swResize) return props.swResize.cursor
      }
      case C.EwResize: {
        if (props.ewResize) return props.ewResize.cursor
      }
      case C.NsResize: {
        if (props.nsResize) return props.nsResize.cursor
      }
      case C.NeswResize: {
        if (props.neswResize) return props.neswResize.cursor
      }
      case C.NwseResize: {
        if (props.nwseResize) return props.nwseResize.cursor
      }
      case C.ZoomIn: {
        if (props.zoomIn) return props.zoomIn.cursor
      }
      case C.ZoomOut: {
        if (props.zoomOut) return props.zoomOut.cursor
      }
      default: {
        return C.Default
      }
    }
  }

  if (props.pointer) {
    return (
      <div
        style={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          /* Highest possible z-index value */
          zIndex: 2147483647,
        }}
      >
        {getActiveCursor()}
      </div>
    )
  }

  return null
}
