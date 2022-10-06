import { useState, useEffect } from 'react'

const useResize = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const getWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    setWidth(getWidth())

    // debounce
    let timeoutId: ReturnType<typeof setTimeout>
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}

export default useResize
