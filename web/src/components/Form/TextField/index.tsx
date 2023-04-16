import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    type: 'text' | 'email' | 'password';
    placeholder: string;
    label: string;
    error: string | undefined;
    register: UseFormRegisterReturn;
    required: boolean;
}

const TextField = ({id, type, label, placeholder, required, register, error}: IInput) => {
  return (
    <C.Container>
        <C.Label htmlFor={id} >{label} {!required && <span>(Optional)</span>}</C.Label>
        <C.Input 
            id={id} 
            type={type} 
            placeholder={placeholder}
            {...register}
        />
        {error && <C.Error>{error}</C.Error>}
    </C.Container>
  )
}

export default TextField