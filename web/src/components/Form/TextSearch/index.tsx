import React, { InputHTMLAttributes } from 'react'
import * as C from './styles';
import { MdSearch } from 'react-icons/md';

interface ITextSearch extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    placeholder: string;
}

const TextSearch = ({id, placeholder, value, onChange}: ITextSearch) => {
  return (
    <C.Container>
        <C.Icon />
        <input 
            id={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </C.Container>
  )
}

export default TextSearch