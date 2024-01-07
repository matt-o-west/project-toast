import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toastDetails, setToastDetails] = React.useState({
    message: '',
    variant: 'notice',
    id: '',
  })
  const [toastArray, setToastArray] = React.useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newToast = {
      ...toastDetails,
      id: Date.now().toString(),
    }

    setToastArray((prevArray) => [...prevArray, newToast])
    setTimeout(() => {
      setToastArray((prevArray) =>
        prevArray.filter((toast) => toast.id !== newToast.id)
      )
    }, 3000)
    setToastDetails({
      message: '',
      variant: 'notice',
      id: '',
    })
  }

  const handleDismiss = (id) => {
    setToastArray((prevArray) => prevArray.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider
      value={{
        toastArray,
        setToastArray,
        toastDetails,
        setToastDetails,
        handleSubmit,
        handleDismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
