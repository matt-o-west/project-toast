import React from 'react'
const useEscapeKey = (callback) => {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}

export default useEscapeKey
