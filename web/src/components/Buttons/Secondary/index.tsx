import React, { InputHTMLAttributes } from 'react'
import * as C from './styles';

interface IButton extends InputHTMLAttributes<HTMLInputElement>{
    onClick?: () => void;
}

const SecondaryButton = ({children, onClick}: IButton) => {
  return (
    <C.Button type='button' onClick={onClick}>
        {children}
    </C.Button>
  )
}

export default SecondaryButton