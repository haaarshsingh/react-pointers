import type { Config } from './types'

/**
 * Apply custom cursors to elements.
 * @param config Array of cursor configurations
 */
export const applyCustomCursors = (config: Config[]): void => {
  config.forEach(
    ({
      selectors,
      cursorPath,
      hotspotX = 0,
      hotspotY = 0,
      fallback = 'auto',
    }) => {
      if (!Array.isArray(selectors) || selectors.length === 0) {
        console.warn('The "selector" must be a non-empty array of strings.')
        return
      }

      const cursorUrl = `${cursorPath} ${hotspotX} ${hotspotY}`

      selectors.forEach((singleSelector) => {
        const elements = document.querySelectorAll(singleSelector)

        if (!elements.length) {
          console.warn(`No elements match the selector: "${singleSelector}"`)
          return
        }

        elements.forEach((el) => {
          ;(el as HTMLElement).style.cursor = `url(${cursorUrl}), ${fallback}`
        })
      })
    }
  )
}

export type { Config } from './types'
