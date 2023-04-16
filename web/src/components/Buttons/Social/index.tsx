import React, { InputHTMLAttributes } from 'react'
import * as C from './styles';

interface IButton extends InputHTMLAttributes<HTMLInputElement>{
    onClick: () => void;
    name: string;
}

const SocialButton = ({children, onClick, name}: IButton) => {
  return (
    <C.Container>
        <button type='button' onClick={onClick}>
            {children}
        </button>
        <span>{name}</span>
    </C.Container>
  )
}

export default SocialButton