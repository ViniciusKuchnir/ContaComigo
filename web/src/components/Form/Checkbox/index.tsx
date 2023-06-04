import React, { InputHTMLAttributes } from 'react';
import * as C from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}

const Checkbox = ({id}: Props) => {
  return (

    <C.Container>
        <C.Checkbox type='checkbox' id={id} />
        <C.Label htmlFor={id}/>
    </C.Container>

  )
}

export default Checkbox;
