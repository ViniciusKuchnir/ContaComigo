import React from 'react'
import * as C from './styles';
import { MdAdd } from 'react-icons/md';

type Props = {
  onClick: () => void;
  text: string;
}

const FlatButton = ({onClick, text}: Props) => {
  return (
    <C.Container onClick={onClick}>
      {text && <span>{text}</span>}
      <MdAdd size={24} />
    </C.Container>
  )
}

export default FlatButton