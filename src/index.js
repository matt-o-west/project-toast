import React from 'react'
import ReactDOM from 'react-dom/client'
import ToastProvider from './components/ToastProvider/ToastProvider'
import './global-styles.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
)
