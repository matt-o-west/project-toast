import React from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ children, variant = 'notice', handleDismiss, id }) {
  const Icon = ICONS_BY_VARIANT[variant]
  console.log(id)

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}:</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} onClick={() => handleDismiss(id)} />
      </button>
    </div>
  )
}

export default Toast
