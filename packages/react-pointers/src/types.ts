import type { ReactElement, ReactNode } from 'react'

export enum Cursor {
  Default = 'default',
  Pointer = 'pointer',
  Wait = 'wait',
  Text = 'text',
  Move = 'move',
  Help = 'help',
  NotAllowed = 'not-allowed',
  None = 'none',
  ContextMenu = 'context-menu',
  Progress = 'progress',
  Cell = 'cell',
  Crosshair = 'crosshair',
  VerticalText = 'vertical-text',
  Alias = 'alias',
  Copy = 'copy',
  NoDrop = 'no-drop',
  Grab = 'grab',
  Grabbing = 'grabbing',
  AllScroll = 'all-scroll',
  ColResize = 'col-resize',
  RowResize = 'row-resize',
  NResize = 'n-resize',
  EResize = 'e-resize',
  SResize = 's-resize',
  WResize = 'w-resize',
  NeResize = 'ne-resize',
  NwResize = 'nw-resize',
  SeResize = 'se-resize',
  SwResize = 'sw-resize',
  EwResize = 'ew-resize',
  NsResize = 'ns-resize',
  NeswResize = 'nesw-resize',
  NwseResize = 'nwse-resize',
  ZoomIn = 'zoom-in',
  ZoomOut = 'zoom-out',
}

export type CursorProps = {
  default: CursorQueryTags
  pointer: CursorQueryTags
  wait: CursorQueryTags
  text: CursorQueryTags
  move: CursorQueryTags
  help: CursorQueryTags
  notAllowed: CursorQueryTags
  none: CursorQueryTags
  contextMenu: CursorQueryTags
  progress: CursorQueryTags
  cell: CursorQueryTags
  crosshair: CursorQueryTags
  verticalText: CursorQueryTags
  alias: CursorQueryTags
  copy: CursorQueryTags
  noDrop: CursorQueryTags
  grab: CursorQueryTags
  grabbing: CursorQueryTags
  allScroll: CursorQueryTags
  colResize: CursorQueryTags
  rowResize: CursorQueryTags
  nResize: CursorQueryTags
  eResize: CursorQueryTags
  sResize: CursorQueryTags
  wResize: CursorQueryTags
  neResize: CursorQueryTags
  nwResize: CursorQueryTags
  seResize: CursorQueryTags
  swResize: CursorQueryTags
  ewResize: CursorQueryTags
  nsResize: CursorQueryTags
  neswResize: CursorQueryTags
  nwseResize: CursorQueryTags
  zoomIn: CursorQueryTags
  zoomOut: CursorQueryTags
}

type CursorQueryTags = {
  cursor: ReactElement<any>
  query?: Array<string>
}

export type CursorContextType = {
  cursor: Cursor
  setCursorState: (cursor: Cursor) => void
}

export type CursorProviderType = {
  disabled: boolean
  children: ReactNode
}

export type UseCursorReturnType = {
  cursor: Cursor
  setCursorState: (cursor: Cursor) => void
}

export type UseMousePositionReturnType = {
  x: number
  y: number
}
