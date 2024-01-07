import React from 'react'
import useEscapeKey from '../../hooks/useEscapeKey'
import Button from '../Button'
import ToastShelf from '../ToastShelf'
import { ToastContext } from '../ToastProvider'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const {
    toastArray,
    setToastArray,
    toastDetails,
    setToastDetails,
    handleSubmit,
    handleDismiss,
  } = React.useContext(ToastContext)

  useEscapeKey(() => setToastArray([]))

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toastArray={toastArray} handleDismiss={handleDismiss} />
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
              value={toastDetails.message}
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
