import React, { TextareaHTMLAttributes, useRef } from 'react'
import * as C from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    placeholder: string;
    label: string;
    error: string | undefined;
    register: UseFormRegisterReturn;
    required: boolean;
    maxLength: number;
}

const Textarea = ({id, label, placeholder, required, register, maxLength, error}: ITextarea) => {
    
    return (
    <C.Container>
        <C.Label htmlFor={id} >{label} {!required && <span>(Optional)</span>}</C.Label>
        <C.Textarea 
            id={id}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            {...register}
        />
        <C.Error>{error}</C.Error>
    </C.Container>
  )
}

export default Textarea