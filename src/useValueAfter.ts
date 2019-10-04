import { useState, useEffect } from 'react'

/**
 * 
 * @param arr 
 * @param delay 
 * @param startIndex 
 */
export const useValueAfter = (arr: any[] = [], delay: number = 1000, startIndex: number = 0) => {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((index + 1) % arr.length)
    }, delay)
    return () => clearInterval(timerId)
  }, [index])

  return arr[index]
}
