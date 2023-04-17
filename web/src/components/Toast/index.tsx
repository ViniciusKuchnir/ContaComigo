import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from '../../contexts/theme'
import { Theme } from '../../types/theme'

const Toast = () => {

    const { theme } = useContext(ThemeContext) as Theme; 

  return (
    <ToastContainer
        toastClassName='toast-message'
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'light' ? 'light' : 'dark'}
    />
  )
}

export {Toast}