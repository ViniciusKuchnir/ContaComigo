import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    type: 'text' | 'email' | 'password' | 'date' | 'number';
    placeholder: string;
    label: string;
    error: string | undefined;
    register: UseFormRegisterReturn;
    required: boolean;
    step?: string;
}

const TextField = ({id, type, label, placeholder, required, register, step, error, readOnly}: IInput) => {
  return (
    <C.Container>
        <C.Label htmlFor={id} >{label} {!required && <span>(Optional)</span>}</C.Label>
        <C.Input 
            id={id} 
            type={type} 
            placeholder={placeholder}
            {...register}
            step={step && step}
            readOnly={readOnly}
        />
        {error && <C.Error>{error}</C.Error>}
    </C.Container>
  )
}

export default TextField