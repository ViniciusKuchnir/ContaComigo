import React, { ButtonHTMLAttributes } from 'react'
import * as C from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLInputElement>{
    onClick: () => void;
    label?: string;
}

const TertiaryButton = ({children, label, onClick}: IButton) => {
  return (
    <C.Container>
      {label && <span>{label}</span>}
      <C.Button type='button' onClick={onClick}>
        {children}
      </C.Button>
    </C.Container>
  )
}

export default TertiaryButton;