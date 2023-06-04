import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';

interface IButton extends InputHTMLAttributes<HTMLInputElement>{
    type: 'button' | 'reset' | 'submit';
    onClick?: () => void;
    loading: boolean;
    danger?:boolean;
}

const PrimaryButton = ({children, type, onClick, loading, danger}: IButton) => {
  return (
    <C.Button type={type} onClick={onClick} loading={+loading} disabled={loading} danger={danger}>
        {children}
    </C.Button>
  )
}

export default PrimaryButton