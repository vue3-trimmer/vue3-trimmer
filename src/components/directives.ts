export function resize(element: HTMLDivElement & { parentElement?: HTMLDivElement }) {
  let active: HTMLElement | null = null
  let initialRect: { width: number; right: number; left: number } | null = null
  let initialPos: { x: number; y: number } | null = null

  const left = document.createElement('div')
  left.dataset.direction = 'west'
  left.classList.add('grabber')
  left.classList.add('left')

  const right = document.createElement('div')
  right.dataset.direction = 'east'
  right.classList.add('grabber')
  right.classList.add('right')

  const grabbers = [left, right]
  grabbers.forEach((grabber) => {
    element.appendChild(grabber)
    grabber.addEventListener('mousedown', onMousedown)
  })

  function onMousedown(event: MouseEvent) {
    active = event.target as HTMLElement
    const rect = element.getBoundingClientRect()
    const parent = element.parentElement.getBoundingClientRect()

    initialRect = {
      width: rect.width,
      right: rect.right - parent.right,
      left: parent.left - rect.left,
    }
    initialPos = { x: event.pageX, y: event.pageY }
    active.classList.add('selected')
  }

  function onMouseup() {
    if (!active)
      return

    active.classList.remove('selected')

    active = null
    initialRect = null
    initialPos = null
  }
  function onMove(event: MouseEvent) {
    if (!active || !initialPos || !initialRect)
      return
    const direction = active.dataset.direction
    let delta

    if (direction === 'west') {
      delta = initialPos.x - event.pageX
      element.style.width = `${initialRect.width + delta}px`
    }

    if (direction === 'east') {
      delta = event.pageX - initialPos.x
      element.style.width = `${initialRect.width + delta}px`
    }
  }

  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onMouseup)
  return {
    destroy() {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onMousedown)

      grabbers.forEach((grabber) => {
        element.removeChild(grabber)
      })
    },
  }
}
