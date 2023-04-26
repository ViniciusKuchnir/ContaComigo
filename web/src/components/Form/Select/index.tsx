import React, { SelectHTMLAttributes } from 'react'
import * as C from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Options } from '../../../types/OptionSelect';

interface ISelect extends  SelectHTMLAttributes<HTMLSelectElement>{
    id: string;
    options: Options[];
    label: string;
    placeholder: string;
    error: string | undefined;
    register: UseFormRegisterReturn;
    required: boolean;
}

const Select = ({id, options, label, placeholder, error, register, required}: ISelect) => {
  return (
    <C.Container>
        <C.Label htmlFor={id} >{label} {!required && <span>(Optional)</span>}</C.Label>
        <C.Select id={id} placeholder={placeholder} defaultValue='' {...register}>
            <option value='' disabled hidden>Please Choose...</option>
            {
                options.map((item) => {
                    return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })
            }
        </C.Select>
        {error && <C.Error>{error}</C.Error>}
    </C.Container>
  )
}

export default Select