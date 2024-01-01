import React from 'react'

import styles from './Button.module.css'

function Button({ className = '', type, ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      {...delegated}
    />
  )
}

export default Button
