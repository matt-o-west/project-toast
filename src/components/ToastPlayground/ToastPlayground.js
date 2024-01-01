import React from 'react'

import Button from '../Button'
import Toast from '../Toast'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
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

    setToastArray([...toastArray, newToast])
    setTimeout(() => {
      setToastArray(toastArray.map((toast) => toast.id !== newToast.id))
    }, 3000)
  }

  const handleDismiss = (e) => {
    setToastArray(toastArray.filter((toast) => toast.id !== e.target.id))
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {toastArray.length > 0 &&
        toastArray.map((toast) => {
          return (
            <Toast
              variant={toast.variant}
              key={toast.id}
              handleDismiss={handleDismiss}
            >
              {toast.message}
            </Toast>
          )
        })}
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              onChange={(e) =>
                setToastDetails({ ...toastDetails, message: e.target.value })
              }
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <label htmlFor='variant-notice'>
              {VARIANT_OPTIONS.map((variant) => ({
                variant,
                label: variant,
              })).map(({ variant, label }) => (
                <React.Fragment key={variant}>
                  <input
                    id={`variant-${variant}`}
                    type='radio'
                    name='variant'
                    value={variant}
                    checked={toastDetails.variant === variant}
                    onChange={(e) =>
                      setToastDetails({
                        ...toastDetails,
                        variant: e.target.value,
                      })
                    }
                  />
                  {label}
                </React.Fragment>
              ))}
            </label>

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
