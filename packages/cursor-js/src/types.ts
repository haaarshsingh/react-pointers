export type Config = {
  /**
   * The selector(s) to apply the custom cursor to
   */
  selectors?: string[]
  /**
   * The image path of the cursor
   */
  cursorPath: string
  /**
   * The width of the cursor's hotspot
   * @default 0
   */
  hotspotX?: number
  /**
   * The height of the cursor's hotspot
   * @default 0
   */
  hotspotY?: number
  /**
   * The fallback CSS cursor
   * @default auto
   */
  fallback?: string
  /**
   * Set cursor to be the default cursor
   * @default false
   */
  defaultCursor?: boolean
}
