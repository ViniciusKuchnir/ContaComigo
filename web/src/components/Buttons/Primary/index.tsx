import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';

interface IButton extends InputHTMLAttributes<HTMLInputElement>{
    type: 'button' | 'reset' | 'submit';
    onClick?: () => void;
    loading: boolean;
}

const PrimaryButton = ({children, type, onClick, loading}: IButton) => {
  return (
    <C.Button type={type} onClick={onClick} loading={+loading} disabled={loading}>
        {children}
    </C.Button>
  )
}

export default PrimaryButton