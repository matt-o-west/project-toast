import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toastArray, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.length > 0 &&
        toastArray.map((toast) => {
          return (
            <li className={styles.toastWrapper}>
              <Toast
                variant={toast.variant}
                key={toast.id}
                handleDismiss={handleDismiss}
                id={toast.id}
              >
                {toast.message}
              </Toast>
            </li>
          )
        })}
    </ol>
  )
}

export default ToastShelf
