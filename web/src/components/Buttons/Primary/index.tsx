import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';

interface IButton extends InputHTMLAttributes<HTMLInputElement>{
    type: 'button' | 'reset' | 'submit';
    onClick: () => void;
}

const PrimaryButton = ({children, type, onClick}: IButton) => {
  return (
    <C.Button type={type} onClick={onClick}>
        {children}
    </C.Button>
  )
}

export default PrimaryButton