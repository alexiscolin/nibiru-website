import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
    cursorX: 0,
    cursorY: 0,
  })

  const updatePosition = (e: any) => {
    const { clientX, clientY } = e

    setPosition({
      clientX,
      clientY,
      cursorX: clientX / document.body.clientWidth - 0.5,
      cursorY: clientY / document.body.clientHeight - 0.5,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false)
    document.addEventListener('mouseenter', updatePosition, false)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

export default useMousePosition
